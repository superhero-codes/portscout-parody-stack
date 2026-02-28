<template>
	<div class="profile-popup">
		<button
			class="close-btn"
			@click="$emit('close')"
		>
			&times;
		</button>

		<div class="popup-header">
			<img
				:src="profile.image"
				:alt="profile.username"
				class="profile-photo"
			/>
			<div class="popup-info">
				<div class="username">{{ profile.username }}</div>
				<div class="coords">{{ profile.coordsLabel }}</div>
			</div>
		</div>

		<div class="popup-stats">
			<div class="stat-row">
				<span class="stat-label">CONFIDENCE:</span>
				<span class="stat-value confidence-pulse"
					>{{ profile.confidence }}%</span
				>
			</div>
			<div class="stat-row">
				<span class="stat-label">DETECTED:</span>
				<span class="stat-value">{{ profile.minutesAgo }} min ago</span>
			</div>
		</div>

		<div class="popup-section">
			<div class="section-title">RECENT ACTIVITY</div>
			<div class="section-content">{{ profile.recentActivity }}</div>
		</div>

		<div class="popup-actions">
			<button
				class="btn-track"
			>
				TRACK
			</button>
			<button
				class="btn-dismiss"
				@click="$emit('close')"
			>
				DISMISS
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProfilePopup',
		props: {
			profile: {
				type: Object,
				required: true,
			},
		},
		emits: ['close'],
	};
</script>

<style scoped>
	.profile-popup {
		background: linear-gradient(
			135deg,
			#0a2e0a 0%,
			#0d3a0d 50%,
			#0a2e0a 100%
		);
		border: 2px solid #1a5c1a;
		padding: 16px;
		min-width: 280px;
		max-width: 320px;
		font-family: 'Courier New', monospace;
		color: #4eff4e;
		position: relative;
		box-shadow:
			0 0 20px rgba(78, 255, 78, 0.15),
			inset 0 0 30px rgba(0, 0, 0, 0.3);
	}

	.close-btn {
		position: absolute;
		top: 8px;
		right: 10px;
		background: none;
		border: none;
		color: #4eff4e;
		font-size: 22px;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		opacity: 0.7;
	}

	.close-btn:hover {
		opacity: 1;
		text-shadow: 0 0 8px #4eff4e;
	}

	.popup-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 14px;
		padding-bottom: 12px;
		border-bottom: 1px solid rgba(78, 255, 78, 0.2);
	}

	.profile-photo {
		width: 64px;
		height: 64px;
		border-radius: 6px;
		border: 2px solid #1a5c1a;
		object-fit: cover;
		box-shadow: 0 0 10px rgba(78, 255, 78, 0.2);
	}

	.popup-info {
		flex: 1;
	}

	.username {
		font-size: 16px;
		font-weight: bold;
		color: #4eff4e;
		text-shadow: 0 0 6px rgba(78, 255, 78, 0.4);
		margin-bottom: 4px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.coords {
		font-size: 11px;
		color: #2a8a2a;
		letter-spacing: 0.5px;
	}

	.popup-stats {
		margin-bottom: 12px;
	}

	.stat-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px 0;
		font-size: 13px;
	}

	.stat-label {
		color: #2a8a2a;
		font-size: 11px;
		letter-spacing: 1px;
	}

	.stat-value {
		color: #4eff4e;
		font-weight: bold;
	}

	.confidence-pulse {
		animation: confidencePulse 1.5s ease-in-out infinite;
	}

	@keyframes confidencePulse {
		0%,
		100% {
			opacity: 1;
			text-shadow: 0 0 4px rgba(78, 255, 78, 0.3);
		}
		50% {
			opacity: 0.7;
			text-shadow: 0 0 12px rgba(78, 255, 78, 0.8);
		}
	}

	.popup-section {
		margin-bottom: 14px;
		padding: 10px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(78, 255, 78, 0.1);
	}

	.section-title {
		font-size: 10px;
		color: #2a8a2a;
		letter-spacing: 2px;
		margin-bottom: 6px;
		text-transform: uppercase;
	}

	.section-content {
		font-size: 12px;
		color: #3abf3a;
		line-height: 1.4;
	}

	.popup-actions {
		display: flex;
		gap: 8px;
	}

	.btn-track {
		flex: 1;
		padding: 8px 12px;
		background: rgba(78, 255, 78, 0.15);
		border: 1px solid #4eff4e;
		color: #4eff4e;
		font-family: 'Courier New', monospace;
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 2px;
		cursor: pointer;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.btn-track:hover {
		background: rgba(78, 255, 78, 0.25);
		box-shadow: 0 0 12px rgba(78, 255, 78, 0.3);
	}

	.btn-dismiss {
		flex: 1;
		padding: 8px 12px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid #1a5c1a;
		color: #2a8a2a;
		font-family: 'Courier New', monospace;
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 2px;
		cursor: pointer;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.btn-dismiss:hover {
		background: rgba(0, 0, 0, 0.5);
		color: #4eff4e;
		border-color: #4eff4e;
	}
</style>
