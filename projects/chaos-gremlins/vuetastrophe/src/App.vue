<script setup>
	import { computed, onBeforeUnmount, ref } from 'vue';

	const running = ref(false);
	const chaosMode = ref(true);
	const intensity = ref(45);

	const tickCount = ref(0);
	const burstCount = ref(0);
	const estimatedWorkUnits = ref(0);
	const latestBurstMs = ref(0);
	const lastDelayMs = ref(0);

	let pulseTimer = null;

	const stressScore = computed(() => {
		const base = intensity.value * (chaosMode.value ? 1.35 : 1);
		const burstFactor = Math.min(100, burstCount.value % 120);
		return Math.min(100, Math.round(base * 0.7 + burstFactor * 0.3));
	});

	const stressLabel = computed(() => {
		if (stressScore.value < 35) return 'Mild dread';
		if (stressScore.value < 70) return 'Gremlin swarm';
		return 'Thermal panic';
	});

	function busyLoop(iterations) {
		let sink = 0;
		for (let i = 0; i < iterations; i += 1) {
			sink += Math.sqrt((i * 17) % 997) * Math.sin(i);
		}
		return sink;
	}

	function runBurst() {
		if (!running.value) return;

		const burstStart = performance.now();
		const base = intensity.value;
		const jitter = chaosMode.value
			? Math.random() * base * 2.4
			: Math.random() * base * 0.8;
		const loops = Math.max(1, Math.floor((base + jitter) / 10));

		let localWork = 0;
		for (let i = 0; i < loops; i += 1) {
			const spin =
				15000 +
				Math.floor((base + jitter) * 800) +
				Math.floor(Math.random() * 6000);
			localWork += Math.abs(busyLoop(spin));
		}

		const burstMs = performance.now() - burstStart;
		burstCount.value += 1;
		tickCount.value += 1;
		latestBurstMs.value = Math.round(burstMs * 10) / 10;
		estimatedWorkUnits.value += Math.round(localWork % 100000);

		const nextDelay = chaosMode.value
			? Math.max(30, Math.floor((190 - base) * Math.random()))
			: Math.max(55, Math.floor(90 + (100 - base) * 0.7));

		lastDelayMs.value = nextDelay;
		pulseTimer = window.setTimeout(runBurst, nextDelay);
	}

	function startChaos() {
		if (running.value) return;
		running.value = true;
		runBurst();
	}

	function stopChaos() {
		running.value = false;
		if (pulseTimer) {
			window.clearTimeout(pulseTimer);
			pulseTimer = null;
		}
	}

	function resetTelemetry() {
		tickCount.value = 0;
		burstCount.value = 0;
		estimatedWorkUnits.value = 0;
		latestBurstMs.value = 0;
		lastDelayMs.value = 0;
	}

	onBeforeUnmount(() => {
		stopChaos();
	});
</script>

<template>
	<main>
		<h1>Vuetastrophe</h1>
		<p class="muted">
			Faux-observability dashboard for CPU chaos testing. Safe-ish for
			demos, terrible for battery life.
		</p>

		<section class="controls card">
			<div>
				<div class="label-row">
					<span>Intensity</span>
					<strong>{{ intensity }}%</strong>
				</div>
				<input
					v-model.number="intensity"
					type="range"
					min="1"
					max="100"
				/>
			</div>

			<div>
				<div class="label-row">
					<span>Chaos mode</span>
					<strong>{{ chaosMode ? 'On' : 'Off' }}</strong>
				</div>
				<input
					v-model="chaosMode"
					type="checkbox"
				/>
			</div>

			<div>
				<div class="label-row"><span>Control panel</span></div>
				<div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
					<button
						:disabled="running"
						@click="startChaos"
					>
						Start
					</button>
					<button
						:disabled="!running"
						@click="stopChaos"
					>
						Stop
					</button>
					<button @click="resetTelemetry">Reset counters</button>
				</div>
			</div>
		</section>

		<section class="grid">
			<article class="card">
				<h3>Status</h3>
				<p>
					Engine: <strong>{{ running ? 'Spinning' : 'Idle' }}</strong>
				</p>
				<p>
					Stress estimate: <strong>{{ stressScore }}%</strong> ({{
						stressLabel
					}})
				</p>
			</article>

			<article class="card">
				<h3>Telemetry</h3>
				<p>
					Ticks: <strong>{{ tickCount }}</strong>
				</p>
				<p>
					Bursts completed: <strong>{{ burstCount }}</strong>
				</p>
				<p>
					Work units: <strong>{{ estimatedWorkUnits }}</strong>
				</p>
			</article>

			<article class="card">
				<h3>Timing</h3>
				<p>
					Latest burst runtime:
					<strong>{{ latestBurstMs }} ms</strong>
				</p>
				<p>
					Last jitter delay: <strong>{{ lastDelayMs }} ms</strong>
				</p>
				<p class="muted danger">
					Approximation only. Browser thread scheduling may vary
					wildly.
				</p>
			</article>
		</section>
	</main>
</template>
