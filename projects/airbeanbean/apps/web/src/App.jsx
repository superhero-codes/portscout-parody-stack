import './App.css'

const sections = [
  {
    title: 'Questionable dwellings in Oppdal',
    subtitle: null,
    arrow: true,
    listings: [
      { id: 1, title: 'Haunted Shed', dates: 'Apr 10 – 12', hostType: 'Suspicious host', price: '6,377 kr NOK for 2 nights', rating: '5.0', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop' },
      { id: 2, title: 'Damp Basement (Character!)', dates: 'Apr 10 – 12', hostType: 'Reluctant host', price: '12,988 kr NOK for 2 nights', rating: '4.83', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop' },
      { id: 3, title: 'Apartment (No Walls)', dates: 'Apr 17 – 19', hostType: 'Invisible host', price: '24,706 kr NOK for 2 nights', rating: '4.96', badge: null, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop' },
      { id: 4, title: 'Cabin (Bears Included)', dates: 'Jan 15 – 17', hostType: 'Bear host', price: '3,059 kr NOK for 2 nights', rating: '4.83', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&h=400&fit=crop' },
      { id: 5, title: 'Loft Above a Kebab Shop', dates: 'Mar 20 – 22', hostType: 'Greasy host', price: '1,930 kr NOK for 2 nights', rating: '4.95', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=400&fit=crop' },
      { id: 6, title: 'Chalet (Roof Optional)', dates: 'May 15 – 17', hostType: 'Business host', price: '42,353 kr NOK for 2 nights', rating: '4.87', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=400&fit=crop' },
      { id: 7, title: 'Igloo (Summer Only)', dates: 'Jul 7 – 19', hostType: 'Melting host', price: '53,530 kr NOK for 2 nights', rating: '5.0', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=400&h=400&fit=crop' },
    ]
  },
  {
    title: 'Overpriced hotels in Paris',
    subtitle: 'A collection of places that charge extra for breathing',
    arrow: true,
    listings: [
      { id: 8, title: 'Villa "We Don\'t Have Rats" by Patrick', dates: null, hostType: null, price: '15,980 kr NOK for 2 nights', rating: '5.0', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop' },
      { id: 9, title: 'Hôtel Eiffel (Can\'t See Eiffel)', dates: null, hostType: null, price: '25,394 kr NOK for 2 nights', rating: '4.85', badge: null, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop' },
      { id: 10, title: 'Elysee "Breakfast Not Included" Hotel', dates: null, hostType: null, price: '36,261 kr NOK for 2 nights', rating: '5.0', badge: null, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop' },
      { id: 11, title: 'Monsieur Mold\'s Boutique Hotel', dates: null, hostType: null, price: '5,373 kr NOK for 2 nights', rating: '4.64', badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop' },
      { id: 12, title: 'Léon\'s "Definitely Legal" Hôtel', dates: null, hostType: null, price: '55,525 kr NOK for 2 nights', rating: '4.68', badge: null, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=400&fit=crop' },
      { id: 13, title: 'Hotel Gérando (WiFi: 50€/hr)', dates: null, hostType: null, price: '4,157 kr NOK for 2 nights', rating: '4.75', badge: null, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop' },
      { id: 14, title: 'Hotel "The Photo Was From 2003"', dates: null, hostType: null, price: '75,509 kr NOK for 2 nights', rating: '4.89', badge: null, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop' },
    ]
  },
  {
    title: 'Desperate landlords in Trondheim this weekend',
    subtitle: null,
    arrow: true,
    listings: [
      { id: 15, title: 'Apartment (Neighbor Plays Drums)', dates: null, hostType: null, price: null, rating: null, badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop' },
      { id: 16, title: 'Room (Shared With Cat Colony)', dates: null, hostType: null, price: null, rating: null, badge: null, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop' },
      { id: 17, title: 'Room (Haunted, But Cozy)', dates: null, hostType: null, price: null, rating: null, badge: null, image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop' },
      { id: 18, title: 'Apartment (Smells Like Adventure)', dates: null, hostType: null, price: null, rating: null, badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=400&fit=crop' },
      { id: 19, title: 'Condo (Previous Guest Still There)', dates: null, hostType: null, price: null, rating: null, badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop' },
      { id: 20, title: 'Apartment (Door Doesn\'t Lock)', dates: null, hostType: null, price: null, rating: null, badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop' },
      { id: 21, title: 'Apartment (Toilet Is a Bucket)', dates: null, hostType: null, price: null, rating: null, badge: 'Guest favorite', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop' },
    ]
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FF385C">
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.001l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.02-.267.005C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 5.127-11.011 7.084-14.842l.533-1.025C12.537 1.963 13.992 1 16 1z"/>
            </svg>
            <span className="logo-text">airbeanbean</span>
          </div>

          <nav className="header-nav">
            <a href="#" className="nav-tab active">
              <span className="nav-tab-icon">🏚️</span>
              Hovels
            </a>
            <a href="#" className="nav-tab">
              <span className="nav-tab-icon">😰</span>
              <span className="nav-new-badge">MEH</span>
              Experiences
            </a>
            <a href="#" className="nav-tab">
              <span className="nav-tab-icon">🫠</span>
              <span className="nav-new-badge">LOL</span>
              "Services"
            </a>
          </nav>

          <div className="header-right">
            <a href="#" className="become-host">Become a victim</a>
            <button className="globe-btn" aria-label="Language">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.36 11.5c-.39.12-.77.2-1.13.26h-.03c-.1.01-.2.02-.31.02a5.3 5.3 0 0 1-1.41-.27c-.04.01-.06.02-.09.03a6.76 6.76 0 0 0 1.38 1.52c.05.04.1.09.16.13.04-.04.09-.08.14-.13a6.9 6.9 0 0 0 1.29-1.56zM8 1.75a6.25 6.25 0 1 0 0 12.5A6.25 6.25 0 0 0 8 1.75z"/>
              </svg>
            </button>
            <button className="menu-btn" aria-label="Menu">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                <path d="M2 16h28M2 24h28M2 8h28" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <div className="search-field search-where">
              <label>Where</label>
              <span>Anywhere you can afford (so nowhere)</span>
            </div>
            <div className="search-divider" />
            <div className="search-field search-when">
              <label>When</label>
              <span>Before eviction</span>
            </div>
            <div className="search-divider" />
            <div className="search-field search-who">
              <label>Who</label>
              <span>Just you. Always just you.</span>
            </div>
            <button className="search-btn" aria-label="Search">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="white" strokeWidth="4">
                <circle cx="13" cy="13" r="10" />
                <line x1="20" y1="20" x2="29" y2="29" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        {sections.map((section, sIdx) => (
          <section key={sIdx} className="listing-section">
            <div className="section-header">
              <div>
                <h2 className="section-title">
                  {section.title}
                  {section.arrow && <span className="section-arrow">→</span>}
                </h2>
                {section.subtitle && <p className="section-subtitle">{section.subtitle}</p>}
              </div>
              <div className="scroll-buttons">
                <button className="scroll-btn scroll-left" aria-label="Scroll left">‹</button>
                <button className="scroll-btn scroll-right" aria-label="Scroll right">›</button>
              </div>
            </div>

            <div className="listings-row">
              {section.listings.map(listing => (
                <div key={listing.id} className="listing-card">
                  <div className="listing-cover">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="listing-image"
                      loading="lazy"
                    />
                    {listing.badge && (
                      <span className="guest-favorite-badge">{listing.badge}</span>
                    )}
                    <button className="favorite-btn" aria-label="Save to wishlist">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth="2">
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="listing-info">
                    <div className="listing-header-row">
                      <span className="listing-title">{listing.title}</span>
                      {listing.rating && (
                        <span className="listing-rating">★ {listing.rating}</span>
                      )}
                    </div>
                    {listing.dates && (
                      <span className="listing-meta">
                        {listing.dates}
                        {listing.hostType && ` · ${listing.hostType}`}
                      </span>
                    )}
                    {listing.price && (
                      <span className="listing-price">{listing.price}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
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
