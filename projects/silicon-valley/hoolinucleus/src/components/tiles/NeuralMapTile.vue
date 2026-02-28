<template>
	<div
		class="tile"
		@click="rearrangeNodes"
	>
		<div class="tile-label">NEURALMAP™</div>
		<div
			class="neural-canvas"
			ref="canvas"
		>
			<svg
				width="100%"
				height="100%"
				style="position: absolute; top: 0; left: 0"
			>
				<line
					v-for="(line, i) in lines"
					:key="'line-' + i"
					:x1="line.x1 + '%'"
					:y1="line.y1 + '%'"
					:x2="line.x2 + '%'"
					:y2="line.y2 + '%'"
					stroke="rgba(59,130,246,0.15)"
					stroke-width="1"
					style="transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
				/>
			</svg>
			<div
				v-for="(node, i) in nodes"
				:key="'node-' + i"
				class="neural-node"
				:style="{
					left: node.x + '%',
					top: node.y + '%',
					opacity: node.opacity,
					width: node.size + 'px',
					height: node.size + 'px',
				}"
			></div>
		</div>
		<div class="tile-subtitle">Cognitive Network Status</div>
	</div>
</template>

<script>
	export default {
		name: 'NeuralMapTile',
		data() {
			return {
				nodes: [],
				lines: [],
				driftInterval: null,
			};
		},
		mounted() {
			this.generateNodes();
			this.generateLines();
			this.driftInterval = setInterval(() => this.driftNodes(), 3000);
		},
		beforeUnmount() {
			clearInterval(this.driftInterval);
		},
		methods: {
			generateNodes() {
				const count = 8 + Math.floor(Math.random() * 5);
				this.nodes = Array.from({ length: count }, () => ({
					x: 5 + Math.random() * 85,
					y: 5 + Math.random() * 85,
					size: 5 + Math.random() * 5,
					opacity: 0.5 + Math.random() * 0.5,
				}));
			},
			generateLines() {
				this.lines = [];
				for (let i = 0; i < this.nodes.length; i++) {
					const connections = 1 + Math.floor(Math.random() * 2);
					for (let c = 0; c < connections; c++) {
						const j = Math.floor(Math.random() * this.nodes.length);
						if (j !== i) {
							this.lines.push({
								x1: this.nodes[i].x + this.nodes[i].size / 2,
								y1: this.nodes[i].y + this.nodes[i].size / 2,
								x2: this.nodes[j].x + this.nodes[j].size / 2,
								y2: this.nodes[j].y + this.nodes[j].size / 2,
							});
						}
					}
				}
			},
			driftNodes() {
				this.nodes = this.nodes.map((n) => ({
					...n,
					x: Math.max(
						2,
						Math.min(92, n.x + (Math.random() - 0.5) * 8),
					),
					y: Math.max(
						2,
						Math.min(92, n.y + (Math.random() - 0.5) * 8),
					),
				}));
				this.generateLines();
			},
			rearrangeNodes() {
				this.generateNodes();
				this.generateLines();
			},
		},
	};
</script>
