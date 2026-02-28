<template>
	<Teleport to="body">
		<div
			v-if="visible"
			class="ehrlich-overlay"
			:class="{ 'fade-out': fadingOut }"
		>
			<div
				class="ehrlich-content"
				:class="{ shake: shaking }"
			>
				<div class="ehrlich-avatar">🎭</div>
				<div class="ehrlich-name">ERLICH BACHMAN</div>
				<div class="ehrlich-quote">{{ currentRant }}</div>
				<div class="ehrlich-aviato">— Founder of Aviato</div>
			</div>
		</div>
	</Teleport>
</template>

<script>
	import { ehrlichRants, randomFromArray } from '../data/mockData.js';

	export default {
		name: 'EhrlichMode',
		data() {
			return {
				visible: false,
				fadingOut: false,
				shaking: false,
				currentRant: '',
				keyPresses: [],
				dismissTimer: null,
			};
		},
		mounted() {
			window.addEventListener('keydown', this.handleKeyDown);
		},
		beforeUnmount() {
			window.removeEventListener('keydown', this.handleKeyDown);
			if (this.dismissTimer) clearTimeout(this.dismissTimer);
		},
		methods: {
			handleKeyDown(e) {
				if (e.key.toLowerCase() !== 'e') {
					this.keyPresses = [];
					return;
				}

				const now = Date.now();
				this.keyPresses.push(now);

				// Keep only presses within last 2 seconds
				this.keyPresses = this.keyPresses.filter(
					(t) => now - t <= 2000,
				);

				if (this.keyPresses.length >= 5) {
					this.keyPresses = [];
					this.trigger();
				}
			},
			trigger() {
				if (this.visible) return;

				this.currentRant = randomFromArray(ehrlichRants);
				this.visible = true;
				this.fadingOut = false;
				this.shaking = true;

				// Stop shaking after 0.8s
				setTimeout(() => {
					this.shaking = false;
				}, 800);

				// Start fade out after 3.5s
				this.dismissTimer = setTimeout(() => {
					this.fadingOut = true;
					// Remove after fade animation
					setTimeout(() => {
						this.visible = false;
						this.fadingOut = false;
					}, 500);
				}, 3500);
			},
		},
	};
</script>

<style scoped>
	.ehrlich-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		animation: ehrlichFadeIn 0.5s ease;
	}

	.ehrlich-overlay.fade-out {
		animation: ehrlichFadeOut 0.5s ease forwards;
	}

	.ehrlich-content {
		text-align: center;
		max-width: 700px;
		padding: 48px;
	}

	.ehrlich-content.shake {
		animation: screenShake 0.8s ease;
	}

	.ehrlich-avatar {
		font-size: 72px;
		margin-bottom: 16px;
		animation: ehrlichBounce 0.6s ease;
	}

	.ehrlich-name {
		font-size: 14px;
		font-weight: 800;
		letter-spacing: 6px;
		color: #b4ff00;
		margin-bottom: 24px;
		text-transform: uppercase;
	}

	.ehrlich-quote {
		font-size: 36px;
		font-weight: 800;
		color: #ffffff;
		line-height: 1.3;
		margin-bottom: 24px;
		animation: ehrlichTextIn 0.8s ease 0.2s both;
		font-style: italic;
	}

	.ehrlich-aviato {
		font-size: 14px;
		color: #666;
		letter-spacing: 2px;
	}

	@keyframes ehrlichFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes ehrlichFadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes ehrlichTextIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes ehrlichBounce {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes screenShake {
		0%,
		100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-10px);
		}
		20% {
			transform: translateX(10px);
		}
		30% {
			transform: translateX(-8px);
		}
		40% {
			transform: translateX(8px);
		}
		50% {
			transform: translateX(-5px);
		}
		60% {
			transform: translateX(5px);
		}
		70% {
			transform: translateX(-3px);
		}
		80% {
			transform: translateX(3px);
		}
		90% {
			transform: translateX(-1px);
		}
	}
</style>
