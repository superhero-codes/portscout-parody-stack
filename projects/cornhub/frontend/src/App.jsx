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
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=640&h=360&fit=crop',
    channel: 'CornStar69',
    description: 'Watch this innocent ear get completely shucked for the very first time...',
  },
  {
    id: 2,
    title: 'Sweet Baby Corn Gets Creamed 😳',
    views: '2.1M',
    rating: '95%',
    duration: '8:15',
    image: 'https://images.unsplash.com/photo-1601284702796-a27ffd3eff3c?w=640&h=360&fit=crop',
    channel: 'CreamyCornQueen',
    description: 'The creamiest corn chowder recipe that will make you moan with pleasure.',
  },
  {
    id: 3,
    title: 'Corn on the Cob: Deep Throat Challenge',
    views: '1.8M',
    rating: '92%',
    duration: '15:42',
    image: 'https://images.unsplash.com/photo-1629570583322-73b0481961a2?w=640&h=360&fit=crop',
    channel: 'CobGobbler',
    description: 'Can you eat an entire cob in one go? These brave souls try...',
  },
  {
    id: 4,
    title: 'Hot & Steamy Corn Chowder — EXTRA THICK',
    views: '890K',
    rating: '89%',
    duration: '20:01',
    image: 'https://images.unsplash.com/photo-1531171000775-75f0213ca8a0?w=640&h=360&fit=crop',
    channel: 'ThiccChowder',
    description: 'This chowder is so thick you could stand a spoon in it. Absolutely filthy.',
  },
  {
    id: 5,
    title: 'Grilled Corn Gets POUNDED with Seasoning',
    views: '3.4M',
    rating: '97%',
    duration: '10:10',
    image: 'https://images.unsplash.com/photo-1708077810069-0e082d9558dd?w=640&h=360&fit=crop',
    channel: 'GrillDaddy',
    description: 'Aggressive seasoning technique that will leave your corn begging for more.',
  },
  {
    id: 6,
    title: 'Lost in the Corn Maze — It Gets WILD',
    views: '567K',
    rating: '85%',
    duration: '25:33',
    image: 'https://images.unsplash.com/photo-1548365329-6adbd5e89128?w=640&h=360&fit=crop',
    channel: 'MazeRunner420',
    description: 'Things get out of hand when these friends enter a corn maze at night...',
  },
  {
    id: 7,
    title: 'Two Ears One Cup (of Butter)',
    views: '6.9M',
    rating: '99%',
    duration: '4:20',
    image: 'https://images.unsplash.com/photo-1649251037566-6881b4956615?w=640&h=360&fit=crop',
    channel: 'ButterFingers',
    description: 'The most buttery corn experience you will ever witness. Not for the faint of heart.',
  },
  {
    id: 8,
    title: 'Amateur Farmer Shows Off Massive Cob',
    views: '1.2M',
    rating: '91%',
    duration: '7:45',
    image: 'https://images.unsplash.com/photo-1651667343153-6dc318e27e41?w=640&h=360&fit=crop',
    channel: 'BigCobEnergy',
    description: 'This farmer grew the biggest cob in the county. The neighbors are jealous.',
  },
  {
    id: 9,
    title: 'Popcorn Explosion Compilation — SO LOUD',
    views: '5.5M',
    rating: '94%',
    duration: '11:11',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=640&h=360&fit=crop',
    channel: 'PopOffKing',
    description: 'Kernels popping off left and right. Turn your volume UP.',
  },
  {
    id: 10,
    title: 'Naughty Cornbread Recipe — Moist AF',
    views: '780K',
    rating: '88%',
    duration: '18:30',
    image: 'https://images.unsplash.com/photo-1697779142534-04681116133a?w=640&h=360&fit=crop',
    channel: 'MoistMaker',
    description: 'The moistest cornbread you have ever seen. Dripping with honey butter.',
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
                <img className="card-image" src={item.image} alt={item.title} loading="lazy" />
                <div className="card-play-btn">▶</div>
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
