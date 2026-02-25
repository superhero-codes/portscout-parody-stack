import { useState, useEffect } from 'react'
import './App.css'

const categories = ['🌽 Fresh Corn', '🍿 Popcorn', '🌾 Organic', '🥗 Corn Salad', '🌮 Corn Tacos', '🧈 Buttered']

const items = [
  { id: 1, title: 'Premium Golden Corn', views: '4.2M', rating: '98%', duration: '12 min', cover: '🌽' },
  { id: 2, title: 'Sweet Baby Corn Collection', views: '2.1M', rating: '95%', duration: '8 min', cover: '🌾' },
  { id: 3, title: 'Corn on the Cob Masterclass', views: '1.8M', rating: '92%', duration: '15 min', cover: '🍿' },
  { id: 4, title: 'Creamy Corn Chowder Tutorial', views: '890K', rating: '89%', duration: '20 min', cover: '🥣' },
  { id: 5, title: 'Grilled Corn Perfection', views: '3.4M', rating: '97%', duration: '10 min', cover: '🔥' },
  { id: 6, title: 'Corn Maze Adventures', views: '567K', rating: '85%', duration: '25 min', cover: '🌿' },
]

function App() {
  const [slowData, setSlowData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchSlowEndpoint = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5314/api/slow')
      const data = await res.json()
      setSlowData(data)
    } catch (err) {
      setSlowData({ error: 'Backend not running. Start it with: node backend/server.js' })
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🌽</span>
          <span className="logo-text">CornHub</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for corn content..." />
          <button className="search-btn">🔍</button>
        </div>
        <nav className="nav">
          <span className="tagline">The world's #1 corn content platform</span>
        </nav>
      </header>

      <main className="main">
        <div className="categories">
          {categories.map(cat => (
            <button key={cat} className="category-btn">{cat}</button>
          ))}
        </div>

        <div className="content-grid">
          {items.map(item => (
            <div key={item.id} className="content-card">
              <div className="card-cover">
                <span className="card-emoji">{item.cover}</span>
                <span className="card-duration">{item.duration}</span>
              </div>
              <div className="card-info">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-meta">
                  <span className="card-views">{item.views} views</span>
                  <span className="card-rating">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slow-demo">
          <h2>🐌 Slow Endpoint Demo</h2>
          <p>This button calls the backend's slow endpoint (2-3 second delay):</p>
          <button className="slow-btn" onClick={fetchSlowEndpoint} disabled={loading}>
            {loading ? '⏳ Loading...' : '🌽 Fetch Slow Data'}
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
            <a href="https://github.com/your-org/portscout-parody-stack" target="_blank" rel="noopener noreferrer">
              PortScout Parody Stack
            </a>
            {' '}— created for testing{' '}
            <a href="https://github.com/your-org/portscout" target="_blank" rel="noopener noreferrer">
              PortScout
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
