<script>
  // SpotiPie - Spotify Parody
  const playlists = [
    { id: 1, name: 'Coding Beats', tracks: 42, cover: '🎧' },
    { id: 2, name: 'Debug Mode', tracks: 17, cover: '🐛' },
    { id: 3, name: 'Focus Flow', tracks: 33, cover: '🧘' },
    { id: 4, name: 'Error 404: Music Not Found', tracks: 0, cover: '❓' },
  ];

  const recentlyPlayed = [
    { id: 1, title: 'undefined.mp3', artist: 'NaN Artist', album: 'Null Pointer', duration: '3:14' },
    { id: 2, title: 'async/await', artist: 'Promise Chain', album: 'Callback Hell', duration: '2:71' },
    { id: 3, title: 'Git Push --force', artist: 'Oopsie Daisy', album: 'Production Down', duration: '4:20' },
    { id: 4, title: 'It Works on My Machine', artist: 'DevOps Denial', album: 'Works For Me', duration: '∞' },
  ];

  const nowPlaying = recentlyPlayed[0];
</script>

<svelte:head>
  <title>SpotiPie - Music for Coders</title>
</svelte:head>

<div class="app">
  <aside class="sidebar">
    <div class="logo">
      <span class="logo-icon">🥧</span>
      <span class="logo-text">SpotiPie</span>
    </div>
    
    <nav class="nav">
      <a href="#" class="nav-item active">🏠 Home</a>
      <a href="#" class="nav-item">🔍 Search</a>
      <a href="#" class="nav-item">📚 Your Library</a>
    </nav>

    <div class="playlists">
      <h3>Playlists</h3>
      {#each playlists as playlist}
        <div class="playlist-item">
          <span class="playlist-cover">{playlist.cover}</span>
          <div class="playlist-info">
            <span class="playlist-name">{playlist.name}</span>
            <span class="playlist-tracks">{playlist.tracks} tracks</span>
          </div>
        </div>
      {/each}
    </div>
  </aside>

  <main class="main">
    <header class="header">
      <div class="header-nav">
        <button class="nav-btn">←</button>
        <button class="nav-btn">→</button>
      </div>
      <div class="user-menu">
        <span class="username">👤 CodeDJ</span>
      </div>
    </header>

    <section class="content">
      <h1>Good evening, Developer</h1>
      
      <div class="quick-picks">
        {#each playlists.slice(0, 4) as playlist}
          <div class="quick-pick">
            <span class="quick-cover">{playlist.cover}</span>
            <span class="quick-name">{playlist.name}</span>
          </div>
        {/each}
      </div>

      <h2>Recently Played</h2>
      <div class="track-list">
        {#each recentlyPlayed as track, i}
          <div class="track-row">
            <span class="track-num">{i + 1}</span>
            <div class="track-info">
              <span class="track-title">{track.title}</span>
              <span class="track-artist">{track.artist}</span>
            </div>
            <span class="track-album">{track.album}</span>
            <span class="track-duration">{track.duration}</span>
          </div>
        {/each}
      </div>
    </section>
  </main>

  <footer class="player">
    <div class="player-track">
      <span class="player-cover">🎵</span>
      <div class="player-info">
        <span class="player-title">{nowPlaying.title}</span>
        <span class="player-artist">{nowPlaying.artist}</span>
      </div>
    </div>
    <div class="player-controls">
      <button class="control-btn">⏮</button>
      <button class="control-btn play">▶</button>
      <button class="control-btn">⏭</button>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div class="player-volume">
      <span>🔊</span>
      <div class="volume-bar"></div>
    </div>
  </footer>

  <footer class="portscout-footer">
    <div class="portscout-footer-content">
      <span class="portscout-footer-text">
        Built with
        <a href="https://github.com/your-org/portscout-parody-stack" target="_blank" rel="noopener noreferrer">
          PortScout Parody Stack
        </a>
        — created for testing
        <a href="https://github.com/your-org/portscout" target="_blank" rel="noopener noreferrer">
          PortScout
        </a>
      </span>
    </div>
  </footer>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    min-height: 100vh;
    background: #000;
    color: #fff;
    font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 1fr auto auto;
    padding-bottom: 100px;
  }

  .sidebar {
    background: #000;
    padding: 24px 12px;
    grid-row: 1 / 3;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    margin-bottom: 24px;
  }

  .logo-icon {
    font-size: 32px;
  }

  .logo-text {
    font-size: 24px;
    font-weight: 700;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }

  .nav-item {
    color: #b3b3b3;
    text-decoration: none;
    padding: 12px;
    border-radius: 4px;
    font-weight: 600;
  }

  .nav-item.active {
    color: #fff;
    background: #282828;
  }

  .playlists h3 {
    color: #b3b3b3;
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 12px;
    margin-bottom: 12px;
  }

  .playlist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }

  .playlist-item:hover {
    background: #282828;
  }

  .playlist-cover {
    font-size: 24px;
    width: 48px;
    height: 48px;
    background: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  .playlist-info {
    display: flex;
    flex-direction: column;
  }

  .playlist-name {
    font-size: 14px;
    font-weight: 500;
  }

  .playlist-tracks {
    font-size: 12px;
    color: #b3b3b3;
  }

  .main {
    background: linear-gradient(180deg, #1e3a5f 0%, #121212 30%);
    overflow-y: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: transparent;
  }

  .header-nav {
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .user-menu {
    background: rgba(0, 0, 0, 0.7);
    padding: 4px 12px;
    border-radius: 20px;
  }

  .username {
    font-size: 14px;
    font-weight: 600;
  }

  .content {
    padding: 0 32px 32px;
  }

  .content h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .content h2 {
    font-size: 24px;
    margin: 32px 0 16px;
  }

  .quick-picks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .quick-pick {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }

  .quick-pick:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .quick-cover {
    font-size: 32px;
    width: 80px;
    height: 80px;
    background: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quick-name {
    padding: 0 16px;
    font-weight: 600;
  }

  .track-list {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 16px;
  }

  .track-row {
    display: grid;
    grid-template-columns: 40px 1fr 1fr 100px;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
  }

  .track-row:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .track-num {
    color: #b3b3b3;
  }

  .track-info {
    display: flex;
    flex-direction: column;
  }

  .track-title {
    font-weight: 500;
  }

  .track-artist {
    font-size: 13px;
    color: #b3b3b3;
  }

  .track-album {
    color: #b3b3b3;
    font-size: 14px;
  }

  .track-duration {
    color: #b3b3b3;
    text-align: right;
  }

  .player {
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    height: 72px;
    background: #181818;
    border-top: 1px solid #282828;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    z-index: 100;
  }

  .player-track {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 30%;
  }

  .player-cover {
    font-size: 32px;
  }

  .player-info {
    display: flex;
    flex-direction: column;
  }

  .player-title {
    font-size: 14px;
  }

  .player-artist {
    font-size: 12px;
    color: #b3b3b3;
  }

  .player-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 40%;
    justify-content: center;
  }

  .control-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .control-btn.play {
    width: 32px;
    height: 32px;
    background: #fff;
    color: #000;
    border-radius: 50%;
  }

  .progress {
    width: 100%;
    max-width: 400px;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
  }

  .progress-bar {
    width: 30%;
    height: 100%;
    background: #1db954;
    border-radius: 2px;
  }

  .player-volume {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 30%;
    justify-content: flex-end;
  }

  .volume-bar {
    width: 100px;
    height: 4px;
    background: #4d4d4d;
    border-radius: 2px;
  }

  /* PortScout Footer */
  .portscout-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
  }

  .portscout-footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .portscout-footer-text {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.02em;
  }

  .portscout-footer-text a {
    color: #a78bfa;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .portscout-footer-text a:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }
</style>
