export const fileNames = [
	'vacation_photos.zip',
	'project_backup.tar.gz',
	'quarterly_report.pdf',
	'wedding_video.mov',
	'podcast_episode_42.mp3',
	'database_dump.sql.gz',
	'design_assets.psd',
	'client_presentation.pptx',
	'server_logs_2024.txt',
	'machine_learning_model.h5',
	'game_assets_v3.unity',
	'drone_footage_4k.mp4',
	'genome_sequence.fasta',
	'3d_render_final_FINAL_v2.blend',
	'tax_documents_2024.xlsx',
];

export const fileExtensions = [
	'zip',
	'tar.gz',
	'pdf',
	'mov',
	'mp3',
	'mp4',
	'psd',
	'pptx',
	'sql',
	'h5',
];

export const dashboardFiles = [
	{
		name: 'Accounting Docs',
		size: '100mb',
		compression: '200%',
		status: 'DOWNLOADING',
		type: 'folder',
	},
	{
		name: 'Pied Piper Docs',
		size: '2.4gb',
		compression: '520%',
		status: 'COMPLETE',
		type: 'folder',
	},
	{
		name: 'Camera Uploads',
		size: '890mb',
		compression: '340%',
		status: 'SYNCING',
		type: 'folder',
	},
	{
		name: 'Q4 Financials.xlsx',
		size: '45mb',
		compression: '180%',
		status: 'COMPLETE',
		type: 'xlsx',
	},
	{
		name: 'Product Demo.mov',
		size: '1.2gb',
		compression: '610%',
		status: 'COMPLETE',
		type: 'mov',
	},
	{
		name: 'Team Photos',
		size: '340mb',
		compression: '290%',
		status: 'UPLOADING',
		type: 'folder',
	},
	{
		name: 'API Documentation.pdf',
		size: '12mb',
		compression: '150%',
		status: 'COMPLETE',
		type: 'pdf',
	},
	{
		name: 'Backup_March_2024.tar.gz',
		size: '4.7gb',
		compression: '480%',
		status: 'COMPLETE',
		type: 'tar.gz',
	},
];

export const userNames = [
	'Jaclyn Hauser',
	'Richard Hendricks',
	'Bertram Gilfoyle',
	'Dinesh Chugtai',
	'Jared Dunn',
	'Monica Hall',
	'Nelson Bighetti',
];

export const ehrlichRants = [
	'This is the future of decentralized compression!',
	"Do you even understand what we're doing here?",
	'I am the captain of this ship! The CAPTAIN!',
	'This is my incubator. MY incubator.',
	"We're making the world a better place through scalable, fault-tolerant compression algorithms.",
	"I've been known to fuck myself.",
	'Aviato. You know Aviato?',
	"I'm the founder of Aviato.",
	'You just brought piss to a shit fight!',
	"I'm not going to stand here and be insulted by a man who got rich off of putting ads on the internet.",
	'This guy fucks! Am I right?',
	"Consider the elephant... massive, powerful, yet gentle. That's me. I'm the elephant in the room.",
	"I don't want to live in a world where someone else makes the world a better place better than we do.",
	"What are you, a Jehovah's Witness for the internet?",
];

export const newsTickerItems = [
	'CODE RESOURCES',
	'TECHCRUNCH',
	'MASHABLE',
	'GIZMODO',
	'TECH NEWS',
	'WIRED',
	'THE VERGE',
];

export const blogArticles = [
	{
		title: 'The Ultimate Guide to File Compression: Everything You Need to Know',
		author: '@hendricks',
		time: '1 hour ago',
	},
	{
		title: 'Why Middle-Out Compression Changes Everything',
		author: '@gilfoyle',
		time: '3 hours ago',
	},
	{
		title: 'Decentralized Internet: The Next Frontier',
		author: '@dinesh',
		time: '5 hours ago',
	},
];

export function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max, decimals = 1) {
	return (Math.random() * (max - min) + min).toFixed(decimals);
}

export function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function generateStats() {
	return {
		globalPeers: randomBetween(1200, 9999),
		utilization: randomBetween(5, 42),
		totalStored: randomFloat(0.4, 9.8, 1),
	};
}

export function generateCompressionResult() {
	const fileName = randomFromArray(fileNames);
	const originalSize = randomBetween(50, 2000);
	const compressionTarget = randomBetween(65, 95);
	const ratio = randomFloat(2.0, 8.0, 1);
	const weissmanScore = randomFloat(2.0, 5.9, 1);
	const sizeUnit = originalSize > 999 ? 'GB' : 'MB';
	const displaySize =
		originalSize > 999 ? (originalSize / 1000).toFixed(1) : originalSize;

	return {
		fileName,
		originalSize: `${displaySize} ${sizeUnit}`,
		compressionTarget,
		ratio: `${ratio}x`,
		weissmanScore,
	};
}
