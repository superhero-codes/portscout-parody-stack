<template>
	<div
		class="loading-screen"
		:class="{ 'fade-out': fading }"
	>
		<!-- Scan line overlay -->
		<div class="scanlines"></div>

		<!-- Radar logo -->
		<div class="logo-container">
			<!-- Pulsing rings -->
			<div class="pulse-ring pulse-ring-1"></div>
			<div class="pulse-ring pulse-ring-2"></div>
			<div class="pulse-ring pulse-ring-3"></div>

			<!-- Radar circles -->
			<div class="radar-logo">
				<div class="radar-circle radar-circle-left">
					<div class="ring ring-1"></div>
					<div class="ring ring-2"></div>
					<div class="ring ring-3"></div>
					<div class="ring-center"></div>
				</div>
				<div class="radar-circle radar-circle-right">
					<div class="ring ring-1"></div>
					<div class="ring ring-2"></div>
					<div class="ring ring-3"></div>
					<div class="ring-center"></div>
				</div>

				<!-- Radar sweep -->
				<div class="radar-sweep"></div>
			</div>

			<!-- Logo text -->
			<div class="logo-text">
				<span class="nip">NIP</span><span class="alert-a">A</span
				><span class="lert">LERT</span>
			</div>
		</div>

		<!-- Scanning text -->
		<div class="scanning-text">
			Scanning<span class="ellipsis">{{ dots }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LoadingScreen',
		data() {
			return {
				fading: false,
				dots: '',
				dotInterval: null,
			};
		},
		mounted() {
			// Animate dots
			let dotCount = 0;
			this.dotInterval = setInterval(() => {
				dotCount = (dotCount + 1) % 4;
				this.dots = '.'.repeat(dotCount);
			}, 400);

			// Fade out and emit done after 2.5s
			setTimeout(() => {
				this.playBeep();
				this.fading = true;
				setTimeout(() => {
					this.$emit('done');
				}, 500);
			}, 2500);
		},
		beforeUnmount() {
			if (this.dotInterval) clearInterval(this.dotInterval);
		},
		methods: {
			playBeep() {
				try {
					const ctx = new (
						window.AudioContext || window.webkitAudioContext
					)();
					const oscillator = ctx.createOscillator();
					const gainNode = ctx.createGain();

					oscillator.connect(gainNode);
					gainNode.connect(ctx.destination);

					oscillator.type = 'sine';
					oscillator.frequency.setValueAtTime(1000, ctx.currentTime);

					gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
					gainNode.gain.exponentialRampToValueAtTime(
						0.001,
						ctx.currentTime + 0.1,
					);

					oscillator.start(ctx.currentTime);
					oscillator.stop(ctx.currentTime + 0.1);
				} catch (e) {
					// Audio not available, silently fail
				}
			},
		},
	};
</script>

<style scoped>
	.loading-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: radial-gradient(
			ellipse at center,
			#0d3a0d 0%,
			#071f07 50%,
			#020a02 100%
		);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		transition: opacity 0.5s ease-out;
	}

	.loading-screen.fade-out {
		opacity: 0;
		pointer-events: none;
	}

	/* Scan lines */
	.scanlines {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0, 255, 0, 0.03) 2px,
			rgba(0, 255, 0, 0.03) 4px
		);
		pointer-events: none;
		z-index: 1;
	}

	.logo-container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;
	}

	/* Pulsing rings */
	.pulse-ring {
		position: absolute;
		border: 1px solid rgba(78, 255, 78, 0.3);
		border-radius: 50%;
		animation: pulseOut 3s ease-out infinite;
	}

	.pulse-ring-1 {
		width: 200px;
		height: 200px;
		top: 10px;
		animation-delay: 0s;
	}

	.pulse-ring-2 {
		width: 200px;
		height: 200px;
		top: 10px;
		animation-delay: 1s;
	}

	.pulse-ring-3 {
		width: 200px;
		height: 200px;
		top: 10px;
		animation-delay: 2s;
	}

	@keyframes pulseOut {
		0% {
			transform: scale(1);
			opacity: 0.6;
		}
		100% {
			transform: scale(2.5);
			opacity: 0;
		}
	}

	/* Radar logo */
	.radar-logo {
		position: relative;
		width: 220px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.radar-circle {
		position: absolute;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(78, 255, 78, 0.08) 0%,
			rgba(78, 255, 78, 0.02) 100%
		);
		border: 2px solid rgba(78, 255, 78, 0.4);
	}

	.radar-circle-left {
		left: 15px;
	}

	.radar-circle-right {
		right: 15px;
	}

	.ring {
		position: absolute;
		border-radius: 50%;
		border: 1px solid rgba(78, 255, 78, 0.25);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.ring-1 {
		width: 90px;
		height: 90px;
	}

	.ring-2 {
		width: 60px;
		height: 60px;
	}

	.ring-3 {
		width: 30px;
		height: 30px;
	}

	.ring-center {
		position: absolute;
		width: 6px;
		height: 6px;
		background: #4eff4e;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 8px #4eff4e;
	}

	/* Radar sweep */
	.radar-sweep {
		position: absolute;
		width: 220px;
		height: 140px;
		overflow: hidden;
		border-radius: 50%;
	}

	.radar-sweep::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 110px;
		height: 110px;
		transform-origin: 0 0;
		background: conic-gradient(
			from 0deg,
			transparent 0deg,
			rgba(78, 255, 78, 0.2) 0deg,
			rgba(78, 255, 78, 0.05) 40deg,
			transparent 40deg
		);
		animation: radarSweep 2.5s linear infinite;
	}

	@keyframes radarSweep {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Logo text */
	.logo-text {
		margin-top: 20px;
		font-family: 'Arial Black', 'Impact', sans-serif;
		font-size: 48px;
		font-weight: 900;
		letter-spacing: 6px;
		text-transform: uppercase;
		color: #4eff4e;
		text-shadow:
			0 2px 0 #1a5c1a,
			0 4px 0 #0a3d0a,
			0 6px 8px rgba(0, 0, 0, 0.5),
			0 0 20px rgba(78, 255, 78, 0.3);
		z-index: 2;
	}

	.nip {
		color: #4eff4e;
	}

	.alert-a {
		color: #7fff7f;
		text-shadow:
			0 2px 0 #2a7c2a,
			0 4px 0 #1a5c1a,
			0 6px 8px rgba(0, 0, 0, 0.5),
			0 0 30px rgba(127, 255, 127, 0.5);
	}

	.lert {
		color: #4eff4e;
	}

	/* Scanning text */
	.scanning-text {
		margin-top: 40px;
		font-family: 'Courier New', monospace;
		font-size: 18px;
		color: #4eff4e;
		letter-spacing: 3px;
		z-index: 2;
		text-shadow: 0 0 10px rgba(78, 255, 78, 0.5);
	}

	.ellipsis {
		display: inline-block;
		width: 30px;
		text-align: left;
	}
</style>
