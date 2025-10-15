struct Particle {
    position: vec3f,
    material_type: u32,
    v: vec3f,
    _padding: u32,
    C: mat3x3f,
    F: mat3x3f,
}
struct Cell {
    vx: atomic<i32>, 
    vy: atomic<i32>, 
    vz: atomic<i32>, 
    mass: i32, 
}

override fixed_point_multiplier: f32; 
override stiffness: f32;
override rest_density: f32;
override dynamic_viscosity: f32;
override dt: f32;

// Material types
const MATERIAL_TYPE_0: u32 = 0u;  // Water (fluid)
const MATERIAL_TYPE_1: u32 = 1u;  // Light syrup (fluid)
const MATERIAL_TYPE_2: u32 = 2u;  // Syrup (fluid)
const MATERIAL_TYPE_3: u32 = 3u;  // Honey (fluid)
const MATERIAL_TYPE_4: u32 = 4u;  // Sand (elastoplastic)
const MATERIAL_TYPE_5: u32 = 5u;  // Wet sand (elastoplastic)
const MATERIAL_TYPE_6: u32 = 6u;  // Snow (elastoplastic)
const MATERIAL_TYPE_7: u32 = 7u;  // Clay (elastoplastic)
const MATERIAL_TYPE_8: u32 = 8u;  // Jello (elastic solid)
const MATERIAL_TYPE_9: u32 = 9u;  // Rock (rigid solid)

struct MaterialProperties {
    // Elastic properties
    youngs_modulus: f32,      // E (Pa)
    poissons_ratio: f32,      // ν (dimensionless)
    
    // Plastic properties (Drucker-Prager)
    cohesion: f32,            // c (Pa) - material strength
    friction_angle: f32,      // tan(φ) - internal friction
    
    // Fluid properties
    viscosity: f32,           // For fluids
    
    // Material class
    is_fluid: bool,           // true for fluids, false for elastoplastic
}

fn getMaterialProperties(material_type: u32) -> MaterialProperties {
    var props: MaterialProperties;
    
    if (material_type == MATERIAL_TYPE_0) {
        // Water (fluid)
        props.is_fluid = true;
        props.viscosity = 0.1;
        props.youngs_modulus = 0.0;
        props.poissons_ratio = 0.0;
        props.cohesion = 0.0;
        props.friction_angle = 0.0;
    } else if (material_type == MATERIAL_TYPE_1) {
        // Light syrup (fluid)
        props.is_fluid = true;
        props.viscosity = 0.15;
        props.youngs_modulus = 0.0;
        props.poissons_ratio = 0.0;
        props.cohesion = 0.0;
        props.friction_angle = 0.0;
    } else if (material_type == MATERIAL_TYPE_2) {
        // Syrup (fluid)
        props.is_fluid = true;
        props.viscosity = 0.25;
        props.youngs_modulus = 0.0;
        props.poissons_ratio = 0.0;
        props.cohesion = 0.0;
        props.friction_angle = 0.0;
    } else if (material_type == MATERIAL_TYPE_3) {
        // Honey (fluid)
        props.is_fluid = true;
        props.viscosity = 0.4;
        props.youngs_modulus = 0.0;
        props.poissons_ratio = 0.0;
        props.cohesion = 0.0;
        props.friction_angle = 0.0;
    } else if (material_type == MATERIAL_TYPE_4) {
        // Dry sand (elastoplastic) - Reduced stiffness for stability
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 140.0;      // Much softer for stability
        props.poissons_ratio = 0.2;        // Lower for granular materials
        props.cohesion = 0.0;              // Cohesionless
        props.friction_angle = 0.6;        // tan(~31°)
    } else if (material_type == MATERIAL_TYPE_5) {
        // Wet sand (elastoplastic) - moderate cohesion from water
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 180.0;
        props.poissons_ratio = 0.2;
        props.cohesion = 15.0;             // Increased for noticeable sticking
        props.friction_angle = 0.6;
    } else if (material_type == MATERIAL_TYPE_6) {
        // Snow (elastoplastic) - compacts and sticks
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 100.0;      // Very soft
        props.poissons_ratio = 0.15;
        props.cohesion = 10.0;             // Increased for snowball effect
        props.friction_angle = 0.7;        // tan(~35°)
    } else if (material_type == MATERIAL_TYPE_7) {
        // Clay (elastoplastic) - HIGH cohesion, moldable
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 200.0;      // Moderate stiffness
        props.poissons_ratio = 0.3;
        props.cohesion = 40.0;             // High cohesion - holds shape well
        props.friction_angle = 0.4;        // tan(~22°)
    } else if (material_type == MATERIAL_TYPE_8) {
        // Jello (elastic solid) - bouncy, holds shape, nearly incompressible
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 800.0;      // High stiffness - very elastic
        props.poissons_ratio = 0.48;       // Nearly incompressible (like rubber)
        props.cohesion = 100.0;            // Very high cohesion - stays together
        props.friction_angle = 0.1;        // Low internal friction - slides easily
    } else {
        // Rock (rigid solid) - TYPE_9 - very stiff, brittle
        props.is_fluid = false;
        props.viscosity = 0.0;
        props.youngs_modulus = 2000.0;     // Very high stiffness
        props.poissons_ratio = 0.25;       // Typical for rock
        props.cohesion = 200.0;            // Extremely high cohesion
        props.friction_angle = 0.8;        // High internal friction
    }
    
    // Apply user-controlled multipliers
    props.youngs_modulus *= elasticityMultiplier;
    props.cohesion *= cohesionMultiplier;
    props.friction_angle *= frictionMultiplier;
    
    return props;
}

fn getMaterialViscosity(material_type: u32) -> f32 {
    let props = getMaterialProperties(material_type);
    return props.viscosity;
}

// ============= Matrix operations =============
fn mat3_determinant(m: mat3x3f) -> f32 {
    return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1])
         - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0])
         + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
}

fn mat3_trace(m: mat3x3f) -> f32 {
    return m[0][0] + m[1][1] + m[2][2];
}

fn mat3_transpose(m: mat3x3f) -> mat3x3f {
    return mat3x3f(
        vec3f(m[0][0], m[1][0], m[2][0]),
        vec3f(m[0][1], m[1][1], m[2][1]),
        vec3f(m[0][2], m[1][2], m[2][2])
    );
}

// ============= Elastoplastic constitutive model =============

// Compute Piola-Kirchhoff stress using Neo-Hookean model
fn computeElasticStress(F: mat3x3f, E: f32, nu: f32) -> mat3x3f {
    let J = mat3_determinant(F);
    
    // Lamé parameters
    let mu = E / (2.0 * (1.0 + nu));          // Shear modulus
    let lambda = E * nu / ((1.0 + nu) * (1.0 - 2.0 * nu));  // First Lamé parameter
    
    // Neo-Hookean model: P = μ(F - F^-T) + λlog(J)F^-T
    // Simplified for small deformations
    let logJ = log(max(J, 0.01));  // Prevent log(0)
    
    // Compute F^T * F
    let FtF = mat3_transpose(F) * F;
    
    // Simplified stress (first Piola-Kirchhoff)
    // P ≈ μ(F - F^-T) + λlog(J)F^-T
    // For small strains, approximate as: P ≈ 2μE + λtr(E)I where E = 0.5(F + F^T - 2I)
    
    let I = mat3x3f(
        vec3f(1., 0., 0.),
        vec3f(0., 1., 0.),
        vec3f(0., 0., 1.)
    );
    
    // Green strain: E = 0.5(F^T F - I)
    let strain = 0.5 * (FtF - I);
    let traceStrain = mat3_trace(strain);
    
    // Cauchy stress: σ = λtr(ε)I + 2με
    let stress = lambda * traceStrain * I + 2.0 * mu * strain;
    
    return stress;
}

// Drucker-Prager yield criterion
fn druckerPragerYield(stress: mat3x3f, cohesion: f32, friction_angle: f32) -> f32 {
    // Compute pressure (mean stress)
    let trace_stress = mat3_trace(stress);
    let pressure = trace_stress / 3.0;
    
    // Compute deviatoric stress
    let I = mat3x3f(
        vec3f(1., 0., 0.),
        vec3f(0., 1., 0.),
        vec3f(0., 0., 1.)
    );
    let deviatoric = stress - pressure * I;
    
    // Compute von Mises equivalent stress (J2)
    // q = sqrt(3/2 * s:s) where s is deviatoric stress
    let s11 = deviatoric[0][0];
    let s22 = deviatoric[1][1];
    let s33 = deviatoric[2][2];
    let s12 = deviatoric[0][1];
    let s13 = deviatoric[0][2];
    let s23 = deviatoric[1][2];
    
    let J2 = 0.5 * (s11*s11 + s22*s22 + s33*s33) + s12*s12 + s13*s13 + s23*s23;
    let q = sqrt(3.0 * J2);
    
    // Drucker-Prager yield surface: f = q - α*p - k
    // where α = friction_angle, k = cohesion
    let alpha = friction_angle;
    let k = cohesion;
    
    let yield_val = q - alpha * pressure - k;
    
    return yield_val;
}

// Apply plasticity using return mapping
fn applyPlasticity(stress: mat3x3f, cohesion: f32, friction_angle: f32) -> mat3x3f {
    let yield_val = druckerPragerYield(stress, cohesion, friction_angle);
    
    // If within yield surface, return unchanged
    if (yield_val <= 0.0) {
        return stress;
    }
    
    // Project back to yield surface
    let trace_stress = mat3_trace(stress);
    let pressure = trace_stress / 3.0;
    
    let I = mat3x3f(
        vec3f(1., 0., 0.),
        vec3f(0., 1., 0.),
        vec3f(0., 0., 1.)
    );
    let deviatoric = stress - pressure * I;
    
    // Compute magnitude of deviatoric stress
    let s11 = deviatoric[0][0];
    let s22 = deviatoric[1][1];
    let s33 = deviatoric[2][2];
    let s12 = deviatoric[0][1];
    let s13 = deviatoric[0][2];
    let s23 = deviatoric[1][2];
    
    let J2 = 0.5 * (s11*s11 + s22*s22 + s33*s33) + s12*s12 + s13*s13 + s23*s23;
    let q = sqrt(3.0 * J2);
    
    // Scale deviatoric stress to lie on yield surface
    let target_q = friction_angle * pressure + cohesion;
    var scale = 1.0;
    if (q > 0.001) {
        scale = target_q / q;
    }
    
    let projected_deviatoric = deviatoric * scale;
    let projected_stress = projected_deviatoric + pressure * I;
    
    return projected_stress;
}

fn encodeFixedPoint(floating_point: f32) -> i32 {
	return i32(floating_point * fixed_point_multiplier);
}
fn decodeFixedPoint(fixed_point: i32) -> f32 {
	return f32(fixed_point) / fixed_point_multiplier;
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> cells: array<Cell>;
@group(0) @binding(2) var<uniform> init_box_size: vec3f;
@group(0) @binding(3) var<uniform> numParticles: u32;
@group(0) @binding(4) var<storage, read_write> densities: array<f32>;
@group(0) @binding(5) var<uniform> stiffnessMultiplier: f32;
@group(0) @binding(6) var<uniform> cohesionMultiplier: f32;
@group(0) @binding(7) var<uniform> elasticityMultiplier: f32;
@group(0) @binding(8) var<uniform> frictionMultiplier: f32;

@compute @workgroup_size(64)
fn p2g_2(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) {
        var weights: array<vec3f, 3>;

        let particle = particles[id.x];
        let cell_idx: vec3f = floor(particle.position);
        let cell_diff: vec3f = particle.position - (cell_idx + 0.5f);
        weights[0] = 0.5f * (0.5f - cell_diff) * (0.5f - cell_diff);
        weights[1] = 0.75f - cell_diff * cell_diff;
        weights[2] = 0.5f * (0.5f + cell_diff) * (0.5f + cell_diff);

        var density: f32 = 0.;
        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {    
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    density += decodeFixedPoint(cells[cell_index].mass) * weight;
                }
            }
        }

        // CRITICAL FIX: Clamp density to prevent division by near-zero
        // This prevents energy explosions in sparse regions
        let clamped_density = max(density, rest_density * 0.5);  // Never less than 50% rest density
        let volume: f32 = 1.0 / clamped_density; // particle.mass = 1.0;
        let safe_volume = min(volume, 5.0);  // Cap maximum volume
        densities[id.x] = density;

        // Get material properties
        let mat_props = getMaterialProperties(particle.material_type);
        
        var stress: mat3x3f;
        
        if (mat_props.is_fluid) {
            // Fluid constitutive model (original)
            let pressure: f32 = max(-0.0, stiffness * stiffnessMultiplier * (pow(density / rest_density, 5.) - 1));
            stress = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);
            
            // Add viscous stress
            let dudv: mat3x3f = particle.C;
            let strain: mat3x3f = dudv + transpose(dudv);
            stress += mat_props.viscosity * strain;
        } else {
            // Hybrid elastoplastic model (fluid pressure + elastic deviatoric stress)
            // This prevents interpenetration while allowing solid-like behavior
            
            // 1. Add fluid-like pressure to prevent compression (like granular materials)
            let pressure: f32 = max(0.0, stiffness * stiffnessMultiplier * (pow(density / rest_density, 3.) - 1));
            stress = mat3x3f(-pressure, 0, 0, 0, -pressure, 0, 0, 0, -pressure);
            
            // 2. Add elastic deviatoric stress (shear resistance)
            let F = particle.F;
            var elastic_stress = computeElasticStress(F, mat_props.youngs_modulus, mat_props.poissons_ratio);
            
            // Remove pressure component from elastic stress (keep only deviatoric/shear part)
            let trace_elastic = (elastic_stress[0][0] + elastic_stress[1][1] + elastic_stress[2][2]) / 3.0;
            let I = mat3x3f(
                vec3f(1., 0., 0.),
                vec3f(0., 1., 0.),
                vec3f(0., 0., 1.)
            );
            let deviatoric_stress = elastic_stress - trace_elastic * I;
            
            // Apply plasticity to deviatoric stress only
            var full_elastic = deviatoric_stress + trace_elastic * I;
            full_elastic = applyPlasticity(full_elastic, mat_props.cohesion, mat_props.friction_angle);
            let deviatoric_after_plasticity = full_elastic - (full_elastic[0][0] + full_elastic[1][1] + full_elastic[2][2]) / 3.0 * I;
            
            // Scale down and add to pressure
            stress += deviatoric_after_plasticity * 0.002;  // Very small contribution
            
            // Clamp stress magnitude to prevent explosions
            let stress_mag = sqrt(
                stress[0][0]*stress[0][0] + stress[1][1]*stress[1][1] + stress[2][2]*stress[2][2] +
                2.0 * (stress[0][1]*stress[0][1] + stress[0][2]*stress[0][2] + stress[1][2]*stress[1][2])
            );
            if (stress_mag > 50.0) {
                stress = stress * (50.0 / stress_mag);
            }
        }

        let eq_16_term0 = -safe_volume * 4 * stress * dt;

        for (var gx = 0; gx < 3; gx++) {
            for (var gy = 0; gy < 3; gy++) {
                for (var gz = 0; gz < 3; gz++) {
                    let weight: f32 = weights[gx].x * weights[gy].y * weights[gz].z;
                    let cell_x: vec3f = vec3f(
                            cell_idx.x + f32(gx) - 1., 
                            cell_idx.y + f32(gy) - 1.,
                            cell_idx.z + f32(gz) - 1.  
                        );
                    let cell_dist = (cell_x + 0.5f) - particle.position;
                    let cell_index: i32 = 
                        i32(cell_x.x) * i32(init_box_size.y) * i32(init_box_size.z) + 
                        i32(cell_x.y) * i32(init_box_size.z) + 
                        i32(cell_x.z);
                    let momentum: vec3f = eq_16_term0 * weight * cell_dist;
                    atomicAdd(&cells[cell_index].vx, encodeFixedPoint(momentum.x));
                    atomicAdd(&cells[cell_index].vy, encodeFixedPoint(momentum.y));
                    atomicAdd(&cells[cell_index].vz, encodeFixedPoint(momentum.z));
                }
            }
        }
    }
}