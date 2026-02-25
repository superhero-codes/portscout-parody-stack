import { useState, useEffect } from 'react'
import './App.css'

const categories = [
  '🌽 Fresh Corn',
  '🍿 Popcorn',
  '🌾 Organic',
  '🥗 Corn Salad',
  '🌮 Corn Tacos',
  '🧈 Buttered',
  '🫕 Corn Chowder',
  '🥜 Cornbread',
  '🎬 Cornumentary',
]

const cornPuns = [
  { text: "This content is a-MAIZE-ing!", sub: "Over 69 million ears served daily" },
  { text: "Don't be so CORNY... actually, please do.", sub: "We're all about that kernel life" },
  { text: "Welcome to the cob web 🕸️🌽", sub: "Where every click is ear-resistible" },
  { text: "Shuck yeah! You found us.", sub: "The internet's most ear-otic corn content" },
  { text: "We're all ears! 👂🌽", sub: "Streaming fresh from the field since 2024" },
  { text: "Corn you believe this site exists?", sub: "Neither can we. But here we are." },
]

const trendingSearches = [
  '🔥 corn on the cob ASMR',
  '💦 freshly shucked',
  '🌽 thicc kernels',
  '🧈 extra buttery',
  '🔥 hot grilled corn',
  '💯 organic heirloom',
  '🍿 explosive popping',
  '🌾 barely legal corn maze',
]

const items = [
  {
    id: 1,
    title: 'BARELY LEGAL Corn Shucking — First Time!',
    views: '4.2M',
    rating: '98%',
    duration: '12:34',
    cover: '🌽',
    channel: 'CornStar69',
    description: 'Watch this innocent ear get completely shucked for the very first time...',
  },
  {
    id: 2,
    title: 'Sweet Baby Corn Gets Creamed 😳',
    views: '2.1M',
    rating: '95%',
    duration: '8:15',
    cover: '🌾',
    channel: 'CreamyCornQueen',
    description: 'The creamiest corn chowder recipe that will make you moan with pleasure.',
  },
  {
    id: 3,
    title: 'Corn on the Cob: Deep Throat Challenge',
    views: '1.8M',
    rating: '92%',
    duration: '15:42',
    cover: '🍿',
    channel: 'CobGobbler',
    description: 'Can you eat an entire cob in one go? These brave souls try...',
  },
  {
    id: 4,
    title: 'Hot & Steamy Corn Chowder — EXTRA THICK',
    views: '890K',
    rating: '89%',
    duration: '20:01',
    cover: '🥣',
    channel: 'ThiccChowder',
    description: 'This chowder is so thick you could stand a spoon in it. Absolutely filthy.',
  },
  {
    id: 5,
    title: 'Grilled Corn Gets POUNDED with Seasoning',
    views: '3.4M',
    rating: '97%',
    duration: '10:10',
    cover: '🔥',
    channel: 'GrillDaddy',
    description: 'Aggressive seasoning technique that will leave your corn begging for more.',
  },
  {
    id: 6,
    title: 'Lost in the Corn Maze — It Gets WILD',
    views: '567K',
    rating: '85%',
    duration: '25:33',
    cover: '🌿',
    channel: 'MazeRunner420',
    description: 'Things get out of hand when these friends enter a corn maze at night...',
  },
  {
    id: 7,
    title: 'Two Ears One Cup (of Butter)',
    views: '6.9M',
    rating: '99%',
    duration: '4:20',
    cover: '🧈',
    channel: 'ButterFingers',
    description: 'The most buttery corn experience you will ever witness. Not for the faint of heart.',
  },
  {
    id: 8,
    title: 'Amateur Farmer Shows Off Massive Cob',
    views: '1.2M',
    rating: '91%',
    duration: '7:45',
    cover: '👨‍🌾',
    channel: 'BigCobEnergy',
    description: 'This farmer grew the biggest cob in the county. The neighbors are jealous.',
  },
  {
    id: 9,
    title: 'Popcorn Explosion Compilation — SO LOUD',
    views: '5.5M',
    rating: '94%',
    duration: '11:11',
    cover: '🍿',
    channel: 'PopOffKing',
    description: 'Kernels popping off left and right. Turn your volume UP.',
  },
  {
    id: 10,
    title: 'Naughty Cornbread Recipe — Moist AF',
    views: '780K',
    rating: '88%',
    duration: '18:30',
    cover: '🍞',
    channel: 'MoistMaker',
    description: 'The moistest cornbread you have ever seen. Dripping with honey butter.',
  },
]

// Real corn-related YouTube videos
const cornVideos = [
  {
    id: 'v1',
    youtubeId: '_caMQpiwiaU',
    title: 'It\'s Corn! — A Big Lump with Knobs',
    meta: '50M+ views • Schmoyoho / Recess Therapy',
    pun: 'It has the juice! I can tell you all about it! 🌽💦',
  },
  {
    id: 'v2',
    youtubeId: '1VbZE6YhjKk',
    title: 'How Corn Took Over The World',
    meta: '4.2M views • Vox',
    pun: 'A-maize-ing documentary about our favorite grain 🎬',
  },
  {
    id: 'v3',
    youtubeId: 'bGYs4KS_djg',
    title: 'Mexican Street Corn (Elote) — The Best Recipe',
    meta: '5.1M views • Joshua Weissman',
    pun: 'This elote will make you say "oh my cob!" 🌮',
  },
  {
    id: 'v4',
    youtubeId: 'ADlGkXAz1D0',
    title: 'How It\'s Made — Popcorn',
    meta: '6.1M views • How It\'s Made',
    pun: 'Kernel knowledge that will blow your mind 🍿💥',
  },
  {
    id: 'v5',
    youtubeId: 'hvoagWSOw_Y',
    title: 'World\'s Largest Corn Maze',
    meta: '1.5M views • Dude Perfect',
    pun: 'Getting lost has never been so a-maize-ing 🌾',
  },
  {
    id: 'v6',
    youtubeId: 'svEuG_ekNT0',
    title: 'Why Corn Is In Everything We Eat',
    meta: '3.3M views • Business Insider',
    pun: 'You can\'t escape the cob. It\'s everywhere. 👀',
  },
]

function App() {
  const [slowData, setSlowData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentPun, setCurrentPun] = useState(0)
  const [showWarning, setShowWarning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPun(prev => (prev + 1) % cornPuns.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchSlowEndpoint = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5314/api/slow')
      const data = await res.json()
      setSlowData(data)
    } catch {
      setSlowData({ error: 'Backend not running. Start it with: node backend/server.js' })
    }
    setLoading(false)
  }

  return (
    <div className="app">
      {/* Age Verification Warning Overlay */}
      {showWarning && (
        <div className="warning-overlay">
          <div className="warning-box">
            <div className="warning-logo">
              <span className="warning-logo-corn">Corn</span>
              <span className="warning-logo-hub">hub</span>
            </div>

            <h1 className="warning-heading">This is a corn website</h1>

            <button className="warning-notice-btn">Notice to Farmers</button>

            <p className="warning-text">
              This website contains age-restricted materials including shucking, buttering, and explicit
              depictions of corn-on-corn activity. By entering, you affirm that you are at least 18 ears of
              age or the age of majority in the cornfield you are accessing the website from and
              you consent to viewing extremely corny content.
            </p>
            <a href="#" className="warning-link">Notice to Corn Enforcement</a>

            <div className="warning-buttons">
              <button className="warning-btn warning-btn-enter" onClick={() => setShowWarning(false)}>
                I am 18 ears or older - Enter
              </button>
              <button className="warning-btn warning-btn-exit" onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Corn'}>
                I am under 18 ears - Exit
              </button>
            </div>

            <p className="warning-parental">
              Our <a href="#" className="warning-link-inline">parental corntrols page</a> explains how you can easily
              block access to this site.
            </p>
            <a href="#" className="warning-link">Terms of Shervice</a>

            <div className="warning-footer">
              <span>© CornHub.com, 2026</span>
              <span className="warning-rta">🌽CA®</span>
            </div>
          </div>
        </div>
      )}

      <header className="header">
        <div className="logo">
          <span className="logo-text"><span className="logo-corn">Corn</span><span className="logo-hub">hub</span></span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search 69,420 corn videos..." />
          <button className="search-btn">🔍</button>
        </div>
        <nav className="nav">
          <span className="tagline">The world's #1 corn content platform — 100% organic</span>
        </nav>
      </header>

      <main className="main">
        {/* Rotating Corn Pun Banner */}
        <div className="corn-pun-banner">
          <div className="pun-text">{cornPuns[currentPun].text}</div>
          <div className="pun-sub">{cornPuns[currentPun].sub}</div>
        </div>

        {/* Trending Searches */}
        <div className="trending-bar">
          <span className="trending-label">🔥 Trending:</span>
          {trendingSearches.map(item => (
            <span key={item} className="trending-item">{item}</span>
          ))}
        </div>

        {/* Categories */}
        <div className="categories">
          {categories.map(cat => (
            <button key={cat} className="category-btn">{cat}</button>
          ))}
        </div>

        {/* Content Cards */}
        <h2 className="section-title">🌽 Recommended For You</h2>
        <div className="content-grid">
          {items.map(item => (
            <div key={item.id} className="content-card">
              <div className="card-cover">
                <span className="card-emoji">{item.cover}</span>
                <span className="card-duration">{item.duration}</span>
              </div>
              <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-channel">{item.channel}</div>
                <div className="card-meta">
                  <span className="card-views">{item.views} views</span>
                  <span className="card-rating">👍 {item.rating}</span>
                </div>
                <div className="card-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Corn Videos */}
        <div className="video-section">
          <h2 className="section-title">🎬 Real Corn Cinema — Premium Content</h2>
          <div className="video-grid">
            {cornVideos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <div className="video-title">{video.title}</div>
                  <div className="video-meta">{video.meta}</div>
                  <div className="video-pun">{video.pun}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slow Endpoint Demo */}
        <div className="slow-demo">
          <h2>🐌 Slow Endpoint Demo (Shucking takes time...)</h2>
          <p>This button calls the backend's slow endpoint (2-3 second delay). Good things come to those who wait — just like growing corn! 🌱</p>
          <button className="slow-btn" onClick={fetchSlowEndpoint} disabled={loading}>
            {loading ? '⏳ Shucking in progress...' : '🌽 Shuck Some Data'}
          </button>
          {slowData && (
            <pre className="slow-result">{JSON.stringify(slowData, null, 2)}</pre>
          )}
        </div>
      </main>

      <footer className="portscout-footer">
        <div className="portscout-footer-content">
          <span className="portscout-footer-text">
            Built with{' '}
            <a href="https://github.com/superhero-codes/portscout-parody-stack" target="_blank" rel="noopener noreferrer">
              PortScout Parody Stack
            </a>
            {' '}— created for testing{' '}
            <a href="https://portscout.app" target="_blank" rel="noopener noreferrer">
              PortScout
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
