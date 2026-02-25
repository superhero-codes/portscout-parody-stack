import './App.css'

const listings = [
  { id: 1, title: 'Cozy Cardboard Box', location: 'San Francisco, CA', price: '$2,500/night', rating: '4.9', cover: '📦', host: 'Jeff' },
  { id: 2, title: 'Luxury Dumpster', location: 'New York, NY', price: '$1,800/night', rating: '4.7', cover: '🗑️', host: 'Karen' },
  { id: 3, title: 'Charming Parking Spot', location: 'Los Angeles, CA', price: '$900/night', rating: '4.5', cover: '🅿️', host: 'Chad' },
  { id: 4, title: 'Rustic Tree House (No Tree)', location: 'Portland, OR', price: '$350/night', rating: '4.8', cover: '🌳', host: 'Sage' },
  { id: 5, title: 'Entire Closet', location: 'Austin, TX', price: '$600/night', rating: '4.6', cover: '🚪', host: 'Bryce' },
  { id: 6, title: 'Shared Tent (With Raccoons)', location: 'Denver, CO', price: '$150/night', rating: '3.2', cover: '⛺', host: 'Rocky' },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">AirBeanBean</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Where are you going? (Anywhere but here)" />
          <button className="search-btn">🔍</button>
        </div>
        <nav className="nav">
          <span className="tagline">Stay somewhere. Anywhere. Please.</span>
        </nav>
      </header>

      <main className="main">
        <div className="filters">
          <button className="filter active">☕ Coffee Shops</button>
          <button className="filter">🏠 Tiny Homes</button>
          <button className="filter">🏖️ Beachfront</button>
          <button className="filter">🏔️ Mountain</button>
          <button className="filter">🏕️ Camping</button>
          <button className="filter">🏰 Castles</button>
        </div>

        <div className="listings-grid">
          {listings.map(listing => (
            <div key={listing.id} className="listing-card">
              <div className="listing-cover">
                <span className="listing-emoji">{listing.cover}</span>
                <button className="favorite-btn">♡</button>
              </div>
              <div className="listing-info">
                <div className="listing-header">
                  <span className="listing-location">{listing.location}</span>
                  <span className="listing-rating">⭐ {listing.rating}</span>
                </div>
                <h3 className="listing-title">{listing.title}</h3>
                <p className="listing-host">Hosted by {listing.host}</p>
                <p className="listing-price"><strong>{listing.price}</strong></p>
              </div>
            </div>
          ))}
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
