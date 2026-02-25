<script setup>
	// Lotion - Notion Parody
</script>

<template>
	<div class="app">
		<header class="header">
			<div class="logo">
				<span class="logo-icon">📝</span>
				<span class="logo-text">Lotion</span>
			</div>
			<nav class="nav">
				<span class="tagline">Write. Organize. Procrastinate.</span>
			</nav>
		</header>

		<main class="main">
			<aside class="sidebar">
				<div class="workspace">
					<span class="workspace-icon">🏠</span>
					<span>My Workspace</span>
				</div>
				<ul class="pages">
					<li class="page-item active">📄 Getting Started</li>
					<li class="page-item">📋 To-Do List (Never Done)</li>
					<li class="page-item">💡 Million Dollar Ideas</li>
					<li class="page-item">📅 Meeting Notes (Empty)</li>
					<li class="page-item">🎯 Q4 Goals (Forgotten)</li>
					<li class="page-item">📊 Important Spreadsheet</li>
				</ul>
			</aside>

			<div class="content">
				<div class="page-header">
					<h1>📄 Getting Started</h1>
					<span class="last-edited">Last edited: 3 months ago</span>
				</div>

				<div class="blocks">
					<div class="block">
						<h2>Welcome to Lotion 👋</h2>
					</div>
					<div class="block">
						<p>
							The all-in-one workspace for your team to ignore
							together.
						</p>
					</div>
					<div class="block callout">
						<span class="callout-icon">💡</span>
						<p>
							<strong>Pro tip:</strong> Start by creating a page,
							then stare at it blankly for 20 minutes.
						</p>
					</div>
					<div class="block">
						<h3>Quick Actions</h3>
					</div>
					<div class="block todo-list">
						<div class="todo-item checked">✅ Create account</div>
						<div class="todo-item checked">
							✅ Watch tutorial (skipped)
						</div>
						<div class="todo-item">⬜ Actually use the product</div>
						<div class="todo-item">⬜ Invite team members</div>
						<div class="todo-item">⬜ Cancel subscription</div>
					</div>
					<div class="block">
						<h3>Recent Activity</h3>
						<div class="activity-feed">
							<div class="activity-item">
								<span class="activity-user">You</span>
								<span class="activity-action"
									>created this page and never came back</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
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
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, sans-serif;
		background: #191919;
		color: #e3e3e3;
		min-height: 100vh;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 24px;
		background: #202020;
		border-bottom: 1px solid #2f2f2f;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.logo-icon {
		font-size: 24px;
	}

	.logo-text {
		font-size: 20px;
		font-weight: 600;
		color: #fff;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.tagline {
		font-size: 13px;
		color: #787774;
		font-style: italic;
	}

	.main {
		display: flex;
		flex: 1;
		padding-bottom: 60px;
	}

	.sidebar {
		width: 260px;
		background: #191919;
		padding: 16px;
		border-right: 1px solid #2f2f2f;
	}

	.workspace {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 6px;
		background: #2f2f2f;
		margin-bottom: 16px;
		font-size: 14px;
		font-weight: 500;
	}

	.workspace-icon {
		font-size: 16px;
	}

	.pages {
		list-style: none;
	}

	.page-item {
		padding: 8px 12px;
		font-size: 14px;
		color: #9b9a97;
		cursor: pointer;
		border-radius: 4px;
		transition: background 0.15s;
	}

	.page-item:hover {
		background: #2f2f2f;
	}

	.page-item.active {
		background: #2f2f2f;
		color: #fff;
	}

	.content {
		flex: 1;
		padding: 48px 64px;
		max-width: 900px;
	}

	.page-header {
		margin-bottom: 32px;
	}

	.page-header h1 {
		font-size: 36px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	.last-edited {
		font-size: 12px;
		color: #787774;
	}

	.blocks {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.block {
		padding: 4px 0;
	}

	.block h2 {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.block h3 {
		font-size: 20px;
		font-weight: 600;
		margin-top: 24px;
		margin-bottom: 8px;
	}

	.block p {
		font-size: 16px;
		line-height: 1.6;
		color: #9b9a97;
	}

	.callout {
		display: flex;
		gap: 12px;
		padding: 16px;
		background: #2f2f2f;
		border-radius: 6px;
	}

	.callout-icon {
		font-size: 20px;
	}

	.todo-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.todo-item {
		font-size: 15px;
		color: #9b9a97;
		padding: 4px 0;
	}

	.todo-item.checked {
		color: #787774;
		text-decoration: line-through;
	}

	.activity-feed {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 8px;
	}

	.activity-item {
		font-size: 14px;
		color: #787774;
	}

	.activity-user {
		color: #a78bfa;
		font-weight: 500;
	}

	/* PortScout Footer */
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
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 0.02em;
	}

	.portscout-footer-text a {
		color: #a78bfa;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.portscout-footer-text a:hover {
		color: #c4b5fd;
		text-decoration: underline;
	}
</style>
