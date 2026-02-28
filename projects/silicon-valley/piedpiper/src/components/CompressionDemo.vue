<template>
	<Teleport to="body">
		<div
			v-if="visible"
			class="compression-overlay"
			@click.self="close"
		>
			<div
				class="compression-modal"
				:class="mode"
			>
				<button
					class="compression-close"
					@click="close"
				>
					&times;
				</button>
				<div class="compression-header">
					<div class="compression-icon">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<rect
								x="4"
								y="2"
								width="24"
								height="28"
								rx="3"
								:stroke="
									mode === 'modern' ? '#b4ff00' : '#2d9b6e'
								"
								stroke-width="2"
								fill="none"
							/>
							<line
								x1="10"
								y1="10"
								x2="22"
								y2="10"
								:stroke="
									mode === 'modern' ? '#b4ff00' : '#2d9b6e'
								"
								stroke-width="1.5"
							/>
							<line
								x1="10"
								y1="15"
								x2="22"
								y2="15"
								:stroke="
									mode === 'modern' ? '#b4ff00' : '#2d9b6e'
								"
								stroke-width="1.5"
							/>
							<line
								x1="10"
								y1="20"
								x2="18"
								y2="20"
								:stroke="
									mode === 'modern' ? '#b4ff00' : '#2d9b6e'
								"
								stroke-width="1.5"
							/>
						</svg>
					</div>
					<h3>Middle-Out Compression</h3>
				</div>

				<div class="compression-file-info">
					<span class="file-name">{{ result.fileName }}</span>
					<span class="file-size"
						>Original: {{ result.originalSize }}</span
					>
				</div>

				<div class="compression-progress-section">
					<div
						class="compression-percentage"
						:class="{ complete: isComplete }"
					>
						{{ currentPercent }}%
					</div>
					<div class="compression-bar-track">
						<div
							class="compression-bar-fill"
							:style="{ width: currentPercent + '%' }"
						></div>
					</div>
					<div class="compression-labels">
						<span>Compressing...</span>
						<span>{{ result.compressionTarget }}%</span>
					</div>
				</div>

				<div
					v-if="isComplete"
					class="compression-result"
				>
					<div class="result-success">✓ Optimized Successfully</div>
					<div class="result-stats">
						<div class="result-stat">
							<span class="stat-label">Compression Ratio</span>
							<span class="stat-value">{{ result.ratio }}</span>
						</div>
						<div class="result-stat">
							<span class="stat-label">Weissman Score</span>
							<span class="stat-value weissman">{{
								result.weissmanScore
							}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script>
	import { generateCompressionResult } from '../data/mockData.js';

	export default {
		name: 'CompressionDemo',
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
			mode: {
				type: String,
				default: 'classic',
			},
		},
		emits: ['close'],
		data() {
			return {
				result: generateCompressionResult(),
				currentPercent: 0,
				isComplete: false,
				animationTimer: null,
			};
		},
		watch: {
			visible(newVal) {
				if (newVal) {
					this.startCompression();
				} else {
					this.reset();
				}
			},
		},
		methods: {
			startCompression() {
				this.result = generateCompressionResult();
				this.currentPercent = 0;
				this.isComplete = false;

				const target = this.result.compressionTarget;
				const duration = 2500;
				const steps = 60;
				const increment = target / steps;
				const interval = duration / steps;
				let current = 0;

				this.animationTimer = setInterval(() => {
					current += increment;
					if (current >= target) {
						this.currentPercent = target;
						clearInterval(this.animationTimer);
						this.isComplete = true;
					} else {
						this.currentPercent = Math.round(current);
					}
				}, interval);
			},
			reset() {
				if (this.animationTimer) {
					clearInterval(this.animationTimer);
				}
				this.currentPercent = 0;
				this.isComplete = false;
			},
			close() {
				this.$emit('close');
			},
		},
		beforeUnmount() {
			if (this.animationTimer) {
				clearInterval(this.animationTimer);
			}
		},
	};
</script>

<style scoped>
	.compression-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		animation: fadeIn 0.3s ease;
	}

	.compression-modal {
		width: 440px;
		border-radius: 16px;
		padding: 32px;
		position: relative;
		animation: slideUp 0.4s ease;
	}

	.compression-modal.classic {
		background: #ffffff;
		border: 1px solid #e0e0e0;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
	}

	.compression-modal.modern {
		background: #1a1a1a;
		border: 1px solid rgba(180, 255, 0, 0.2);
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.5),
			0 0 40px rgba(180, 255, 0, 0.05);
	}

	.compression-close {
		position: absolute;
		top: 12px;
		right: 16px;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		line-height: 1;
		padding: 4px 8px;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.classic .compression-close {
		color: #666;
	}

	.classic .compression-close:hover {
		background: #f0f0f0;
	}

	.modern .compression-close {
		color: #888;
	}

	.modern .compression-close:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.compression-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 24px;
	}

	.compression-header h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}

	.classic .compression-header h3 {
		color: #1a6b4f;
	}

	.modern .compression-header h3 {
		color: #ffffff;
	}

	.compression-file-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
		padding: 12px 16px;
		border-radius: 8px;
	}

	.classic .compression-file-info {
		background: #f5f9f7;
		border: 1px solid #e0ede7;
	}

	.modern .compression-file-info {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.file-name {
		font-weight: 600;
		font-size: 14px;
	}

	.classic .file-name {
		color: #333;
	}

	.modern .file-name {
		color: #fff;
	}

	.file-size {
		font-size: 13px;
	}

	.classic .file-size {
		color: #888;
	}

	.modern .file-size {
		color: #888;
	}

	.compression-progress-section {
		margin-bottom: 24px;
	}

	.compression-percentage {
		font-size: 48px;
		font-weight: 800;
		text-align: center;
		margin-bottom: 16px;
		transition: color 0.3s;
	}

	.classic .compression-percentage {
		color: #1a6b4f;
	}

	.modern .compression-percentage {
		color: #b4ff00;
	}

	.compression-percentage.complete {
		animation: pulse 0.5s ease;
	}

	.compression-bar-track {
		width: 100%;
		height: 12px;
		border-radius: 6px;
		overflow: hidden;
	}

	.classic .compression-bar-track {
		background: #e8e8e8;
	}

	.modern .compression-bar-track {
		background: #333;
	}

	.compression-bar-fill {
		height: 100%;
		border-radius: 6px;
		transition: width 0.05s linear;
	}

	.classic .compression-bar-fill {
		background: linear-gradient(90deg, #2d9b6e, #1a6b4f);
	}

	.modern .compression-bar-fill {
		background: linear-gradient(90deg, #b4ff00, #8acc00);
		box-shadow: 0 0 12px rgba(180, 255, 0, 0.4);
	}

	.compression-labels {
		display: flex;
		justify-content: space-between;
		margin-top: 8px;
		font-size: 12px;
	}

	.classic .compression-labels {
		color: #888;
	}

	.modern .compression-labels {
		color: #666;
	}

	.compression-result {
		animation: fadeIn 0.5s ease;
	}

	.result-success {
		text-align: center;
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 16px;
		padding: 12px;
		border-radius: 8px;
	}

	.classic .result-success {
		color: #1a6b4f;
		background: #e8f5ef;
	}

	.modern .result-success {
		color: #b4ff00;
		background: rgba(180, 255, 0, 0.1);
	}

	.result-stats {
		display: flex;
		gap: 16px;
	}

	.result-stat {
		flex: 1;
		text-align: center;
		padding: 12px;
		border-radius: 8px;
	}

	.classic .result-stat {
		background: #f8f8f8;
		border: 1px solid #eee;
	}

	.modern .result-stat {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.stat-label {
		display: block;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-bottom: 4px;
	}

	.classic .stat-label {
		color: #888;
	}

	.modern .stat-label {
		color: #666;
	}

	.stat-value {
		display: block;
		font-size: 24px;
		font-weight: 800;
	}

	.classic .stat-value {
		color: #1a6b4f;
	}

	.modern .stat-value {
		color: #ffffff;
	}

	.stat-value.weissman {
		color: #b4ff00 !important;
	}

	.classic .stat-value.weissman {
		color: #1a6b4f !important;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}
</style>
