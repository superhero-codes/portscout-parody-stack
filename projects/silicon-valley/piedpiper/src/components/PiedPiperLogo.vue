<template>
	<div
		class="pp-logo"
		:class="[variant, size]"
	>
		<svg
			:width="svgSize"
			:height="svgSize"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="pp-logo-svg"
		>
			<!-- Leaf/book shape -->
			<path
				d="M32 4C32 4 12 14 12 34C12 48 20 58 32 60C44 58 52 48 52 34C52 14 32 4 32 4Z"
				:fill="leafColor"
				:stroke="strokeColor"
				stroke-width="1.5"
			/>
			<!-- Center vein -->
			<path
				d="M32 12V52"
				:stroke="veinColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<!-- Left veins -->
			<path
				d="M32 20L20 28"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M32 30L18 36"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M32 40L20 44"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<!-- Right veins -->
			<path
				d="M32 20L44 28"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M32 30L46 36"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M32 40L44 44"
				:stroke="veinColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
		<span
			v-if="showText"
			class="pp-logo-text"
			:style="{ color: textColor }"
		>
			{{ textContent }}
		</span>
	</div>
</template>

<script>
	export default {
		name: 'PiedPiperLogo',
		props: {
			variant: {
				type: String,
				default: 'classic',
				validator: (v) =>
					['classic', 'modern', 'icon-only'].includes(v),
			},
			size: {
				type: String,
				default: 'medium',
				validator: (v) => ['small', 'medium', 'large'].includes(v),
			},
			showText: {
				type: Boolean,
				default: true,
			},
		},
		computed: {
			svgSize() {
				const sizes = { small: 24, medium: 36, large: 56 };
				return sizes[this.size] || 36;
			},
			leafColor() {
				return this.variant === 'modern' ? '#b4ff00' : '#2d9b6e';
			},
			strokeColor() {
				return this.variant === 'modern' ? '#8acc00' : '#1a6b4f';
			},
			veinColor() {
				return this.variant === 'modern' ? '#0a0a0a' : '#ffffff';
			},
			textColor() {
				return this.variant === 'modern' ? '#ffffff' : '#ffffff';
			},
			textContent() {
				return this.variant === 'modern' ? 'piedpiper' : 'pied piper';
			},
		},
	};
</script>

<style scoped>
	.pp-logo {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}

	.pp-logo-svg {
		flex-shrink: 0;
	}

	.pp-logo-text {
		font-weight: 700;
		letter-spacing: 0.5px;
		white-space: nowrap;
	}

	.pp-logo.small .pp-logo-text {
		font-size: 14px;
	}

	.pp-logo.medium .pp-logo-text {
		font-size: 18px;
	}

	.pp-logo.large .pp-logo-text {
		font-size: 28px;
	}
</style>
