<template>
	<div class="modern-mode">
		<!-- Background glow effects -->
		<div class="glow glow-1"></div>
		<div class="glow glow-2"></div>
		<div class="glow glow-3"></div>

		<!-- Header -->
		<header class="modern-header">
			<div class="header-left">
				<PiedPiperLogo
					variant="modern"
					size="small"
				/>
			</div>
			<nav class="header-nav">
				<a
					href="#"
					class="nav-link"
					>Company</a
				>
				<a
					href="#"
					class="nav-link"
					>For Business</a
				>
				<a
					href="#"
					class="nav-link"
					>How it works</a
				>
				<a
					href="#"
					class="nav-link"
					>Blog</a
				>
				<a
					href="#"
					class="nav-link"
					>Features</a
				>
			</nav>
			<div class="header-right">
				<button
					class="get-started-btn"
					@click="$emit('compress')"
				>
					Get Started
				</button>
			</div>
		</header>

		<!-- Hero Section -->
		<section class="modern-hero">
			<div class="hero-text">
				<h1>
					Unlock your storage potential — compress your files today
				</h1>
				<p class="hero-subtitle">
					Revolutionary middle-out compression technology that
					achieves unprecedented Weissman Scores. Built for the
					decentralized internet.
				</p>
				<button
					class="early-access-btn"
					@click="$emit('compress')"
				>
					Get Early Access
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#0a0a0a"
						stroke-width="2.5"
					>
						<line
							x1="5"
							y1="12"
							x2="19"
							y2="12"
						/>
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</button>
			</div>

			<div class="hero-card">
				<div class="compression-card">
					<div class="card-label">Compressing</div>
					<div class="card-percentage">{{ animatedPercent }}%</div>
					<div class="card-progress">
						<div class="progress-track">
							<div
								class="progress-fill"
								:style="{ width: animatedPercent + '%' }"
							>
								<div class="progress-thumb"></div>
							</div>
						</div>
						<span class="progress-end">100%</span>
					</div>
					<div class="card-details">
						<div class="detail-item">
							<span class="detail-dot cyan"></span>
							File Size: {{ fileSize }} GB
						</div>
						<div class="detail-item">
							<span class="detail-dot pink"></span>
							Type: 3D Model
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Cards Section -->
		<section class="modern-cards">
			<div class="blog-card">
				<div class="blog-image">
					<div class="blog-image-inner">
						<svg
							width="120"
							height="80"
							viewBox="0 0 120 80"
							fill="none"
						>
							<rect
								width="120"
								height="80"
								rx="8"
								fill="#1a3a2a"
							/>
							<circle
								cx="40"
								cy="30"
								r="15"
								fill="#2d9b6e"
								opacity="0.6"
							/>
							<circle
								cx="70"
								cy="45"
								r="20"
								fill="#b4ff00"
								opacity="0.3"
							/>
							<rect
								x="20"
								y="50"
								width="80"
								height="20"
								rx="4"
								fill="#1a6b4f"
								opacity="0.4"
							/>
						</svg>
					</div>
				</div>
				<div class="blog-content">
					<h3>{{ article.title }}</h3>
					<div class="blog-meta">
						<span>by {{ article.author }}</span>
						<span class="meta-divider">/</span>
						<span>{{ article.time }}</span>
					</div>
					<div class="blog-footer">
						<div class="mini-bars">
							<div
								class="mini-bar"
								style="height: 12px"
							></div>
							<div
								class="mini-bar"
								style="height: 20px"
							></div>
							<div
								class="mini-bar"
								style="height: 16px"
							></div>
							<div
								class="mini-bar"
								style="height: 24px"
							></div>
							<div
								class="mini-bar"
								style="height: 18px"
							></div>
						</div>
						<PiedPiperLogo
							variant="modern"
							size="small"
							:show-text="false"
						/>
					</div>
				</div>
			</div>

			<div class="speed-card">
				<div class="speed-content">
					<div class="speed-number">
						<span class="speed-8x">8x</span>
						<span class="speed-faster">/ Faster</span>
					</div>
					<p class="speed-desc">
						Get more done in less time with our powerful solution
					</p>
					<div class="speed-dots">
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot active"></span>
						<span class="dot"></span>
					</div>
				</div>
				<div class="speed-icon">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<circle
							cx="20"
							cy="20"
							r="18"
							stroke="#b4ff00"
							stroke-width="2"
							fill="none"
						/>
						<path
							d="M15 20l4 4 8-8"
							stroke="#b4ff00"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
		</section>

		<!-- Bottom Stats -->
		<section class="modern-bottom">
			<div class="bottom-stat">
				<div class="bottom-stat-value">5.2</div>
				<div class="bottom-stat-label">Weissman Score</div>
			</div>
			<div class="bottom-stat">
				<div class="bottom-stat-value">
					{{ peers.toLocaleString() }}
				</div>
				<div class="bottom-stat-label">Active Peers</div>
			</div>
			<div class="bottom-stat">
				<div class="bottom-stat-value">{{ storedPB }}PB</div>
				<div class="bottom-stat-label">Data Compressed</div>
			</div>
		</section>
	</div>
</template>

<script>
	import PiedPiperLogo from './PiedPiperLogo.vue';
	import {
		blogArticles,
		randomBetween,
		randomFromArray,
	} from '../data/mockData.js';

	export default {
		name: 'ModernMode',
		components: { PiedPiperLogo },
		emits: ['compress'],
		data() {
			return {
				animatedPercent: 0,
				targetPercent: 78,
				fileSize: randomBetween(80, 250),
				article: randomFromArray(blogArticles),
				peers: randomBetween(12000, 99000),
				storedPB: randomBetween(2, 18),
				animationTimer: null,
			};
		},
		mounted() {
			this.animatePercent();
		},
		beforeUnmount() {
			if (this.animationTimer) clearInterval(this.animationTimer);
		},
		methods: {
			animatePercent() {
				const duration = 2000;
				const steps = 60;
				const increment = this.targetPercent / steps;
				const interval = duration / steps;
				let current = 0;

				this.animationTimer = setInterval(() => {
					current += increment;
					if (current >= this.targetPercent) {
						this.animatedPercent = this.targetPercent;
						clearInterval(this.animationTimer);
					} else {
						this.animatedPercent = Math.round(current);
					}
				}, interval);
			},
		},
	};
</script>

<style scoped>
	.modern-mode {
		background: #0a0a0a;
		min-height: 100vh;
		color: #ffffff;
		position: relative;
		overflow-x: hidden;
	}

	/* ===== GLOW EFFECTS ===== */
	.glow {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
	}

	.glow-1 {
		width: 600px;
		height: 600px;
		top: -200px;
		left: -100px;
		background: radial-gradient(
			circle,
			rgba(180, 255, 0, 0.06) 0%,
			transparent 70%
		);
	}

	.glow-2 {
		width: 500px;
		height: 500px;
		top: 200px;
		right: -150px;
		background: radial-gradient(
			circle,
			rgba(180, 255, 0, 0.04) 0%,
			transparent 70%
		);
	}

	.glow-3 {
		width: 400px;
		height: 400px;
		bottom: -100px;
		left: 30%;
		background: radial-gradient(
			circle,
			rgba(180, 255, 0, 0.03) 0%,
			transparent 70%
		);
	}

	/* ===== HEADER ===== */
	.modern-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 48px;
		position: relative;
		z-index: 10;
	}

	.header-nav {
		display: flex;
		gap: 32px;
	}

	.nav-link {
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-link:hover {
		color: #ffffff;
	}

	.get-started-btn {
		padding: 10px 24px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 24px;
		background: transparent;
		color: #ffffff;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s;
	}

	.get-started-btn:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.4);
	}

	/* ===== HERO ===== */
	.modern-hero {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 80px 48px 60px;
		position: relative;
		z-index: 10;
		gap: 60px;
	}

	.hero-text {
		flex: 1;
		max-width: 560px;
	}

	.hero-text h1 {
		font-size: 48px;
		font-weight: 800;
		line-height: 1.15;
		margin: 0 0 20px;
		letter-spacing: -1px;
	}

	.hero-subtitle {
		font-size: 16px;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.6;
		margin: 0 0 32px;
	}

	.early-access-btn {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 14px 32px;
		background: #b4ff00;
		color: #0a0a0a;
		border: none;
		border-radius: 28px;
		font-size: 16px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s;
	}

	.early-access-btn:hover {
		background: #c8ff00;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(180, 255, 0, 0.3);
	}

	/* Compression Card */
	.hero-card {
		flex-shrink: 0;
	}

	.compression-card {
		width: 340px;
		background: #1a1a1a;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		padding: 32px;
		backdrop-filter: blur(20px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
	}

	.card-label {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.4);
		font-weight: 600;
		letter-spacing: 0.5px;
		margin-bottom: 8px;
	}

	.card-percentage {
		font-size: 64px;
		font-weight: 900;
		color: #b4ff00;
		line-height: 1;
		margin-bottom: 24px;
	}

	.card-progress {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 24px;
	}

	.progress-track {
		flex: 1;
		height: 8px;
		background: #333;
		border-radius: 4px;
		overflow: visible;
		position: relative;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #8acc00, #b4ff00);
		border-radius: 4px;
		position: relative;
		transition: width 0.05s linear;
		box-shadow: 0 0 12px rgba(180, 255, 0, 0.4);
	}

	.progress-thumb {
		position: absolute;
		right: -6px;
		top: 50%;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
		background: #b4ff00;
		border-radius: 50%;
		border: 3px solid #0a0a0a;
		box-shadow: 0 0 8px rgba(180, 255, 0, 0.5);
	}

	.progress-end {
		font-size: 12px;
		color: #666;
		font-weight: 600;
	}

	.card-details {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: rgba(255, 255, 255, 0.5);
	}

	.detail-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.detail-dot.cyan {
		background: #00d4ff;
	}

	.detail-dot.pink {
		background: #ff6b9d;
	}

	/* ===== CARDS SECTION ===== */
	.modern-cards {
		display: flex;
		gap: 24px;
		padding: 0 48px 60px;
		position: relative;
		z-index: 10;
	}

	.blog-card {
		flex: 1;
		background: #1a1a1a;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 20px;
		overflow: hidden;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.blog-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
	}

	.blog-image {
		padding: 20px 20px 0;
	}

	.blog-image-inner {
		background: linear-gradient(135deg, #0d2818, #1a4a2e);
		border-radius: 12px;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 120px;
	}

	.blog-content {
		padding: 20px 24px 24px;
	}

	.blog-content h3 {
		font-size: 18px;
		font-weight: 700;
		line-height: 1.4;
		margin: 0 0 12px;
		color: #ffffff;
	}

	.blog-meta {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.35);
		margin-bottom: 20px;
	}

	.meta-divider {
		margin: 0 8px;
	}

	.blog-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.mini-bars {
		display: flex;
		align-items: flex-end;
		gap: 3px;
	}

	.mini-bar {
		width: 4px;
		background: #b4ff00;
		border-radius: 2px;
		opacity: 0.6;
	}

	/* Speed Card */
	.speed-card {
		flex: 1;
		background: #1a1a1a;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 20px;
		padding: 32px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.speed-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
	}

	.speed-number {
		margin-bottom: 16px;
	}

	.speed-8x {
		font-size: 72px;
		font-weight: 900;
		color: #b4ff00;
		line-height: 1;
	}

	.speed-faster {
		font-size: 28px;
		font-weight: 700;
		color: #ffffff;
		margin-left: 4px;
	}

	.speed-desc {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.4);
		line-height: 1.5;
		margin: 0 0 20px;
		max-width: 280px;
	}

	.speed-dots {
		display: flex;
		gap: 6px;
	}

	.speed-dots .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #333;
	}

	.speed-dots .dot.active {
		background: #b4ff00;
	}

	.speed-icon {
		flex-shrink: 0;
	}

	/* ===== BOTTOM STATS ===== */
	.modern-bottom {
		display: flex;
		justify-content: center;
		gap: 80px;
		padding: 40px 48px 60px;
		position: relative;
		z-index: 10;
	}

	.bottom-stat {
		text-align: center;
	}

	.bottom-stat-value {
		font-size: 36px;
		font-weight: 900;
		color: #b4ff00;
		margin-bottom: 4px;
	}

	.bottom-stat-label {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.35);
		font-weight: 500;
	}
</style>
