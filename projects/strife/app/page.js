import styles from './page.module.css';

const transactions = [
	{
		id: 'txn_1',
		amount: '$420.69',
		status: 'succeeded',
		customer: 'john@example.com',
		date: '2024-01-15',
	},
	{
		id: 'txn_2',
		amount: '$1,337.00',
		status: 'pending',
		customer: 'jane@example.com',
		date: '2024-01-14',
	},
	{
		id: 'txn_3',
		amount: '$99.99',
		status: 'failed',
		customer: 'mike@example.com',
		date: '2024-01-13',
	},
	{
		id: 'txn_4',
		amount: '$6.66',
		status: 'succeeded',
		customer: 'lucy@example.com',
		date: '2024-01-12',
	},
	{
		id: 'txn_5',
		amount: '$13.37',
		status: 'succeeded',
		customer: 'dave@example.com',
		date: '2024-01-11',
	},
];

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<span className={styles.logoIcon}>💳</span>
					<span className={styles.logoText}>Strife</span>
				</div>
				<nav className={styles.nav}>
					<span className={styles.tagline}>
						Payments, but with more drama
					</span>
				</nav>
			</header>

			<main className={styles.main}>
				<div className={styles.dashboardHeader}>
					<h1>Dashboard</h1>
					<p className={styles.subtitle}>
						Your payment overview (totally real data)
					</p>
				</div>

				<div className={styles.statsGrid}>
					<div className={styles.statCard}>
						<span className={styles.statLabel}>Total Revenue</span>
						<span className={styles.statValue}>$42,069.00</span>
						<span className={styles.statChange}>
							+6.9% from last month
						</span>
					</div>
					<div className={styles.statCard}>
						<span className={styles.statLabel}>
							Successful Payments
						</span>
						<span className={styles.statValue}>1,337</span>
						<span className={styles.statChange}>
							+42% from last month
						</span>
					</div>
					<div className={styles.statCard}>
						<span className={styles.statLabel}>
							Failed Payments
						</span>
						<span className={styles.statValue}>69</span>
						<span className={styles.statChange}>
							-13% from last month
						</span>
					</div>
					<div className={styles.statCard}>
						<span className={styles.statLabel}>Refunds</span>
						<span className={styles.statValue}>$1,337.00</span>
						<span className={styles.statChange}>
							Nobody asked for these
						</span>
					</div>
				</div>

				<div className={styles.transactionsSection}>
					<h2>Recent Transactions</h2>
					<div className={styles.table}>
						<div className={styles.tableHeader}>
							<span>Transaction ID</span>
							<span>Customer</span>
							<span>Amount</span>
							<span>Status</span>
							<span>Date</span>
						</div>
						{transactions.map((txn) => (
							<div
								key={txn.id}
								className={styles.tableRow}
							>
								<span className={styles.txnId}>{txn.id}</span>
								<span>{txn.customer}</span>
								<span className={styles.amount}>
									{txn.amount}
								</span>
								<span
									className={`${styles.status} ${styles[txn.status]}`}
								>
									{txn.status}
								</span>
								<span className={styles.date}>{txn.date}</span>
							</div>
						))}
					</div>
				</div>

				<div className={styles.apiSection}>
					<h2>API Keys</h2>
					<div className={styles.apiKeyCard}>
						<span className={styles.apiLabel}>Publishable Key</span>
						<code className={styles.apiKey}>
							pk_test_4eC39HqLyjWDarjtT1zdp7dc
						</code>
					</div>
					<div className={styles.apiKeyCard}>
						<span className={styles.apiLabel}>Secret Key</span>
						<code className={styles.apiKey}>
							sk_test_****************************
						</code>
						<span className={styles.hiddenWarning}>
							(We hid it for dramatic effect)
						</span>
					</div>
				</div>
			</main>

			<footer className={styles.portscoutFooter}>
				<div className={styles.portscoutFooterContent}>
					<span className={styles.portscoutFooterText}>
						Built with{' '}
						<a
							href="https://github.com/your-org/portscout-parody-stack"
							target="_blank"
							rel="noopener noreferrer"
						>
							PortScout Parody Stack
						</a>{' '}
						— created for testing{' '}
						<a
							href="https://github.com/your-org/portscout"
							target="_blank"
							rel="noopener noreferrer"
						>
							PortScout
						</a>
					</span>
				</div>
			</footer>
		</div>
	);
}
