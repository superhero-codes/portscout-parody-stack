<script>
  let currentIndex = 0;
  let swipeDirection = '';
  let matches = [];

  const profiles = [
    { name: 'React', age: 11, bio: 'I have commitment issues (state management). Looking for someone who can handle my hooks. 🪝', emoji: '⚛️', distance: '0.5 km away', tags: ['JavaScript', 'Components', 'Virtual DOM'] },
    { name: 'Vue', age: 10, bio: 'They say I\'m approachable and easy to get along with. I just want someone reactive. 💚', emoji: '💚', distance: '1.2 km away', tags: ['JavaScript', 'Progressive', 'Templates'] },
    { name: 'Angular', age: 14, bio: 'I\'m opinionated and I know what I want. Must love TypeScript. Enterprise only. 🏢', emoji: '🅰️', distance: '3.0 km away', tags: ['TypeScript', 'Enterprise', 'RxJS'] },
    { name: 'Svelte', age: 5, bio: 'No virtual DOM baggage. What you see is what you get. Compiled and ready to mingle. ✨', emoji: '🔥', distance: '0.1 km away', tags: ['Compiled', 'Lightweight', 'Reactive'] },
    { name: 'jQuery', age: 18, bio: 'I know I\'m old school but I still got it. $(\'heart\').animate({beat: true}). 📜', emoji: '📜', distance: '15 km away', tags: ['Legacy', 'DOM', 'Plugins'] },
    { name: 'Next.js', age: 7, bio: 'Full-stack and ready to render. Server-side on the streets, client-side in the sheets. 🖤', emoji: '▲', distance: '2.1 km away', tags: ['React', 'SSR', 'Full-stack'] },
    { name: 'HTMX', age: 3, bio: 'I believe in simplicity. No build step, no drama. Just HTML attributes and vibes. 🌊', emoji: '🌊', distance: '0.3 km away', tags: ['HTML', 'No Build', 'Hypermedia'] },
    { name: 'PHP', age: 29, bio: 'Everyone says I should retire but I run 77% of the web. Respect your elders. 🐘', emoji: '🐘', distance: '8.0 km away', tags: ['Server-side', 'WordPress', 'Veteran'] },
    { name: 'Rust', age: 9, bio: 'I\'m safe, fast, and I never forget to free memory. Looking for fearless concurrency. 🦀', emoji: '🦀', distance: '5.0 km away', tags: ['Systems', 'Memory Safe', 'Fast'] },
    { name: 'COBOL', age: 65, bio: 'Still running your bank. Still single. Will outlive us all. 🏦', emoji: '🏦', distance: '100 km away', tags: ['Mainframe', 'Banking', 'Eternal'] },
  ];

  function swipe(direction) {
    swipeDirection = direction;
    if (direction === 'right') {
      matches = [...matches, profiles[currentIndex]];
    }
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % profiles.length;
      swipeDirection = '';
    }, 300);
  }

  $: profile = profiles[currentIndex];
</script>

<main>
  <div class="app-container">
    <header>
      <div class="logo">🔥 finder</div>
      <div class="match-count">{matches.length} matches</div>
    </header>

    <div class="card-container">
      <div class="card {swipeDirection === 'left' ? 'swipe-left' : ''} {swipeDirection === 'right' ? 'swipe-right' : ''}">
        <div class="card-emoji">{profile.emoji}</div>
        <div class="card-info">
          <h2>{profile.name}, <span class="age">{profile.age}</span></h2>
          <p class="distance">📍 {profile.distance}</p>
          <p class="bio">{profile.bio}</p>
          <div class="tags">
            {#each profile.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-nope" on:click={() => swipe('left')}>✕</button>
      <button class="btn-super" on:click={() => swipe('right')}>⭐</button>
      <button class="btn-like" on:click={() => swipe('right')}>❤️</button>
    </div>

    {#if matches.length > 0}
      <div class="matches-bar">
        <h3>Your Matches</h3>
        <div class="matches-list">
          {#each matches as match}
            <div class="match-bubble">{match.emoji}</div>
          {/each}
        </div>
      </div>
    {/if}

    <div class="footer-attr">
      Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack">PortScout Parody Stack</a>
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #fd267a, #ff6036);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app-container {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 20px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 800;
    color: white;
    letter-spacing: -0.02em;
  }

  .match-count {
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  .card-container {
    perspective: 1000px;
    margin: 20px 0;
  }

  .card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, opacity 0.3s ease;
    min-height: 420px;
    display: flex;
    flex-direction: column;
  }

  .card.swipe-left {
    transform: translateX(-120%) rotate(-15deg);
    opacity: 0;
  }

  .card.swipe-right {
    transform: translateX(120%) rotate(15deg);
    opacity: 0;
  }

  .card-emoji {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    background: linear-gradient(135deg, #f8f8f8, #e8e8e8);
  }

  .card-info {
    padding: 24px;
    flex: 1;
  }

  .card-info h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 4px;
  }

  .age {
    font-weight: 400;
    color: #666;
  }

  .distance {
    font-size: 14px;
    color: #888;
    margin: 0 0 12px;
  }

  .bio {
    font-size: 15px;
    color: #444;
    line-height: 1.5;
    margin: 0 0 16px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    padding: 4px 12px;
    background: #f0f0f0;
    border-radius: 20px;
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
  }

  .actions button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .actions button:hover {
    transform: scale(1.1);
  }

  .btn-nope {
    background: white;
    color: #fd267a;
    font-size: 1.8rem !important;
    font-weight: 300;
  }

  .btn-super {
    background: white;
    color: #17c0eb;
    width: 48px !important;
    height: 48px !important;
    margin-top: 8px;
  }

  .btn-like {
    background: white;
    color: #22c55e;
  }

  .matches-bar {
    background: rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 16px;
    margin-top: 12px;
  }

  .matches-bar h3 {
    color: white;
    font-size: 14px;
    margin: 0 0 10px;
  }

  .matches-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .match-bubble {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .footer-attr {
    text-align: center;
    padding: 20px;
    color: rgba(255,255,255,0.6);
    font-size: 12px;
  }

  .footer-attr a {
    color: white;
    text-decoration: none;
  }
</style>
