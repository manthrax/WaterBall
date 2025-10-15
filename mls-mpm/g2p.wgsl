struct Particle {
    position: vec3f,
    material_type: u32,
    v: vec3f,
    _padding: u32,
    C: mat3x3f,
    F: mat3x3f,
}
struct Cell {
    vx: i32, 
    vy: i32, 
    vz: i32, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override dt: f32; 

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<storage, read> cells: array<Cell>;
@group(0) @binding(2) var<uniform> real_box_size: vec3f;
@group(0) @binding(3) var<uniform> init_box_size: vec3f;
@group(0) @binding(4) var<uniform> numParticles: u32;
@group(0) @binding(5) var<uniform> sphereRadius: f32;
@group(0) @binding(6) var<uniform> gravityMode: u32;
@group(0) @binding(7) var<uniform> damping: f32;
@group(0) @binding(8) var<uniform> wallFriction: f32;
@group(0) @binding(9) var<uniform> wallRestitution: f32;
@group(0) @binding(10) var<uniform> sphericalConstraintStrength: f32;
@group(0) @binding(11) var<uniform> gravityStrength: f32;

fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

// SDF for axis-aligned box boundary
// Returns: negative inside, positive outside, 0 on surface
fn boxSDF(p: vec3f, boxMin: vec3f, boxMax: vec3f) -> f32 {
    let center = (boxMin + boxMax) * 0.5;
    let halfSize = (boxMax - boxMin) * 0.5;
    let q = abs(p - center) - halfSize;
    return length(max(q, vec3f(0.0))) + min(max(q.x, max(q.y, q.z)), 0.0);
}

// Calculate gradient of SDF (surface normal)
fn boxSDFGradient(p: vec3f, boxMin: vec3f, boxMax: vec3f) -> vec3f {
    let epsilon = 0.01;
    let dx = boxSDF(p + vec3f(epsilon, 0.0, 0.0), boxMin, boxMax) - boxSDF(p - vec3f(epsilon, 0.0, 0.0), boxMin, boxMax);
    let dy = boxSDF(p + vec3f(0.0, epsilon, 0.0), boxMin, boxMax) - boxSDF(p - vec3f(0.0, epsilon, 0.0), boxMin, boxMax);
    let dz = boxSDF(p + vec3f(0.0, 0.0, epsilon), boxMin, boxMax) - boxSDF(p - vec3f(0.0, 0.0, epsilon), boxMin, boxMax);
    return normalize(vec3f(dx, dy, dz));
}


@compute @workgroup_size(64)
fn g2p(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        particles[id.x].v = vec3f(0.);
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var B: mat3x3f = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                        cell_idx.x + f32(gx) - 1., 
                        cell_idx.y + f32(gy) - 1.,
                        cell_idx.z + f32(gz) - 1.  
                    );
                    let cell_dist: vec3f = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let weighted_velocity: vec3f = vec3f(
                        decodeFixedPoint(cells[cell_index].vx), 
                        decodeFixedPoint(cells[cell_index].vy), 
                        decodeFixedPoint(cells[cell_index].vz)
                    ) * weight;
                    let term: mat3x3f = mat3x3f(
                        weighted_velocity * cell_dist.x, 
                        weighted_velocity * cell_dist.y, 
                        weighted_velocity * cell_dist.z
                    );

                    B += term;

                    particles[id.x].v += weighted_velocity;
                }
            }
        }

        particles[id.x].C = B * 4.0f;
        
        // Update deformation gradient for elastoplastic materials
        // F_new = (I + dt * grad_v) * F_old
        let I = mat3x3f(
            vec3f(1., 0., 0.),
            vec3f(0., 1., 0.),
            vec3f(0., 0., 1.)
        );
        let grad_v = B * 4.0f;  // Velocity gradient
        var new_F = (I + dt * grad_v) * particles[id.x].F;
        
        // Clamp deformation gradient to prevent instability
        // Compute determinant to check for extreme deformation
        let det_F = new_F[0][0] * (new_F[1][1] * new_F[2][2] - new_F[1][2] * new_F[2][1])
                  - new_F[0][1] * (new_F[1][0] * new_F[2][2] - new_F[1][2] * new_F[2][0])
                  + new_F[0][2] * (new_F[1][0] * new_F[2][1] - new_F[1][1] * new_F[2][0]);
        
        // Reset to identity if deformation is too extreme (prevents explosion)
        if (det_F < 0.1 || det_F > 10.0) {
            new_F = I;
        }
        
        // Clamp individual components to prevent extreme values
        new_F[0][0] = clamp(new_F[0][0], 0.2, 5.0);
        new_F[1][1] = clamp(new_F[1][1], 0.2, 5.0);
        new_F[2][2] = clamp(new_F[2][2], 0.2, 5.0);
        new_F[0][1] = clamp(new_F[0][1], -2.0, 2.0);
        new_F[0][2] = clamp(new_F[0][2], -2.0, 2.0);
        new_F[1][0] = clamp(new_F[1][0], -2.0, 2.0);
        new_F[1][2] = clamp(new_F[1][2], -2.0, 2.0);
        new_F[2][0] = clamp(new_F[2][0], -2.0, 2.0);
        new_F[2][1] = clamp(new_F[2][1], -2.0, 2.0);
        
        particles[id.x].F = new_F;
        
        particles[id.x].position += particles[id.x].v * dt;
        
        // SDF-based boundary constraint
        let wall_margin = 3.0;
        let wall_min = vec3f(wall_margin);
        let wall_max = real_box_size - wall_margin;
        
        let sdf_distance = boxSDF(particles[id.x].position, wall_min, wall_max);
        
        if (sdf_distance > 0.0) {
            // Particle is outside boundary - project back to surface
            let normal = boxSDFGradient(particles[id.x].position, wall_min, wall_max);
            
            // Hard constraint: move particle back inside
            particles[id.x].position -= normal * sdf_distance;
            
            // Decompose velocity into normal and tangential components
            let v_dot_n = dot(particles[id.x].v, normal);
            let v_normal = normal * v_dot_n;
            let v_tangent = particles[id.x].v - v_normal;
            
            // Apply restitution to normal component (bounce)
            let v_normal_new = v_normal * -wallRestitution;
            
            // Apply friction to tangential component (slide)
            let v_tangent_new = v_tangent * (1.0 - wallFriction);
            
            // Reconstruct velocity
            particles[id.x].v = v_normal_new + v_tangent_new;
            
            // CRITICAL FIX: Reset deformation gradient for elastoplastic materials at wall collision
            // This prevents stored elastic energy from causing bouncing instability
            let material_type_local = particles[id.x].material_type;
            if (material_type_local >= 4u && material_type_local <= 7u) {
                // Reset F to identity - release all stored elastic deformation
                particles[id.x].F = mat3x3f(
                    vec3f(1., 0., 0.),
                    vec3f(0., 1., 0.),
                    vec3f(0., 0., 1.)
                );
                // Extra velocity damping at wall collision for elastoplastic materials
                particles[id.x].v *= 0.8;  // Remove 20% of kinetic energy
            }
        }

        // Apply forces based on mode
        if (gravityMode == 1u) {
            // Gravity mode: simple downward force (adjustable strength)
            let gravity = vec3f(0.0, -1.0, 0.0) * gravityStrength;
            particles[id.x].v += gravity * dt;
        } else {
            // Ball spin mode: radial forces to center (adjustable strength)
            let center = vec3f(real_box_size.x / 2, real_box_size.y / 2, real_box_size.z / 2);
            let dist = center - particles[id.x].position;
            let dirToOrigin = normalize(dist);
            
            let r: f32 = sphereRadius;
            
            // Sphere boundary repulsion force
            if (dot(dist, dist) < r * r) {
                particles[id.x].v += -(r - sqrt(dot(dist, dist))) * dirToOrigin * 3.0 * sphericalConstraintStrength;
            }
            
            // Gentle pull toward center
            particles[id.x].v += dirToOrigin * 0.1 * sphericalConstraintStrength;
        }
        
        // Apply damping to gradually reduce velocity (energy dissipation)
        particles[id.x].v *= damping;
        
        // Extra damping and deformation relaxation for elastoplastic materials (types 4-7)
        let material_type = particles[id.x].material_type;
        if (material_type >= 4u && material_type <= 7u) {
            particles[id.x].v *= 0.99;  // Additional 1% damping for solids
            
            // Gradually relax deformation gradient back toward identity (plastic flow)
            // This prevents accumulation of elastic energy
            let I = mat3x3f(
                vec3f(1., 0., 0.),
                vec3f(0., 1., 0.),
                vec3f(0., 0., 1.)
            );
            particles[id.x].F = particles[id.x].F * 0.98 + I * 0.02;  // Relax 2% per frame
        }
    }
}