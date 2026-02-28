// AirBeanBean API - Fastify Server
import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });
const PORT = 5313;

await fastify.register(cors);

const listings = [
	{
		id: 1,
		title: 'Cozy Cardboard Box',
		location: 'San Francisco, CA',
		price: 2500,
		rating: 4.9,
	},
	{
		id: 2,
		title: 'Luxury Dumpster',
		location: 'New York, NY',
		price: 1800,
		rating: 4.7,
	},
	{
		id: 3,
		title: 'Charming Parking Spot',
		location: 'Los Angeles, CA',
		price: 900,
		rating: 4.5,
	},
	{
		id: 4,
		title: 'Rustic Tree House (No Tree)',
		location: 'Portland, OR',
		price: 350,
		rating: 4.8,
	},
];

fastify.get('/', async () => {
	return {
		name: 'AirBeanBean API',
		version: '1.0.0',
		message: '☕ Find your next overpriced stay',
	};
});

fastify.get('/api/listings', async () => {
	return { success: true, listings };
});

fastify.get('/api/listings/:id', async (request, reply) => {
	const listing = listings.find((l) => l.id === parseInt(request.params.id));
	if (listing) {
		return { success: true, listing };
	}
	reply.code(404);
	return {
		success: false,
		error: 'Listing not found (probably booked by a bot)',
	};
});

try {
	await fastify.listen({ port: PORT, host: '0.0.0.0' });
	console.log(`☕ AirBeanBean API running on http://localhost:${PORT}`);
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
