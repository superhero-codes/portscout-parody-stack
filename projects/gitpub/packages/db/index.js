// @gitpub/db - Mock database exports
// In a real setup, this would export the Prisma client
export const mockDb = {
	users: [
		{
			id: 1,
			username: 'devguru42',
			email: 'dev@guru.com',
			bio: 'Full-stack developer',
		},
	],
	repos: [
		{
			id: 1,
			name: 'fix-everything',
			stars: 42069,
			language: 'TypeScript',
			userId: 1,
		},
	],
};
