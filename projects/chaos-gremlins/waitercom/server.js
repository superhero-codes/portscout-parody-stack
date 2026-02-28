const express = require('express');
const path = require('path');
const app = express();
const PORT = 5332;

const DELAY = 30000; // 30 seconds. The README doesn't mention this. 😈

const weatherData = {
	location: 'Localhost, Port ' + PORT,
	current: {
		temp: 72,
		condition: 'Partly Cloudy',
		humidity: 45,
		wind: '8 mph NW',
		feelsLike: 70,
	},
	forecast: [
		{
			day: 'Today',
			high: 75,
			low: 58,
			condition: '⛅ Partly Cloudy',
			rain: '10%',
		},
		{
			day: 'Tomorrow',
			high: 78,
			low: 60,
			condition: '☀️ Sunny',
			rain: '0%',
		},
		{
			day: 'Wednesday',
			high: 68,
			low: 55,
			condition: '🌧️ Rain',
			rain: '80%',
		},
		{
			day: 'Thursday',
			high: 65,
			low: 52,
			condition: '⛈️ Thunderstorms',
			rain: '90%',
		},
		{
			day: 'Friday',
			high: 72,
			low: 58,
			condition: '🌤️ Mostly Sunny',
			rain: '5%',
		},
	],
};

// The secret sauce: 30 second delay on EVERY response
app.use((req, res, next) => {
	console.log(
		`[Waiter.com:${PORT}] Request received for ${req.path}. Please wait... ⏳`,
	);
	setTimeout(() => {
		console.log(
			`[Waiter.com:${PORT}] ...30 seconds later, responding to ${req.path}`,
		);
		next();
	}, DELAY);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/weather', (req, res) => {
	res.json(weatherData);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`🌤️ Waiter.com running on port ${PORT}`);
	console.log(`🌤️ Visit http://localhost:${PORT} for your weather forecast`);
	console.log(`🌤️ Fast, reliable, accurate. (Two of these are lies.)`);
});
