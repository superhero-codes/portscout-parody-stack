<template>
	<div
		class="gavin-overlay"
		:class="{ 'fade-out': fadingOut }"
	>
		<div class="gavin-quote">"{{ quote }}"</div>
		<div class="gavin-attribution">— Gavin Belson</div>
	</div>
</template>

<script>
	export default {
		name: 'GavinBelsonOverlay',
		emits: ['close'],
		data() {
			const quotes = [
				'The future is not compressed. It is conquered.',
				"I don't want to live in a world where someone else makes the world a better place better than we do.",
				"Hooli isn't just a company. Hooli is a state of mind.",
				'Consider the elephant...',
				'I am not a villain. I am a visionary who happens to be ruthless.',
				"We're going to build a better world. And we're going to do it whether people want it or not.",
			];
			return {
				quote: quotes[Math.floor(Math.random() * quotes.length)],
				fadingOut: false,
			};
		},
		mounted() {
			setTimeout(() => {
				this.fadingOut = true;
				setTimeout(() => {
					this.$emit('close');
				}, 800);
			}, 4200);
		},
	};
</script>
