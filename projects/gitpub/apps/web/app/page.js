import styles from "./page.module.css";

const repos = [
  { name: 'fix-everything', desc: 'A repo that fixes all bugs (spoiler: it doesnt)', stars: 42069, lang: 'TypeScript', langColor: '#3178c6' },
  { name: 'hello-world-enterprise', desc: 'Hello World but with 47 microservices', stars: 1337, lang: 'Java', langColor: '#b07219' },
  { name: 'my-first-website', desc: 'Made in 2003, still in production', stars: 666, lang: 'HTML', langColor: '#e34c26' },
  { name: 'todo-app-v847', desc: 'The 847th attempt at a todo app', stars: 420, lang: 'JavaScript', langColor: '#f1e05a' },
  { name: 'node_modules', desc: 'Heavier than a black hole', stars: 9999, lang: 'JavaScript', langColor: '#f1e05a' },
];

const activity = [
  { user: 'devguru42', action: 'starred', repo: 'fix-everything', time: '2 hours ago' },
  { user: 'codemonkey', action: 'opened issue', repo: 'hello-world-enterprise', time: '5 hours ago' },
  { user: 'bugfixer9000', action: 'closed PR', repo: 'todo-app-v847', time: '1 day ago' },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🍺</span>
          <span className={styles.logoText}>GitPub</span>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search repos (good luck finding anything)" />
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Pull Requests</a>
          <a href="#" className={styles.navLink}>Issues</a>
          <a href="#" className={styles.navLink}>Marketplace</a>
        </nav>
      </header>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <div className={styles.profile}>
            <div className={styles.avatar}>👨‍💻</div>
            <h2>devguru42</h2>
            <p className={styles.bio}>Full-stack developer. Part-time bug creator.</p>
            <div className={styles.stats}>
              <span>📦 42 repos</span>
              <span>👥 1337 followers</span>
              <span>⭐ 69 stars</span>
            </div>
          </div>
        </aside>

        <div className={styles.content}>
          <section className={styles.repoSection}>
            <h2>Popular Repositories</h2>
            <div className={styles.repoGrid}>
              {repos.map((repo) => (
                <div key={repo.name} className={styles.repoCard}>
                  <div className={styles.repoHeader}>
                    <span className={styles.repoName}>{repo.name}</span>
                    <span className={styles.repoVisibility}>Public</span>
                  </div>
                  <p className={styles.repoDesc}>{repo.desc}</p>
                  <div className={styles.repoMeta}>
                    <span className={styles.repoLang}>
                      <span className={styles.langDot} style={{ background: repo.langColor }}></span>
                      {repo.lang}
                    </span>
                    <span className={styles.repoStars}>⭐ {repo.stars.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.activitySection}>
            <h2>Recent Activity</h2>
            {activity.map((item, i) => (
              <div key={i} className={styles.activityItem}>
                <span className={styles.activityUser}>{item.user}</span>
                <span className={styles.activityAction}>{item.action}</span>
                <span className={styles.activityRepo}>{item.repo}</span>
                <span className={styles.activityTime}>{item.time}</span>
              </div>
            ))}
          </section>
        </div>
      </main>

      <footer className={styles.portscoutFooter}>
        <div className={styles.portscoutFooterContent}>
          <span className={styles.portscoutFooterText}>
            Built with{" "}
            <a href="https://github.com/your-org/portscout-parody-stack" target="_blank" rel="noopener noreferrer">
              PortScout Parody Stack
            </a>
            {" "}— created for testing{" "}
            <a href="https://github.com/your-org/portscout" target="_blank" rel="noopener noreferrer">
              PortScout
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
