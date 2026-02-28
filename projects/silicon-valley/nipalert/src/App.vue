<template>
	<div class="app-root">
		<!-- Loading Screen -->
		<LoadingScreen
			v-if="loading"
			@done="loading = false"
		/>

		<!-- Main App -->
		<div
			v-show="!loading"
			class="main-app"
		>
			<!-- Scan line overlay -->
			<div class="scanlines-main"></div>

			<!-- Header -->
			<header class="app-header">
				<div class="header-top">
					<div class="header-left">
						<div class="header-logo">
							<div class="mini-radar">
								<div class="mini-circle mini-circle-l"></div>
								<div class="mini-circle mini-circle-r"></div>
							</div>
							<span class="header-logo-text"
								>NIP<span class="header-a">A</span>LERT</span
							>
						</div>
					</div>
					<div class="header-center">
						<span class="live-scan">LIVE SCAN MODE</span>
					</div>
					<div class="header-right">
						<button class="calibration-btn">CALIBRATION</button>
					</div>
				</div>
				<div class="header-sub">
					<span class="thermal-gain">Thermal Gain: Optimal</span>
				</div>
			</header>

			<!-- Map Container -->
			<div class="map-wrapper">
				<div
					id="map"
					ref="mapContainer"
				></div>

				<!-- Radar overlay on map -->
				<div
					class="radar-overlay"
					v-if="userLocation"
				>
					<div class="radar-ring radar-ring-1"></div>
					<div class="radar-ring radar-ring-2"></div>
					<div class="radar-ring radar-ring-3"></div>
					<div class="radar-sweep-map"></div>
				</div>
			</div>

			<!-- Profile Popup Overlay -->
			<div
				v-if="selectedProfile"
				class="popup-overlay"
				@click.self="selectedProfile = null"
			>
				<ProfilePopup
					:profile="selectedProfile"
					@close="selectedProfile = null"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import L from 'leaflet';
	import LoadingScreen from './components/LoadingScreen.vue';
	import ProfilePopup from './components/ProfilePopup.vue';
	import { generateProfiles } from './data/mockData.js';

	// Fix Leaflet default icon issue with bundlers
	delete L.Icon.Default.prototype._getIconUrl;
	L.Icon.Default.mergeOptions({
		iconRetinaUrl:
			'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
		iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
		shadowUrl:
			'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
	});

	export default {
		name: 'App',
		components: {
			LoadingScreen,
			ProfilePopup,
		},
		data() {
			return {
				loading: true,
				map: null,
				userLocation: null,
				profiles: [],
				selectedProfile: null,
				markers: [],
			};
		},
		watch: {
			loading(newVal) {
				if (!newVal) {
					this.$nextTick(() => {
						this.initMap();
					});
				}
			},
		},
		methods: {
			initMap() {
				// Get user location
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						(pos) => {
							this.userLocation = {
								lat: pos.coords.latitude,
								lng: pos.coords.longitude,
							};
							this.setupMap();
						},
						() => {
							// Fallback to Oslo
							this.userLocation = { lat: 59.9139, lng: 10.7522 };
							this.setupMap();
						},
						{ timeout: 5000 },
					);
				} else {
					this.userLocation = { lat: 59.9139, lng: 10.7522 };
					this.setupMap();
				}
			},

			setupMap() {
				const { lat, lng } = this.userLocation;

				this.map = L.map(this.$refs.mapContainer, {
					center: [lat, lng],
					zoom: 14,
					zoomControl: false,
				});

				L.tileLayer(
					'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
					{
						attribution:
							'&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
						subdomains: 'abcd',
						maxZoom: 19,
					},
				).addTo(this.map);

				// Add user location marker
				const userIcon = L.divIcon({
					className: 'user-marker',
					html: '<div class="user-marker-dot"><div class="user-marker-pulse"></div></div>',
					iconSize: [20, 20],
					iconAnchor: [10, 10],
				});

				L.marker([lat, lng], { icon: userIcon }).addTo(this.map);

				// Generate and add profile markers
				this.profiles = generateProfiles(lat, lng);
				this.addProfileMarkers();
			},

			addProfileMarkers() {
				this.profiles.forEach((profile) => {
					const icon = L.divIcon({
						className: 'profile-marker',
						html: `
            <div class="marker-container">
              <div class="marker-ping"></div>
              <img src="${profile.image}" class="marker-avatar" alt="${profile.username}" />
              <div class="marker-label">${profile.confidence}%</div>
            </div>
          `,
						iconSize: [50, 65],
						iconAnchor: [25, 65],
					});

					const marker = L.marker([profile.lat, profile.lng], {
						icon,
					})
						.addTo(this.map)
						.on('click', () => {
							this.selectedProfile = profile;
						});

					this.markers.push(marker);
				});
			},
		},
	};
</script>

<style scoped>
	.app-root {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #020a02;
	}

	.main-app {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	/* Scan lines on main app */
	.scanlines-main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 3px,
			rgba(0, 255, 0, 0.015) 3px,
			rgba(0, 255, 0, 0.015) 6px
		);
		pointer-events: none;
		z-index: 1000;
	}

	/* Header */
	.app-header {
		background: linear-gradient(180deg, #0a2e0a 0%, #071f07 100%);
		border-bottom: 2px solid #1a5c1a;
		padding: 0;
		z-index: 100;
		flex-shrink: 0;
	}

	.header-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 16px;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.header-logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.mini-radar {
		position: relative;
		width: 28px;
		height: 20px;
	}

	.mini-circle {
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 1.5px solid rgba(78, 255, 78, 0.5);
		top: 2px;
	}

	.mini-circle-l {
		left: 0;
	}

	.mini-circle-r {
		right: 0;
	}

	.header-logo-text {
		font-family: 'Arial Black', 'Impact', sans-serif;
		font-size: 18px;
		font-weight: 900;
		color: #4eff4e;
		letter-spacing: 2px;
		text-shadow: 0 0 8px rgba(78, 255, 78, 0.4);
	}

	.header-a {
		color: #7fff7f;
	}

	.header-center {
		flex: 1;
		text-align: center;
	}

	.live-scan {
		font-family: 'Courier New', monospace;
		font-size: 14px;
		font-weight: bold;
		color: #4eff4e;
		letter-spacing: 3px;
		text-transform: uppercase;
		text-shadow: 0 0 10px rgba(78, 255, 78, 0.5);
		animation: livePulse 2s ease-in-out infinite;
	}

	@keyframes livePulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.6;
		}
	}

	.header-right {
		display: flex;
		align-items: center;
	}

	.calibration-btn {
		font-family: 'Courier New', monospace;
		font-size: 10px;
		font-weight: bold;
		color: #4eff4e;
		background: transparent;
		border: 1px solid #1a5c1a;
		padding: 5px 10px;
		letter-spacing: 1px;
		cursor: pointer;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.calibration-btn:hover {
		border-color: #4eff4e;
		box-shadow: 0 0 8px rgba(78, 255, 78, 0.3);
	}

	.header-sub {
		padding: 4px 16px 8px;
		border-top: 1px solid rgba(78, 255, 78, 0.1);
	}

	.thermal-gain {
		font-family: 'Courier New', monospace;
		font-size: 11px;
		color: #2a8a2a;
		letter-spacing: 1px;
	}

	/* Map */
	.map-wrapper {
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	#map {
		width: 100%;
		height: 100%;
	}

	/* Radar overlay on map */
	.radar-overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		pointer-events: none;
		z-index: 500;
	}

	.radar-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		border: 1px solid rgba(78, 255, 78, 0.15);
	}

	.radar-ring-1 {
		width: 100px;
		height: 100px;
	}

	.radar-ring-2 {
		width: 200px;
		height: 200px;
	}

	.radar-ring-3 {
		width: 300px;
		height: 300px;
	}

	.radar-sweep-map {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 150px;
		height: 150px;
		transform-origin: 0 0;
		background: conic-gradient(
			from 0deg,
			transparent 0deg,
			rgba(78, 255, 78, 0.12) 0deg,
			rgba(78, 255, 78, 0.02) 50deg,
			transparent 50deg
		);
		animation: radarSweepMap 4s linear infinite;
		border-radius: 0 150px 0 0;
	}

	@keyframes radarSweepMap {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Popup overlay */
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
	}
</style>
