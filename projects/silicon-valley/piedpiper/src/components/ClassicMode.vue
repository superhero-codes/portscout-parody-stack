<template>
	<div class="classic-mode">
		<!-- Top Bar -->
		<header class="classic-topbar">
			<div class="topbar-left">
				<PiedPiperLogo
					variant="classic"
					size="small"
				/>
			</div>
			<div class="topbar-right">
				<a
					v-for="item in newsItems"
					:key="item"
					href="#"
					class="news-link"
					>{{ item }}</a
				>
			</div>
		</header>

		<!-- Action Bar -->
		<div class="classic-actionbar">
			<div class="actionbar-center">
				<button
					class="action-btn"
					@click="$emit('compress')"
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1a6b4f"
						stroke-width="2"
					>
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
						<polyline points="17 8 12 3 7 8" />
						<line
							x1="12"
							y1="3"
							x2="12"
							y2="15"
						/>
					</svg>
					<span>Upload</span>
				</button>
				<button class="action-btn">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1a6b4f"
						stroke-width="2"
					>
						<path
							d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
						/>
						<path
							d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
						/>
					</svg>
					<span>Share Link</span>
				</button>
			</div>
			<div class="actionbar-right">
				<div class="search-box">
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#999"
						stroke-width="2"
					>
						<circle
							cx="11"
							cy="11"
							r="8"
						/>
						<line
							x1="21"
							y1="21"
							x2="16.65"
							y2="16.65"
						/>
					</svg>
					<input
						type="text"
						placeholder="Search files..."
					/>
				</div>
			</div>
		</div>

		<!-- Sub Navigation -->
		<nav class="classic-subnav">
			<div class="subnav-items">
				<a
					href="#"
					class="subnav-item"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#666"
						stroke-width="2"
					>
						<circle
							cx="12"
							cy="12"
							r="3"
						/>
						<path d="M12 1v6m0 6v6m-7-7h6m6 0h6" />
					</svg>
					CALIBRATION
				</a>
				<a
					href="#"
					class="subnav-item"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#666"
						stroke-width="2"
					>
						<rect
							x="3"
							y="3"
							width="18"
							height="18"
							rx="2"
						/>
						<line
							x1="3"
							y1="9"
							x2="21"
							y2="9"
						/>
					</svg>
					SCRATCHPAD
				</a>
				<a
					href="#"
					class="subnav-item active"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1a6b4f"
						stroke-width="2"
					>
						<path
							d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
						/>
					</svg>
					HOME
				</a>
			</div>
		</nav>

		<!-- Stats Bar -->
		<div class="classic-stats">
			<PiedPiperLogo
				variant="classic"
				size="large"
				:show-text="false"
			/>
			<div class="stats-pills">
				<div class="stat-pill green">
					<span class="pill-label">Global Peers</span>
					<span class="pill-value">{{ stats.globalPeers }}</span>
				</div>
				<div class="stat-pill signal">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1a6b4f"
						stroke-width="2"
					>
						<path
							d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
						/>
					</svg>
					<span class="pill-label">Utilization</span>
					<span class="pill-value">{{ stats.utilization }}%</span>
				</div>
				<div class="stat-pill green">
					<span class="pill-label">Total Stored</span>
					<span class="pill-value">{{ stats.totalStored }}TB</span>
				</div>
			</div>
		</div>

		<!-- Filter Bar -->
		<div class="classic-filters">
			<div class="filter-buttons">
				<button class="filter-btn clear">Clear All Filters</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'PDF' }"
					@click="toggleFilter('PDF')"
				>
					PDF
				</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'JPG' }"
					@click="toggleFilter('JPG')"
				>
					JPG
				</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'MOV' }"
					@click="toggleFilter('MOV')"
				>
					MOV
				</button>
				<button
					class="filter-btn"
					:class="{ active: activeFilter === 'MP3' }"
					@click="toggleFilter('MP3')"
				>
					MP3
				</button>
			</div>
			<div class="view-toggles">
				<button
					class="view-btn"
					:class="{ active: viewMode === 'grid' }"
					@click="viewMode = 'grid'"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect
							x="3"
							y="3"
							width="7"
							height="7"
						/>
						<rect
							x="14"
							y="3"
							width="7"
							height="7"
						/>
						<rect
							x="3"
							y="14"
							width="7"
							height="7"
						/>
						<rect
							x="14"
							y="14"
							width="7"
							height="7"
						/>
					</svg>
				</button>
				<button
					class="view-btn"
					:class="{ active: viewMode === 'list' }"
					@click="viewMode = 'list'"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<line
							x1="8"
							y1="6"
							x2="21"
							y2="6"
						/>
						<line
							x1="8"
							y1="12"
							x2="21"
							y2="12"
						/>
						<line
							x1="8"
							y1="18"
							x2="21"
							y2="18"
						/>
						<line
							x1="3"
							y1="6"
							x2="3.01"
							y2="6"
						/>
						<line
							x1="3"
							y1="12"
							x2="3.01"
							y2="12"
						/>
						<line
							x1="3"
							y1="18"
							x2="3.01"
							y2="18"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Main Content -->
		<div class="classic-main">
			<!-- Left Sidebar -->
			<aside class="classic-sidebar-left">
				<h4 class="sidebar-title">MY PIED PIPER</h4>
				<nav class="sidebar-nav">
					<a
						href="#"
						class="sidebar-link active"
					>
						<span class="sidebar-icon">📁</span> RECENT
					</a>
					<a
						href="#"
						class="sidebar-link"
					>
						<span class="sidebar-icon">⭐</span> STARRED
					</a>
					<a
						href="#"
						class="sidebar-link"
					>
						<span class="sidebar-icon">📄</span> FILES
					</a>
					<a
						href="#"
						class="sidebar-link"
					>
						<span class="sidebar-icon">📷</span> PHOTOS
					</a>
				</nav>
			</aside>

			<!-- File Table -->
			<main class="classic-content">
				<table class="file-table">
					<thead>
						<tr>
							<th>NAME</th>
							<th>SIZE</th>
							<th>COMPRESSION</th>
							<th>STATUS</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="(file, index) in files"
							:key="index"
						>
							<td class="file-name-cell">
								<span class="file-icon">{{
									getFileIcon(file.type)
								}}</span>
								{{ file.name }}
							</td>
							<td class="file-size">{{ file.size }}</td>
							<td class="file-compression">
								<span class="compression-badge">{{
									file.compression
								}}</span>
							</td>
							<td>
								<span
									class="status-badge"
									:class="file.status.toLowerCase()"
								>
									{{ file.status }}
								</span>
							</td>
							<td class="file-actions">
								<button class="icon-btn">⋯</button>
								<button class="icon-btn">⚙</button>
								<button class="icon-btn">✕</button>
							</td>
						</tr>
					</tbody>
				</table>
			</main>

			<!-- Right Sidebar -->
			<aside class="classic-sidebar-right">
				<div class="user-card">
					<div class="user-avatar">
						<svg
							width="48"
							height="48"
							viewBox="0 0 48 48"
							fill="none"
						>
							<circle
								cx="24"
								cy="24"
								r="23"
								fill="#e8f5ef"
								stroke="#2d9b6e"
								stroke-width="2"
							/>
							<circle
								cx="24"
								cy="18"
								r="8"
								fill="#2d9b6e"
							/>
							<path
								d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16"
								fill="#2d9b6e"
							/>
						</svg>
					</div>
					<div class="user-name">{{ userName }}</div>
					<div class="user-storage">2TB Storage</div>
					<a
						href="#"
						class="sign-out"
						>Sign Out</a
					>
				</div>

				<div class="account-section">
					<h5 class="section-title">Account</h5>
					<a
						href="#"
						class="account-link"
						>Personal Account</a
					>
					<a
						href="#"
						class="account-link"
						>Storage</a
					>
					<a
						href="#"
						class="account-link"
						>Business Solutions</a
					>
				</div>

				<div class="stats-section">
					<h5 class="section-title">Last 30 Days</h5>
					<div class="mini-stat">
						<span>Files Compressed</span>
						<strong>{{ randomStat(120, 890) }}</strong>
					</div>
					<div class="mini-stat">
						<span>Space Saved</span>
						<strong>{{ randomStat(10, 99) }}GB</strong>
					</div>
					<div class="mini-stat">
						<span>Avg. Weissman</span>
						<strong>{{ randomFloat(3.0, 5.2) }}</strong>
					</div>
				</div>
			</aside>
		</div>
	</div>
</template>

<script>
	import PiedPiperLogo from './PiedPiperLogo.vue';
	import {
		dashboardFiles,
		newsTickerItems,
		userNames,
		generateStats,
		randomBetween,
		randomFloat,
		randomFromArray,
	} from '../data/mockData.js';

	export default {
		name: 'ClassicMode',
		components: { PiedPiperLogo },
		emits: ['compress'],
		data() {
			return {
				files: dashboardFiles,
				newsItems: newsTickerItems,
				stats: generateStats(),
				userName: randomFromArray(userNames),
				activeFilter: null,
				viewMode: 'list',
			};
		},
		methods: {
			getFileIcon(type) {
				const icons = {
					folder: '📁',
					pdf: '📄',
					mov: '🎬',
					mp3: '🎵',
					xlsx: '📊',
					jpg: '🖼️',
					'tar.gz': '📦',
				};
				return icons[type] || '📄';
			},
			toggleFilter(filter) {
				this.activeFilter =
					this.activeFilter === filter ? null : filter;
			},
			randomStat(min, max) {
				return randomBetween(min, max);
			},
			randomFloat(min, max) {
				return randomFloat(min, max);
			},
		},
	};
</script>

<style scoped>
	/* ===== TOP BAR ===== */
	.classic-topbar {
		background: #1a6b4f;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 24px;
	}

	.topbar-right {
		display: flex;
		gap: 16px;
	}

	.news-link {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1px;
		transition: color 0.2s;
	}

	.news-link:hover {
		color: #ffffff;
	}

	/* ===== ACTION BAR ===== */
	.classic-actionbar {
		background: #f0f7f4;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 24px;
		border-bottom: 1px solid #dce8e2;
	}

	.actionbar-center {
		display: flex;
		gap: 24px;
	}

	.action-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		background: none;
		border: none;
		color: #1a6b4f;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		padding: 6px 12px;
		border-radius: 6px;
		transition: background 0.2s;
	}

	.action-btn:hover {
		background: rgba(26, 107, 79, 0.1);
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #ffffff;
		border: 1px solid #d0d0d0;
		border-radius: 6px;
		padding: 6px 12px;
	}

	.search-box input {
		border: none;
		outline: none;
		font-size: 13px;
		background: transparent;
		width: 180px;
		color: #333;
	}

	.search-box input::placeholder {
		color: #aaa;
	}

	/* ===== SUB NAV ===== */
	.classic-subnav {
		background: #f5f5f5;
		border-bottom: 1px solid #e0e0e0;
		padding: 0 24px;
	}

	.subnav-items {
		display: flex;
		justify-content: flex-end;
		gap: 4px;
	}

	.subnav-item {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 16px;
		text-decoration: none;
		color: #666;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.5px;
		border-bottom: 2px solid transparent;
		transition: all 0.2s;
	}

	.subnav-item:hover {
		color: #1a6b4f;
	}

	.subnav-item.active {
		color: #1a6b4f;
		border-bottom-color: #1a6b4f;
	}

	/* ===== STATS BAR ===== */
	.classic-stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 32px;
		padding: 24px;
		background: #ffffff;
		border-bottom: 1px solid #eee;
	}

	.stats-pills {
		display: flex;
		gap: 16px;
	}

	.stat-pill {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 20px;
		border-radius: 24px;
		font-size: 13px;
		font-weight: 600;
	}

	.stat-pill.green {
		background: #e8f5ef;
		color: #1a6b4f;
	}

	.stat-pill.signal {
		background: #f0f7f4;
		color: #1a6b4f;
	}

	.pill-label {
		color: #666;
		font-weight: 500;
	}

	.pill-value {
		font-weight: 800;
		color: #1a6b4f;
	}

	/* ===== FILTER BAR ===== */
	.classic-filters {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 24px;
		background: #fafafa;
		border-bottom: 1px solid #eee;
	}

	.filter-buttons {
		display: flex;
		gap: 8px;
	}

	.filter-btn {
		padding: 6px 16px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background: #fff;
		color: #666;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.filter-btn:hover {
		border-color: #1a6b4f;
		color: #1a6b4f;
	}

	.filter-btn.active {
		background: #1a6b4f;
		color: #fff;
		border-color: #1a6b4f;
	}

	.filter-btn.clear {
		background: none;
		border: none;
		color: #999;
		font-weight: 500;
	}

	.filter-btn.clear:hover {
		color: #1a6b4f;
	}

	.view-toggles {
		display: flex;
		gap: 4px;
	}

	.view-btn {
		padding: 6px 8px;
		border: 1px solid #ddd;
		background: #fff;
		color: #999;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.view-btn.active {
		color: #1a6b4f;
		border-color: #1a6b4f;
	}

	/* ===== MAIN LAYOUT ===== */
	.classic-main {
		display: flex;
		min-height: calc(100vh - 320px);
	}

	/* Left Sidebar */
	.classic-sidebar-left {
		width: 200px;
		background: #fafafa;
		border-right: 1px solid #eee;
		padding: 20px 0;
		flex-shrink: 0;
	}

	.sidebar-title {
		padding: 0 20px;
		margin: 0 0 16px;
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 1px;
		color: #1a6b4f;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
	}

	.sidebar-link {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 20px;
		text-decoration: none;
		color: #555;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.5px;
		transition: all 0.2s;
	}

	.sidebar-link:hover {
		background: #f0f7f4;
		color: #1a6b4f;
	}

	.sidebar-link.active {
		background: #e8f5ef;
		color: #1a6b4f;
		border-right: 3px solid #1a6b4f;
	}

	.sidebar-icon {
		font-size: 16px;
	}

	/* File Table */
	.classic-content {
		flex: 1;
		padding: 0;
		overflow-x: auto;
	}

	.file-table {
		width: 100%;
		border-collapse: collapse;
	}

	.file-table th {
		text-align: left;
		padding: 12px 16px;
		font-size: 10px;
		font-weight: 800;
		letter-spacing: 1px;
		color: #999;
		border-bottom: 2px solid #eee;
		background: #fafafa;
	}

	.file-table td {
		padding: 14px 16px;
		font-size: 13px;
		border-bottom: 1px solid #f0f0f0;
		color: #444;
	}

	.file-table tr:hover {
		background: #f8fdf9;
	}

	.file-name-cell {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
		color: #333;
	}

	.file-icon {
		font-size: 18px;
	}

	.file-size {
		color: #888;
	}

	.compression-badge {
		background: #e8f5ef;
		color: #1a6b4f;
		padding: 3px 10px;
		border-radius: 12px;
		font-size: 12px;
		font-weight: 700;
	}

	.status-badge {
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 10px;
		font-weight: 800;
		letter-spacing: 0.5px;
	}

	.status-badge.downloading {
		background: #fff3cd;
		color: #856404;
	}

	.status-badge.complete {
		background: #d4edda;
		color: #155724;
	}

	.status-badge.syncing {
		background: #cce5ff;
		color: #004085;
	}

	.status-badge.uploading {
		background: #e8f5ef;
		color: #1a6b4f;
	}

	.file-actions {
		display: flex;
		gap: 4px;
	}

	.icon-btn {
		background: none;
		border: none;
		color: #ccc;
		cursor: pointer;
		padding: 4px 6px;
		border-radius: 4px;
		font-size: 14px;
		transition: all 0.2s;
	}

	.icon-btn:hover {
		background: #f0f0f0;
		color: #666;
	}

	/* Right Sidebar */
	.classic-sidebar-right {
		width: 220px;
		background: #fafafa;
		border-left: 1px solid #eee;
		padding: 20px;
		flex-shrink: 0;
	}

	.user-card {
		text-align: center;
		padding-bottom: 20px;
		border-bottom: 1px solid #eee;
		margin-bottom: 20px;
	}

	.user-avatar {
		margin-bottom: 12px;
	}

	.user-name {
		font-weight: 700;
		font-size: 14px;
		color: #333;
		margin-bottom: 4px;
	}

	.user-storage {
		font-size: 12px;
		color: #888;
		margin-bottom: 8px;
	}

	.sign-out {
		font-size: 11px;
		color: #1a6b4f;
		text-decoration: none;
		font-weight: 600;
	}

	.sign-out:hover {
		text-decoration: underline;
	}

	.account-section {
		margin-bottom: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid #eee;
	}

	.section-title {
		font-size: 10px;
		font-weight: 800;
		letter-spacing: 1px;
		color: #999;
		margin: 0 0 12px;
		text-transform: uppercase;
	}

	.account-link {
		display: block;
		padding: 6px 0;
		font-size: 13px;
		color: #555;
		text-decoration: none;
		transition: color 0.2s;
	}

	.account-link:hover {
		color: #1a6b4f;
	}

	.mini-stat {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 0;
		font-size: 12px;
	}

	.mini-stat span {
		color: #888;
	}

	.mini-stat strong {
		color: #1a6b4f;
		font-weight: 800;
	}
</style>
