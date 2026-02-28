<template>
	<div
		class="app"
		:class="currentMode"
	>
		<!-- Mode Toggle -->
		<div
			class="mode-toggle-wrapper"
			:class="currentMode"
		>
			<div class="mode-toggle">
				<button
					class="toggle-btn"
					:class="{ active: currentMode === 'classic' }"
					@click="currentMode = 'classic'"
				>
					Classic
				</button>
				<button
					class="toggle-btn"
					:class="{ active: currentMode === 'modern' }"
					@click="currentMode = 'modern'"
				>
					Modern
				</button>
			</div>
		</div>

		<!-- Mode Views -->
		<Transition
			name="mode-fade"
			mode="out-in"
		>
			<ClassicMode
				v-if="currentMode === 'classic'"
				key="classic"
				@compress="showCompression = true"
			/>
			<ModernMode
				v-else
				key="modern"
				@compress="showCompression = true"
			/>
		</Transition>

		<!-- Compression Demo Modal -->
		<CompressionDemo
			:visible="showCompression"
			:mode="currentMode"
			@close="showCompression = false"
		/>

		<!-- Ehrlich Easter Egg -->
		<EhrlichMode />
	</div>
</template>

<script>
	import ClassicMode from './components/ClassicMode.vue';
	import ModernMode from './components/ModernMode.vue';
	import CompressionDemo from './components/CompressionDemo.vue';
	import EhrlichMode from './components/EhrlichMode.vue';

	export default {
		name: 'App',
		components: {
			ClassicMode,
			ModernMode,
			CompressionDemo,
			EhrlichMode,
		},
		data() {
			return {
				currentMode: 'classic',
				showCompression: false,
			};
		},
	};
</script>

<style scoped>
	.mode-toggle-wrapper {
		position: fixed;
		top: 12px;
		right: 80px;
		z-index: 500;
	}

	.mode-toggle {
		display: flex;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
	}

	.classic .mode-toggle {
		background: #ffffff;
		border: 1px solid #ddd;
	}

	.modern .mode-toggle {
		background: #1a1a1a;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.toggle-btn {
		padding: 6px 16px;
		border: none;
		background: transparent;
		font-size: 12px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s;
		letter-spacing: 0.3px;
	}

	.classic .toggle-btn {
		color: #888;
	}

	.classic .toggle-btn.active {
		background: #1a6b4f;
		color: #ffffff;
	}

	.modern .toggle-btn {
		color: #666;
	}

	.modern .toggle-btn.active {
		background: #b4ff00;
		color: #0a0a0a;
	}

	/* Mode transition */
	.mode-fade-enter-active,
	.mode-fade-leave-active {
		transition: opacity 0.3s ease;
	}

	.mode-fade-enter-from,
	.mode-fade-leave-to {
		opacity: 0;
	}
</style>
