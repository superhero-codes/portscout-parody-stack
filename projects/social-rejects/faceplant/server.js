const express = require('express');
const path = require('path');

// 💀 50% chance of crashing on startup
if (Math.random() < 0.5) {
	console.error('');
	console.error('💀 ═══════════════════════════════════════════════════');
	console.error('💀  FACEPLANT CRASHED ON STARTUP');
	console.error('💀  Error: FACE_PLANT_EXCEPTION');
	console.error('💀  "The app fell on its face. Again."');
	console.error('💀');
	console.error('💀  This is intentional. Try running it again.');
	console.error('💀  50% chance of success. Like a coin flip.');
	console.error("💀  Unlike Facebook, we're honest about our failures.");
	console.error('💀 ═══════════════════════════════════════════════════');
	console.error('');
	process.exit(1);
}

const app = express();
const PORT = 5325;

app.use(express.static(path.join(__dirname, 'public')));

const posts = [
	{
		id: 1,
		user: 'Mark Zuckerbird',
		avatar: '🤖',
		time: '2 hours ago',
		content:
			'Just changed the company name again. This time it\'s "Metaphysical". Thoughts?',
		likes: 3,
		comments: 47000,
		shares: 2,
	},
	{
		id: 2,
		user: 'Your Mom',
		avatar: '👩',
		time: '5 hours ago',
		content:
			'Happy birthday sweetie!! 🎂🎉 I know your birthday was 3 months ago but I just figured out how to post. Love, Mom',
		likes: 1,
		comments: 0,
		shares: 0,
	},
	{
		id: 3,
		user: 'That Guy From High School',
		avatar: '🧔',
		time: '1 day ago',
		content:
			'Just started my own crypto/NFT/AI/blockchain company. DM me for a once-in-a-lifetime opportunity! 🚀💰 #hustle #grindset',
		likes: 0,
		comments: 2,
		shares: 0,
	},
	{
		id: 4,
		user: 'Farmville Bot',
		avatar: '🌾',
		time: '3 days ago',
		content:
			"Your crops are dying! Come back to Farmville! We miss you! It's been 14 years!",
		likes: 0,
		comments: 0,
		shares: 0,
	},
	{
		id: 5,
		user: 'Privacy Settings',
		avatar: '🔒',
		time: '1 week ago',
		content:
			"We've updated our privacy policy. Again. You won't read it. Again. That's fine. We're counting on it.",
		likes: 0,
		comments: 0,
		shares: 1000000,
	},
	{
		id: 6,
		user: 'Minion Memes Page',
		avatar: '🍌',
		time: '2 weeks ago',
		content:
			'SHARE if you LOVE coffee ☕ IGNORE if you hate puppies 🐶 (Why are these the only two options?)',
		likes: 847000,
		comments: 12000,
		shares: 340000,
	},
];

app.get('/api/feed', (req, res) => {
	console.log(`[Faceplant:${PORT}] Feed loaded (we didn't crash this time!)`);
	res.json(posts);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log('');
	console.log('✅ ═══════════════════════════════════════════════════');
	console.log(`✅  FACEPLANT IS RUNNING ON PORT ${PORT}`);
	console.log("✅  Against all odds, it didn't crash this time!");
	console.log(`✅  Visit http://localhost:${PORT}`);
	console.log('✅ ═══════════════════════════════════════════════════');
	console.log('');
});
