<template>
	<div
		class="admin-overlay"
		@click.self="$emit('close')"
	>
		<div class="admin-modal">
			<div class="admin-header">HOOLI INTERNAL SYSTEMS ACCESS</div>
			<div class="admin-subtitle">Classification: ULTRA-CONFIDENTIAL</div>
			<div class="admin-grid">
				<div
					class="admin-stat"
					v-for="(stat, i) in stats"
					:key="i"
				>
					<div
						class="admin-stat-value"
						:style="{ animationDelay: i * 0.1 + 's' }"
					>
						{{ stat.animated ? stat.displayValue : '' }}
					</div>
					<div class="admin-stat-label">{{ stat.label }}</div>
				</div>
			</div>
			<button
				class="admin-close"
				@click="$emit('close')"
			>
				DISMISS
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AdminModal',
		emits: ['close'],
		data() {
			return {
				stats: [
					{
						label: 'Servers',
						value: 4291003,
						displayValue: '0',
						animated: false,
						isNumber: true,
					},
					{
						label: 'Global Nodes',
						value: 88102,
						displayValue: '0',
						animated: false,
						isNumber: true,
					},
					{
						label: 'Active Acquisitions',
						value: 17,
						displayValue: '0',
						animated: false,
						isNumber: true,
					},
					{
						label: 'Pending Lawsuits',
						value: 3,
						displayValue: '0',
						animated: false,
						isNumber: true,
					},
					{
						label: 'Employee Satisfaction',
						value: 'Optimal',
						displayValue: '',
						animated: false,
						isNumber: false,
					},
					{
						label: "Gavin's Mood",
						value: 'Visionary',
						displayValue: '',
						animated: false,
						isNumber: false,
					},
					{
						label: 'Competitor Threat',
						value: 'Negligible',
						displayValue: '',
						animated: false,
						isNumber: false,
					},
					{
						label: 'Data Centers',
						value: 'All + 2 Undisclosed',
						displayValue: '',
						animated: false,
						isNumber: false,
					},
				],
			};
		},
		mounted() {
			this.animateStats();
		},
		methods: {
			animateStats() {
				this.stats.forEach((stat, i) => {
					setTimeout(() => {
						if (stat.isNumber) {
							this.countUp(i, stat.value);
						} else {
							stat.displayValue = stat.value;
							stat.animated = true;
						}
					}, i * 120);
				});
			},
			countUp(index, target) {
				const stat = this.stats[index];
				stat.animated = true;
				const duration = 800;
				const steps = 30;
				const increment = target / steps;
				let current = 0;
				const interval = setInterval(() => {
					current += increment;
					if (current >= target) {
						current = target;
						clearInterval(interval);
					}
					stat.displayValue = Math.floor(current).toLocaleString();
				}, duration / steps);
			},
		},
	};
</script>
