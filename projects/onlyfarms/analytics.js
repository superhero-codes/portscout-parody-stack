const express = require('express');
const app = express();
const PORT = 5322;

// Fake analytics process
const metrics = {
	pageViews: 0,
	subscriptions: 0,
	hayBalesViewed: 0,
	tractorClicks: 0,
	barnDoorOpens: 0,
	eggsSold: 0,
};

function generateFakeMetrics() {
	metrics.pageViews += Math.floor(Math.random() * 50);
	metrics.subscriptions += Math.floor(Math.random() * 3);
	metrics.hayBalesViewed += Math.floor(Math.random() * 100);
	metrics.tractorClicks += Math.floor(Math.random() * 20);
	metrics.barnDoorOpens += Math.floor(Math.random() * 10);
	metrics.eggsSold += Math.floor(Math.random() * 200);

	console.log(
		`[ANALYTICS:${PORT}] 📊 Page views: ${metrics.pageViews} | Subs: ${metrics.subscriptions} | Hay bales: ${metrics.hayBalesViewed} | Eggs sold: ${metrics.eggsSold}`,
	);
}

setInterval(generateFakeMetrics, 5000);

app.get('/api/analytics', (req, res) => {
	console.log(
		`[ANALYTICS:${PORT}] Dashboard accessed at ${new Date().toISOString()}`,
	);
	res.json({
		service: 'OnlyFarms Analytics Engine',
		port: PORT,
		metrics,
		insight: 'Hay bale content is trending 📈',
		recommendation: 'Post more tractor content for 340% engagement boost',
	});
});

app.listen(PORT, () => {
	console.log(
		`[ANALYTICS] 📊 OnlyFarms Analytics Engine running on port ${PORT}`,
	);
	console.log(`[ANALYTICS] Generating fake metrics every 5 seconds...`);
});
