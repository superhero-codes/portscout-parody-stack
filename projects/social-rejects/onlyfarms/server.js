const express = require('express');
const path = require('path');
const app = express();
const PORT = 5320;

app.use(express.static(path.join(__dirname, 'public')));

const farmContent = [
	{
		id: 1,
		farmer: 'Old MacDonald',
		title: 'Exclusive: My Tractor Collection 🚜',
		likes: 4200,
		tier: 'Premium Hay',
		avatar: '👨‍🌾',
		preview: "You won't BELIEVE what I found in the barn today...",
		locked: false,
	},
	{
		id: 2,
		farmer: 'Farmer Jane',
		title: 'Behind the Barn Door 🐄',
		likes: 3100,
		tier: 'Golden Grain',
		avatar: '👩‍🌾',
		preview: 'The cows are looking extra photogenic today...',
		locked: true,
	},
	{
		id: 3,
		farmer: 'Hay Bale Harry',
		title: 'Sunset Over the Cornfield 🌽',
		likes: 5600,
		tier: 'Premium Hay',
		avatar: '🧑‍🌾',
		preview: "Golden hour hits different when you're surrounded by corn...",
		locked: false,
	},
	{
		id: 4,
		farmer: 'Daisy Duke',
		title: 'Fresh Eggs This Morning 🥚',
		likes: 2800,
		tier: 'Free Range',
		avatar: '👩‍🌾',
		preview: 'The chickens outdid themselves. 47 eggs. New record.',
		locked: true,
	},
	{
		id: 5,
		farmer: 'Barnyard Bob',
		title: 'Pig Spa Day 🐷',
		likes: 7200,
		tier: 'Premium Hay',
		avatar: '👨‍🌾',
		preview: "Gave the pigs a mud bath. They've never been happier.",
		locked: false,
	},
	{
		id: 6,
		farmer: 'Silo Sam',
		title: 'The Perfect Haystack 🌾',
		likes: 1900,
		tier: 'Golden Grain',
		avatar: '🧑‍🌾',
		preview: 'It took 6 hours but this haystack is a masterpiece.',
		locked: true,
	},
];

app.get('/api/feed', (req, res) => {
	console.log(
		`[SERVER:${PORT}] Feed requested at ${new Date().toISOString()}`,
	);
	res.json({ content: farmContent, total: farmContent.length });
});

app.get('/api/subscribe', (req, res) => {
	console.log(`[SERVER:${PORT}] New subscriber!`);
	res.json({
		message:
			'Welcome to OnlyFarms Premium! 🌾 Your card has been charged $9.99/month for exclusive farm content.',
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`[SERVER] 🌾 OnlyFarms Main Server running on port ${PORT}`);
	console.log(
		`[SERVER] Visit http://localhost:${PORT} for premium farm content`,
	);
});
