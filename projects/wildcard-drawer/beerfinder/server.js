const express = require('express');
const path = require('path');
const app = express();
const PORT = 5325;

const breweries = [
	{
		id: 1,
		name: 'Hoppy Days Brewing Co.',
		distance: '0.3 km',
		rating: 4.8,
		beers: 24,
		style: 'IPA Specialists',
		lat: 59.913,
		lng: 10.752,
		emoji: '🍺',
	},
	{
		id: 2,
		name: 'The Frothy Mustache',
		distance: '0.7 km',
		rating: 4.5,
		beers: 18,
		style: 'Belgian & Sours',
		lat: 59.915,
		lng: 10.748,
		emoji: '🍻',
	},
	{
		id: 3,
		name: 'Barrel & Grain',
		distance: '1.2 km',
		rating: 4.9,
		beers: 32,
		style: 'Barrel-Aged Everything',
		lat: 59.92,
		lng: 10.755,
		emoji: '🪵',
	},
	{
		id: 4,
		name: 'Yeast Mode Activated',
		distance: '1.8 km',
		rating: 4.3,
		beers: 15,
		style: 'Experimental Brews',
		lat: 59.908,
		lng: 10.76,
		emoji: '🧪',
	},
	{
		id: 5,
		name: 'Stout of This World',
		distance: '2.4 km',
		rating: 4.7,
		beers: 20,
		style: 'Stouts & Porters',
		lat: 59.925,
		lng: 10.74,
		emoji: '🌑',
	},
	{
		id: 6,
		name: 'Ale Caesar',
		distance: '3.1 km',
		rating: 4.6,
		beers: 28,
		style: 'Classic Ales',
		lat: 59.93,
		lng: 10.735,
		emoji: '🏛️',
	},
	{
		id: 7,
		name: 'Brew-tiful Day',
		distance: '4.0 km',
		rating: 4.4,
		beers: 12,
		style: 'Lagers & Pilsners',
		lat: 59.905,
		lng: 10.77,
		emoji: '☀️',
	},
	{
		id: 8,
		name: 'The Pint-ernet',
		distance: '5.2 km',
		rating: 4.2,
		beers: 40,
		style: 'Everything on Tap',
		lat: 59.935,
		lng: 10.725,
		emoji: '🌐',
	},
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/breweries', (req, res) => {
	const { lat, lng, radius } = req.query;
	console.log(
		`[BeerFinder:${PORT}] Search: lat=${lat || 'any'}, lng=${lng || 'any'}, radius=${radius || 'all'}`,
	);

	// "Geo-based" filtering (just returns all, sorted by distance)
	const results = [...breweries].sort(
		(a, b) => parseFloat(a.distance) - parseFloat(b.distance),
	);
	res.json({ results, total: results.length, query: { lat, lng, radius } });
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`🍺 BeerFinder running on port ${PORT}`);
	console.log(`🍺 Visit http://localhost:${PORT} to find beer near you`);
	console.log(`🍺 (Non-standard port because beer doesn't follow rules)`);
});
