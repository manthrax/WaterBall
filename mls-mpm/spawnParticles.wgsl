struct Particle {
    position: vec3f,
    material_type: u32,
    v: vec3f,
    _padding: u32,
    C: mat3x3f,
    F: mat3x3f,  // Deformation gradient (for elastoplastic materials)
}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> init_box_size: vec3f;
@group(0) @binding(2) var<uniform> numParticles: i32;
@group(0) @binding(3) var<uniform> spawnMaterialType: u32;

@compute @workgroup_size(1)
fn spawn() {
    let dx: f32 = 0.5;
    let center: vec3f = init_box_size / 2;
    // Spawn from top center (like a faucet)
    let beg: vec3f = vec3f(center.x - 2.5, init_box_size.y - 8.0, center.z - 2.5);
    let base: vec3f = beg + vec3f(4.5 * dx, 4.5 * dx, 0);
    let vScale: f32 = 0.0;  // Start with no initial velocity (let gravity take over)

    let dummy = numParticles;

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var offset = 10 * i + j;
            // Spawn in XZ plane (horizontal), high Y (vertical)
            let pos = beg + vec3f(f32(i), 0.0, f32(j)) * dx;
            particles[(numParticles - 1) - offset].position = pos;
            particles[(numParticles - 1) - offset].material_type = spawnMaterialType;
            // Start with slight downward velocity
            particles[(numParticles - 1) - offset].v = vec3f(0.0, -0.5, 0.0);
            particles[(numParticles - 1) - offset].C = mat3x3f(vec3f(0.), vec3f(0.), vec3f(0.));
            // Initialize deformation gradient to identity
            particles[(numParticles - 1) - offset].F = mat3x3f(
                vec3f(1., 0., 0.),
                vec3f(0., 1., 0.),
                vec3f(0., 0., 1.)
            );
        }
    }
}