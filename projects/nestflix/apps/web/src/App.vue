<script setup>
	// Nestflix - Netflix Parody
	const shows = [
		{
			id: 1,
			title: 'Stranger Bugs',
			genre: 'Horror',
			rating: '98%',
			cover: '🐛',
		},
		{
			id: 2,
			title: 'The Merge Conflict',
			genre: 'Drama',
			rating: '87%',
			cover: '⚔️',
		},
		{
			id: 3,
			title: 'Breaking Build',
			genre: 'Thriller',
			rating: '95%',
			cover: '💥',
		},
		{
			id: 4,
			title: 'House of Containers',
			genre: 'Political',
			rating: '91%',
			cover: '🐳',
		},
		{
			id: 5,
			title: 'Orange is the New Stack',
			genre: 'Comedy',
			rating: '82%',
			cover: '🟠',
		},
		{
			id: 6,
			title: 'The Witcher (of Bugs)',
			genre: 'Fantasy',
			rating: '89%',
			cover: '🧙',
		},
	];

	const trending = [
		{ id: 7, title: 'Squid Deploy', cover: '🦑' },
		{ id: 8, title: 'Money Heist (Budget Overrun)', cover: '💰' },
		{ id: 9, title: 'Dark (Mode)', cover: '🌙' },
		{ id: 10, title: 'Narcos (npm audit)', cover: '📦' },
	];
</script>

<template>
	<div class="app">
		<header class="header">
			<div class="logo">
				<span class="logo-text">NESTFLIX</span>
			</div>
			<nav class="nav">
				<a
					href="#"
					class="nav-link active"
					>Home</a
				>
				<a
					href="#"
					class="nav-link"
					>TV Shows</a
				>
				<a
					href="#"
					class="nav-link"
					>Movies</a
				>
				<a
					href="#"
					class="nav-link"
					>My List</a
				>
			</nav>
			<div class="user-area">
				<span class="user-avatar">👤</span>
			</div>
		</header>

		<main class="main">
			<div class="hero">
				<div class="hero-content">
					<h1>Breaking Build</h1>
					<p class="hero-desc">
						A high school teacher turns to deploying untested code
						to production to provide for his family. Things escalate
						quickly.
					</p>
					<div class="hero-actions">
						<button class="btn-play">▶ Play</button>
						<button class="btn-info">ℹ More Info</button>
					</div>
				</div>
			</div>

			<section class="row">
				<h2>Popular on Nestflix</h2>
				<div class="row-content">
					<div
						v-for="show in shows"
						:key="show.id"
						class="card"
					>
						<div class="card-cover">{{ show.cover }}</div>
						<div class="card-info">
							<span class="card-title">{{ show.title }}</span>
							<span class="card-meta"
								>{{ show.rating }} • {{ show.genre }}</span
							>
						</div>
					</div>
				</div>
			</section>

			<section class="row">
				<h2>Trending Now</h2>
				<div class="row-content">
					<div
						v-for="item in trending"
						:key="item.id"
						class="card"
					>
						<div class="card-cover">{{ item.cover }}</div>
						<div class="card-info">
							<span class="card-title">{{ item.title }}</span>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer class="portscout-footer">
			<div class="portscout-footer-content">
				<span class="portscout-footer-text">
					Built with
					<a
						href="https://github.com/superhero-codes/portscout-parody-stack"
						target="_blank"
						rel="noopener noreferrer"
					>
						PortScout Parody Stack
					</a>
					— created for testing
					<a
						href="https://portscout.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						PortScout
					</a>
				</span>
			</div>
		</footer>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background: #141414;
		color: #fff;
	}
	.app {
		min-height: 100vh;
	}
	.header {
		display: flex;
		align-items: center;
		padding: 16px 48px;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.7) 0%,
			transparent 100%
		);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}
	.logo-text {
		font-size: 28px;
		font-weight: 700;
		color: #e50914;
		letter-spacing: 2px;
		margin-right: 32px;
	}
	.nav {
		display: flex;
		gap: 20px;
	}
	.nav-link {
		color: #e5e5e5;
		text-decoration: none;
		font-size: 14px;
	}
	.nav-link.active {
		color: #fff;
		font-weight: 600;
	}
	.user-area {
		margin-left: auto;
	}
	.user-avatar {
		font-size: 24px;
	}
	.main {
		padding-bottom: 60px;
	}
	.hero {
		height: 70vh;
		background:
			linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, transparent 60%),
			linear-gradient(180deg, transparent 60%, #141414 100%), #333;
		display: flex;
		align-items: flex-end;
		padding: 0 48px 80px;
	}
	.hero-content {
		max-width: 500px;
	}
	.hero-content h1 {
		font-size: 48px;
		margin-bottom: 16px;
	}
	.hero-desc {
		font-size: 16px;
		color: #ccc;
		margin-bottom: 24px;
		line-height: 1.5;
	}
	.hero-actions {
		display: flex;
		gap: 12px;
	}
	.btn-play {
		padding: 10px 28px;
		background: #fff;
		color: #000;
		border: none;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}
	.btn-info {
		padding: 10px 28px;
		background: rgba(109, 109, 110, 0.7);
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 16px;
		cursor: pointer;
	}
	.row {
		padding: 0 48px;
		margin-bottom: 32px;
	}
	.row h2 {
		font-size: 20px;
		margin-bottom: 16px;
	}
	.row-content {
		display: flex;
		gap: 12px;
		overflow-x: auto;
	}
	.card {
		min-width: 200px;
		cursor: pointer;
		transition: transform 0.2s;
	}
	.card:hover {
		transform: scale(1.05);
	}
	.card-cover {
		width: 200px;
		height: 120px;
		background: #333;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 48px;
	}
	.card-info {
		padding: 8px 4px;
	}
	.card-title {
		font-size: 14px;
		font-weight: 500;
		display: block;
	}
	.card-meta {
		font-size: 12px;
		color: #46d369;
	}
	.portscout-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 12px 20px;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0.6)
		);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		z-index: 1000;
	}
	.portscout-footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	.portscout-footer-text {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 0.02em;
	}
	.portscout-footer-text a {
		color: #a78bfa;
		text-decoration: none;
	}
	.portscout-footer-text a:hover {
		color: #c4b5fd;
		text-decoration: underline;
	}
</style>
