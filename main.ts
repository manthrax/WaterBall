import { mat4 } from 'wgpu-matrix'

import { Camera } from './camera'
import { mlsmpmParticleStructSize, MLSMPMSimulator } from './mls-mpm/mls-mpm'
import { renderUniformsViews, renderUniformsValues, numParticlesMax } from './common'
import { FluidRenderer } from './render/fluidRender'

/// <reference types="@webgpu/types" />


async function init() {
	const canvas: HTMLCanvasElement = document.querySelector('canvas')!

	if (!navigator.gpu) {
		alert("WebGPU is not supported on your browser.");
		throw new Error()
	}

	const adapter = await navigator.gpu.requestAdapter()

	if (!adapter) {
		alert("Adapter is not available.");
		throw new Error()
	}

	const device = await adapter.requestDevice()

	const context = canvas.getContext('webgpu') as GPUCanvasContext

	if (!context) {
		throw new Error()	
	}

	// const { devicePixelRatio } = window
	// let devicePixelRatio  = 5.0;
	let devicePixelRatio  = 0.7;
	canvas.width = devicePixelRatio * canvas.clientWidth
	canvas.height = devicePixelRatio * canvas.clientHeight

	const presentationFormat = navigator.gpu.getPreferredCanvasFormat()

	context.configure({
		device,
		format: presentationFormat,
	})

	return { canvas, device, presentationFormat, context }
}

function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}
  

async function main() {
	const { canvas, device, presentationFormat, context } = await init();

	// ボタン押下の監視
	let numberButtonForm = document.getElementById('number-button') as HTMLFormElement;
	let numberButtonPressed = false;
	let numberButtonPressedButton = "1"
	numberButtonForm.addEventListener('change', function(event) {
		const target = event.target as HTMLInputElement
		if (target?.name === 'options') {
			numberButtonPressed = true
			numberButtonPressedButton = target.value
		}
	});
	const smallValue = document.getElementById("small-value") as HTMLSpanElement;
	const mediumValue = document.getElementById("medium-value") as HTMLSpanElement;
	const largeValue = document.getElementById("large-value") as HTMLSpanElement;
	

	console.log("initialization done")

	context.configure({
		device,
		format: presentationFormat,
	})

	let cubemapTexture: GPUTexture;
	{
		// The order of the array layers is [+X, -X, +Y, -Y, +Z, -Z]
		const imgSrcs = [
			'cubemap/posx.png',
			'cubemap/negx.png',
			'cubemap/posy.png',
			'cubemap/negy.png',
			'cubemap/posz.png',
			'cubemap/negz.png',
		];
		const promises = imgSrcs.map(async (src) => {
			const response = await fetch(src);
			return createImageBitmap(await response.blob());
		});
		const imageBitmaps = await Promise.all(promises);

		cubemapTexture = device.createTexture({
			dimension: '2d',
			// Create a 2d array texture.
			// Assume each image has the same size.
			size: [imageBitmaps[0].width, imageBitmaps[0].height, 6],
			format: 'rgba8unorm',
			usage:
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST |
			GPUTextureUsage.RENDER_ATTACHMENT,
		});

		for (let i = 0; i < imageBitmaps.length; i++) {
			const imageBitmap = imageBitmaps[i];
			device.queue.copyExternalImageToTexture(
				{ source: imageBitmap },
				{ texture: cubemapTexture, origin: [0, 0, i] },
				[imageBitmap.width, imageBitmap.height]
			);
		}
	}
	const cubemapTextureView = cubemapTexture.createView({
		dimension: 'cube',
	});
	console.log("cubemap initialization done")

	// uniform buffer を作る
	renderUniformsViews.texel_size.set([1.0 / canvas.width, 1.0 / canvas.height]);

	// storage buffer を作る
	const maxParticleStructSize = mlsmpmParticleStructSize
	const particleBuffer = device.createBuffer({
		label: 'particles buffer', 
		size: maxParticleStructSize * numParticlesMax, 
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	})
	const posvelBuffer = device.createBuffer({
		label: 'position buffer', 
		size: 32 * numParticlesMax,  // 32 = 2 x vec3f + 1 x f32 + padding
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	})
	const renderUniformBuffer = device.createBuffer({
		label: 'filter uniform buffer', 
		size: renderUniformsValues.byteLength, 
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
	})

	console.log("buffer allocating done")


	let mlsmpmNumParticleParams = [30000, 60000, 100000]
	let mlsmpmInitBoxSizes = [[52, 52, 52], [60, 60, 60], [72, 72, 72]]
	let mlsmpmInitDistances = [60, 70, 90]
	let radiuses = [15, 20, 25]
	let mouseRadiuses = [5, 6, 8]
	let stretchStrength = [2.5, 2.0, 1.5]

	const canvasElement = document.getElementById("fluidCanvas") as HTMLCanvasElement;
	// シミュレーション，カメラの初期化
	const mlsmpmFov = 45 * Math.PI / 180
	const mlsmpmRadius = 0.7
	const mlsmpmDiameter = 2 * mlsmpmRadius
	const mlsmpmZoomRate = 0.7
	const depthMapTexture = device.createTexture({
		label: 'depth map texture', 
		size: [canvas.width, canvas.height, 1],
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
		format: 'r32float',
	});
	const depthMapTextureView = depthMapTexture.createView()
	const mlsmpmSimulator = new MLSMPMSimulator(particleBuffer, posvelBuffer, mlsmpmDiameter, device, renderUniformBuffer, depthMapTextureView, canvas)
	const mlsmpmRenderer = new FluidRenderer(device, canvas, presentationFormat, mlsmpmRadius, mlsmpmFov, posvelBuffer, renderUniformBuffer, 
		cubemapTextureView, depthMapTextureView, mlsmpmSimulator.restDensity)

	console.log("simulator initialization done")

	// Material type selection - must be after mlsmpmSimulator is created
	let materialSelect = document.getElementById('material-select') as HTMLSelectElement;
	materialSelect.addEventListener('change', function() {
		const materialType = parseInt(materialSelect.value);
		mlsmpmSimulator.setSpawnMaterialType(materialType);
		console.log("Changed spawn material type to:", materialType);
	});

	// Faucet button - hold to spawn particles
	let faucetButton = document.getElementById('faucet') as HTMLButtonElement;
	faucetButton.addEventListener('mousedown', () => {
		mlsmpmSimulator.setSpawnPaused(false);
		faucetButton.style.background = '#2ecc71'; // Green when active
		faucetButton.textContent = '💧 SPAWNING...';
	});
	faucetButton.addEventListener('mouseup', () => {
		mlsmpmSimulator.setSpawnPaused(true);
		faucetButton.style.background = '#4a90e2'; // Back to blue
		faucetButton.textContent = '💧 FAUCET (Hold)';
	});
	faucetButton.addEventListener('mouseleave', () => {
		mlsmpmSimulator.setSpawnPaused(true);
		faucetButton.style.background = '#4a90e2'; // Back to blue
		faucetButton.textContent = '💧 FAUCET (Hold)';
	});
	// Also handle touch events for mobile
	faucetButton.addEventListener('touchstart', (e) => {
		e.preventDefault();
		mlsmpmSimulator.setSpawnPaused(false);
		faucetButton.style.background = '#2ecc71';
		faucetButton.textContent = '💧 SPAWNING...';
	});
	faucetButton.addEventListener('touchend', (e) => {
		e.preventDefault();
		mlsmpmSimulator.setSpawnPaused(true);
		faucetButton.style.background = '#4a90e2';
		faucetButton.textContent = '💧 FAUCET (Hold)';
	});

	// Clear button - reset simulation
	let clearButton = document.getElementById('clear') as HTMLButtonElement;
	clearButton.addEventListener('click', () => {
		mlsmpmSimulator.clearParticles();
		console.log("Cleared all particles");
		// Flash the button
		clearButton.style.background = '#c0392b';
		setTimeout(() => {
			clearButton.style.background = '#e74c3c';
		}, 100);
	});

	const camera = new Camera(canvasElement);

	// デバイスロストの監視
	let errorLog = document.getElementById('error-reason') as HTMLSpanElement;
	errorLog.textContent = "";
	device.lost.then(info => {
		const reason = info.reason ? `reason: ${info.reason}` : 'unknown reason';
		errorLog.textContent = reason;
	});

	let paramsIdx = 1
	let initBoxSize = mlsmpmInitBoxSizes[paramsIdx]
	let realBoxSize = [...initBoxSize];

	smallValue.textContent = "30,000"
	mediumValue.textContent = "60,000"
	largeValue.textContent = "100,000"

	let sphereRenderFl = false
	let rotateFl = false
	let startFl = true
	let boxWidthRatio = 1.

	console.log("simulation start")
	async function frame() {
		const start = performance.now();

		if (numberButtonPressed || startFl) { 
			paramsIdx = parseInt(numberButtonPressedButton)
			initBoxSize = mlsmpmInitBoxSizes[paramsIdx]
			mlsmpmSimulator.reset(initBoxSize, radiuses[paramsIdx])
			camera.reset(mlsmpmInitDistances[paramsIdx], [initBoxSize[0] / 2, initBoxSize[1] / 2, initBoxSize[2] / 2], 
				mlsmpmFov, mlsmpmZoomRate)
			realBoxSize = [...initBoxSize]
			let slider = document.getElementById("slider") as HTMLInputElement
			slider.value = "100"
			numberButtonPressed = false
			startFl = false
		}


		const slider = document.getElementById("slider") as HTMLInputElement
		const particle = document.getElementById("particle") as HTMLInputElement
		const rotate = document.getElementById("autorotate") as HTMLInputElement
		const gravity = document.getElementById("gravity") as HTMLInputElement
		const faucetButton = document.getElementById("faucet") as HTMLButtonElement
		const clearButton = document.getElementById("clear") as HTMLButtonElement
		const dampingSlider = document.getElementById("damping-slider") as HTMLInputElement
		const dampingValue = document.getElementById("damping-value") as HTMLSpanElement
		const wallFrictionSlider = document.getElementById("wall-friction-slider") as HTMLInputElement
		const wallFrictionValue = document.getElementById("wall-friction-value") as HTMLSpanElement
		const wallRestitutionSlider = document.getElementById("wall-restitution-slider") as HTMLInputElement
		const wallRestitutionValue = document.getElementById("wall-restitution-value") as HTMLSpanElement
		const sphericalConstraintSlider = document.getElementById("spherical-constraint-slider") as HTMLInputElement
		const sphericalConstraintValue = document.getElementById("spherical-constraint-value") as HTMLSpanElement
		const gravityStrengthSlider = document.getElementById("gravity-strength-slider") as HTMLInputElement
		const gravityStrengthValue = document.getElementById("gravity-strength-value") as HTMLSpanElement
		const stiffnessSlider = document.getElementById("stiffness-slider") as HTMLInputElement
		const stiffnessValue = document.getElementById("stiffness-value") as HTMLSpanElement
		const cohesionSlider = document.getElementById("cohesion-slider") as HTMLInputElement
		const cohesionValue = document.getElementById("cohesion-value") as HTMLSpanElement
		const elasticitySlider = document.getElementById("elasticity-slider") as HTMLInputElement
		const elasticityValue = document.getElementById("elasticity-value") as HTMLSpanElement
		const frictionSlider = document.getElementById("friction-slider") as HTMLInputElement
		const frictionValue = document.getElementById("friction-value") as HTMLSpanElement
		
		sphereRenderFl = particle.checked
		rotateFl = rotate.checked
		mlsmpmSimulator.setGravityMode(gravity.checked)
		
		// Damping: 0-100 slider maps to 0.95-1.0 (0 = max damping, 100 = no damping)
		const dampingPercent = parseInt(dampingSlider.value)
		const dampingFactor = 0.95 + (dampingPercent / 100) * 0.05
		mlsmpmSimulator.setDamping(dampingFactor)
		dampingValue.textContent = dampingPercent.toString()
		
		// Wall friction: 0-100 slider maps to 0.0-0.5 (0 = no friction, 100 = high friction)
		const wallFrictionPercent = parseInt(wallFrictionSlider.value)
		const wallFrictionFactor = (wallFrictionPercent / 100) * 0.5
		mlsmpmSimulator.setWallFriction(wallFrictionFactor)
		wallFrictionValue.textContent = wallFrictionPercent.toString()
		
		// Wall restitution: 0-100 slider maps to 0.5-1.0 (0 = inelastic/stick, 100 = elastic/bounce)
		const wallRestitutionPercent = parseInt(wallRestitutionSlider.value)
		const wallRestitutionFactor = 0.5 + (wallRestitutionPercent / 100) * 0.5
		mlsmpmSimulator.setWallRestitution(wallRestitutionFactor)
		wallRestitutionValue.textContent = wallRestitutionPercent.toString()
		
		// Spherical constraint: 0-100 slider maps to 0.0-1.0 (0 = no force, 100 = full force)
		const sphericalConstraintPercent = parseInt(sphericalConstraintSlider.value)
		const sphericalConstraintFactor = sphericalConstraintPercent / 100
		mlsmpmSimulator.setSphericalConstraintStrength(sphericalConstraintFactor)
		sphericalConstraintValue.textContent = sphericalConstraintPercent.toString()
		
		// Gravity strength: 0-100 slider maps to 0.0-1.0 (0 = no gravity, 100 = strong gravity)
		const gravityStrengthPercent = parseInt(gravityStrengthSlider.value)
		const gravityStrengthFactor = gravityStrengthPercent / 100
		mlsmpmSimulator.setGravityStrength(gravityStrengthFactor)
		gravityStrengthValue.textContent = gravityStrengthPercent.toString()
		
		// Material properties
		// Stiffness: 0-100 slider maps to 0.0-2.0 multiplier
		const stiffnessPercent = parseInt(stiffnessSlider.value)
		const stiffnessMultiplier = (stiffnessPercent / 100) * 2.0
		mlsmpmSimulator.setStiffnessMultiplier(stiffnessMultiplier)
		stiffnessValue.textContent = stiffnessPercent.toString()
		
		// Cohesion: 0-200 slider maps to 0.0-2.0 multiplier
		const cohesionPercent = parseInt(cohesionSlider.value)
		const cohesionMultiplier = cohesionPercent / 100
		mlsmpmSimulator.setCohesionMultiplier(cohesionMultiplier)
		cohesionValue.textContent = cohesionPercent.toString()
		
		// Elasticity: 0-200 slider maps to 0.0-2.0 multiplier
		const elasticityPercent = parseInt(elasticitySlider.value)
		const elasticityMultiplier = elasticityPercent / 100
		mlsmpmSimulator.setElasticityMultiplier(elasticityMultiplier)
		elasticityValue.textContent = elasticityPercent.toString()
		
		// Friction: 0-100 slider maps to 0.0-2.0 multiplier
		const frictionPercent = parseInt(frictionSlider.value)
		const frictionMultiplier = (frictionPercent / 100) * 2.0
		mlsmpmSimulator.setFrictionMultiplier(frictionMultiplier)
		frictionValue.textContent = frictionPercent.toString()
		
		let curBoxWidthRatio = parseInt(slider.value) / 200 + 0.5
		const minClosingSpeed = -0.01
		const maxOpeningSpeed = 0.04
		let dVal = Math.max(curBoxWidthRatio - boxWidthRatio, minClosingSpeed)
		dVal = Math.min(dVal, maxOpeningSpeed);
		boxWidthRatio += dVal

		// Update box size
		realBoxSize[2] = initBoxSize[2] * boxWidthRatio
		mlsmpmSimulator.changeBoxSize(realBoxSize)
		
		// Update camera target to keep box centered in view
		camera.target = [realBoxSize[0] / 2, realBoxSize[1] / 2, realBoxSize[2] / 2];
		camera.recalculateView();
		
		device.queue.writeBuffer(renderUniformBuffer, 0, renderUniformsValues) 

		const commandEncoder = device.createCommandEncoder()

		// 計算のためのパス
		mlsmpmSimulator.execute(commandEncoder, 
				[camera.currentHoverX / canvas.clientWidth, camera.currentHoverY / canvas.clientHeight], 
				camera.calcMouseVelocity(), mlsmpmNumParticleParams[paramsIdx], mouseRadiuses[paramsIdx])
		mlsmpmRenderer.execute(context, commandEncoder, mlsmpmSimulator.numParticles, sphereRenderFl, stretchStrength[paramsIdx])

		device.queue.submit([commandEncoder.finish()])

		camera.setNewPrevMouseCoord();
		if (rotateFl) {
			camera.stepAngle();
		}

		const end = performance.now();

		requestAnimationFrame(frame)
	} 
	requestAnimationFrame(frame)
}

main()