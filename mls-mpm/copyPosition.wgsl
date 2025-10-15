struct Particle {
    position: vec3f,
    material_type: u32,
    v: vec3f,
    _padding: u32,
    C: mat3x3f,
    F: mat3x3f,
}

struct PosVel {
    position: vec3f,
    material_type: u32,
    v: vec3f,
    density: f32,
}

@group(0) @binding(0) var<storage, read> particles: array<Particle>;
@group(0) @binding(1) var<storage, read_write> posvel: array<PosVel>;
@group(0) @binding(2) var<uniform> numParticles: u32;
@group(0) @binding(3) var<storage, read> densities: array<f32>;

@compute @workgroup_size(64)
fn copyPosition(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x < numParticles) { 
        posvel[id.x].position = particles[id.x].position;
        posvel[id.x].material_type = particles[id.x].material_type;
        posvel[id.x].v = particles[id.x].v;
        posvel[id.x].density = densities[id.x];
    }
}