<template>
	<div class="tile">
		<div class="tile-label">POSTURE INTELLIGENCE™</div>
		<svg
			class="posture-icon"
			viewBox="0 0 40 60"
		>
			<circle
				cx="20"
				cy="10"
				r="6"
				fill="none"
				stroke="#94a3b8"
				stroke-width="1.5"
			/>
			<line
				x1="20"
				y1="16"
				x2="20"
				y2="38"
				stroke="#94a3b8"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<line
				x1="20"
				y1="22"
				x2="10"
				y2="30"
				stroke="#94a3b8"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<line
				x1="20"
				y1="22"
				x2="30"
				y2="30"
				stroke="#94a3b8"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<line
				x1="20"
				y1="38"
				x2="12"
				y2="52"
				stroke="#94a3b8"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<line
				x1="20"
				y1="38"
				x2="28"
				y2="52"
				stroke="#94a3b8"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
		<div
			class="posture-reading"
			:style="{ opacity: readingOpacity }"
		>
			{{ currentReading }}
		</div>
		<div
			class="tilt-indicator"
			:style="{ transform: `rotate(${tiltAngle}deg)` }"
		></div>
	</div>
</template>

<script>
	export default {
		name: 'PostureIntelligenceTile',
		data() {
			return {
				readings: [
					'You are leaning 3° left.',
					'Spinal alignment: 94% optimal.',
					'Shoulder tension detected. Breathe.',
					'Posture score: Excellent.',
					'Micro-slouch detected at 14:32.',
					'Core engagement: Above average.',
				],
				currentReading: '',
				readingOpacity: 1,
				tiltAngle: 0,
				readingIndex: 0,
				cycleInterval: null,
			};
		},
		mounted() {
			this.currentReading = this.readings[0];
			this.tiltAngle = (Math.random() - 0.5) * 10;
			this.cycleInterval = setInterval(() => this.cycleReading(), 8000);
		},
		beforeUnmount() {
			clearInterval(this.cycleInterval);
		},
		methods: {
			cycleReading() {
				this.readingOpacity = 0;
				setTimeout(() => {
					this.readingIndex =
						(this.readingIndex + 1) % this.readings.length;
					this.currentReading = this.readings[this.readingIndex];
					this.tiltAngle = (Math.random() - 0.5) * 10;
					this.readingOpacity = 1;
				}, 400);
			},
		},
	};
</script>
