export const UNSPLASH_IMAGES = [
	'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1502767089025-6572583495f9?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face',
	'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
];

export const USERNAMES = [
	'Mochalina786',
	'SunnyDaze99',
	'BreezyBella',
	'NightOwl_22',
	'StarGazer101',
	'LunaRose_x',
	'VelvetSky88',
	'CrystalWave',
	'MistyMorning7',
	'DaisyChain_3',
	'EmberGlow_44',
	'CosmicDust_7',
	'WillowBreeze',
	'AuroraLite99',
	'PeachFuzz_21',
];

export const RECENT_ACTIVITIES = [
	'Thermal signature detected near coffee shop',
	'Movement pattern consistent with jogging',
	'Stationary heat source — possible sunbathing',
	'Rapid thermal fluctuation detected',
	'Signature matches outdoor dining pattern',
	'Heat bloom consistent with post-workout state',
	'Thermal drift suggests walking pace',
	'Elevated surface temperature — direct sunlight',
	'Intermittent signal — possible shade/sun cycling',
	'Strong thermal return — open area detection',
];

/**
 * Generate random profiles near a given location
 */
export function generateProfiles(centerLat, centerLng) {
	const count = Math.floor(Math.random() * 3) + 1; // 1-3 profiles
	const shuffledImages = [...UNSPLASH_IMAGES].sort(() => Math.random() - 0.5);
	const shuffledNames = [...USERNAMES].sort(() => Math.random() - 0.5);
	const shuffledActivities = [...RECENT_ACTIVITIES].sort(
		() => Math.random() - 0.5,
	);

	const profiles = [];

	for (let i = 0; i < count; i++) {
		const latOffset =
			(Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
		const lngOffset =
			(Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
		const lat = centerLat + latOffset;
		const lng = centerLng + lngOffset;

		profiles.push({
			id: i,
			username: shuffledNames[i],
			image: shuffledImages[i],
			lat,
			lng,
			confidence: Math.floor(Math.random() * 27) + 72, // 72-98
			minutesAgo: Math.floor(Math.random() * 15) + 1, // 1-15
			coordsLabel: `${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`,
			recentActivity: shuffledActivities[i],
		});
	}

	return profiles;
}
