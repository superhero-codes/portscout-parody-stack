import { createSignal } from 'solid-js'
import './App.css'

const envelopes = [
  { id: 1, name: 'Soul Transfer Agreement', from: 'Satan McDevil', status: 'needs_signing', date: 'Jan 15, 2024', time: '2:34 PM' },
  { id: 2, name: 'NDA (Non-Disclosure of Alien Contact)', from: 'Area 51 HR', status: 'completed', date: 'Jan 14, 2024', time: '11:20 AM' },
  { id: 3, name: 'Terms of Service (Your Firstborn Edition)', from: 'Zuckerborg Industries', status: 'waiting', date: 'Jan 13, 2024', time: '9:05 AM' },
  { id: 4, name: 'Lease Agreement for Haunted Apartment', from: 'Ghostly Properties LLC', status: 'needs_signing', date: 'Jan 12, 2024', time: '4:47 PM' },
  { id: 5, name: 'Waiver of All Human Rights', from: 'Corporate Overlords Inc.', status: 'voided', date: 'Jan 11, 2024', time: '8:00 AM' },
  { id: 6, name: 'Permission to Exist on Company Premises', from: 'HR Bot 3000', status: 'completed', date: 'Jan 10, 2024', time: '3:15 PM' },
]

const sidebarItems = [
  { icon: '📥', label: 'Inbox', count: 47, active: true },
  { icon: '📤', label: 'Sent', count: 3, active: false },
  { icon: '✅', label: 'Completed', count: 2, active: false },
  { icon: '⚠️', label: 'Action Required', count: 99, active: false },
  { icon: '🗑️', label: 'Regrettable Decisions', count: 412, active: false },
]

function App() {
  const [activeTab, setActiveTab] = createSignal('agreements')
  const [showBanner, setShowBanner] = createSignal(true)

  return (
    <div class="app">
      {/* Top Header */}
      <header class="header">
        <div class="header-left">
          <div class="logo">
            <svg class="logo-icon" viewBox="0 0 24 24" width="28" height="28" fill="none">
              <rect x="2" y="3" width="20" height="18" rx="3" stroke="#4C00C2" stroke-width="2"/>
              <path d="M6 12l4 4 8-8" stroke="#4C00C2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="logo-text">DocuSwine</span>
          </div>
          <nav class="header-nav">
            <a href="#" class={`nav-tab ${activeTab() === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</a>
            <a href="#" class={`nav-tab ${activeTab() === 'agreements' ? 'active' : ''}`} onClick={() => setActiveTab('agreements')}>Agreements</a>
            <a href="#" class={`nav-tab ${activeTab() === 'templates' ? 'active' : ''}`} onClick={() => setActiveTab('templates')}>Templates</a>
            <a href="#" class={`nav-tab ${activeTab() === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>Reports</a>
            <a href="#" class={`nav-tab ${activeTab() === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>Admin</a>
          </nav>
        </div>
        <div class="header-right">
          <span class="trial-badge">∞ Days Left</span>
          <button class="view-plans-btn">View Plans (Don't)</button>
          <button class="icon-btn" aria-label="Settings">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Help">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="10" cy="10" r="8"/>
              <path d="M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5M10 14.5v.01"/>
            </svg>
          </button>
          <div class="user-avatar">🐷</div>
        </div>
      </header>

      {/* Get Started Bar */}
      <div class="get-started-bar">
        <div class="get-started-left">
          <span class="get-started-label">Get started</span>
          <div class="progress-track">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <a href="#" class="progress-link">0/4 actions completed</a>
        </div>
        <div class="get-started-right">
          <a href="#" class="whats-next">What's next?</a>
          <button class="send-doc-btn">Send a Document (Regret Later)</button>
        </div>
      </div>

      {/* Main Layout */}
      <div class="main-layout">
        {/* Sidebar */}
        <aside class="sidebar">
          <button class="start-now-btn">Start Now (No Going Back)</button>

          <div class="sidebar-section">
            <h4 class="sidebar-heading">
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7l7-4 7 4v8l-7 4-7-4z"/></svg>
              ENVELOPES
            </h4>
            {sidebarItems.map(item => (
              <a href="#" class={`sidebar-item ${item.active ? 'active' : ''}`}>
                <span class="sidebar-icon">{item.icon}</span>
                <span class="sidebar-label">{item.label}</span>
                {item.count > 0 && <span class="sidebar-count">{item.count}</span>}
              </a>
            ))}
            <a href="#" class="sidebar-show-more">Show More (If You Dare)</a>
          </div>

          <div class="sidebar-section">
            <a href="#" class="sidebar-item">
              <span class="sidebar-icon">🔒</span>
              <span class="sidebar-label">PowerForms™</span>
            </a>
          </div>

          <div class="sidebar-toggle">
            <div class="toggle-switch">
              <div class="toggle-knob"></div>
            </div>
            <span>New navigation</span>
          </div>
        </aside>

        {/* Main Content */}
        <main class="main-content">
          <div class="content-header">
            <h1>Inbox</h1>
            <div class="shared-access">
              <span class="shared-dot"></span>
              <span>Shared Access</span>
              <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor"><path d="M3 5l3 3 3-3"/></svg>
            </div>
          </div>

          {/* Notification Banner */}
          {showBanner() && (
            <div class="notification-banner">
              <button class="banner-close" onClick={() => setShowBanner(false)}>×</button>
              <h3>🐷 Shared access has been compromised</h3>
              <p>Your documents are now visible to everyone in the office, including the intern who prints everything. We're not sorry.</p>
              <button class="banner-btn" onClick={() => setShowBanner(false)}>Got It (I Don't)</button>
            </div>
          )}

          {/* Filters */}
          <div class="content-filters">
            <div class="search-input">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#999" stroke-width="2"><circle cx="9" cy="9" r="6"/><line x1="13" y1="13" x2="17" y2="17"/></svg>
              <input type="text" placeholder="Search Inbox and Folders (Good luck)" />
            </div>
            <div class="filter-group">
              <button class="filter-btn">
                Date: Last 6 months
                <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor"><path d="M3 5l3 3 3-3"/></svg>
              </button>
              <button class="filter-btn">
                Status
                <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor"><path d="M3 5l3 3 3-3"/></svg>
              </button>
              <a href="#" class="clear-link">Clear</a>
            </div>
          </div>

          {/* Envelope Table */}
          <div class="envelope-table">
            <div class="table-header">
              <div class="col-check"><input type="checkbox" /></div>
              <div class="col-name">Document</div>
              <div class="col-from">From</div>
              <div class="col-status">Status</div>
              <div class="col-date">Date</div>
              <div class="col-actions"></div>
            </div>
            {envelopes.map(env => (
              <div class="table-row">
                <div class="col-check"><input type="checkbox" /></div>
                <div class="col-name">
                  <svg class="doc-icon" viewBox="0 0 20 24" width="16" height="20" fill="none" stroke="#4C00C2" stroke-width="1.5">
                    <rect x="1" y="1" width="18" height="22" rx="2"/>
                    <line x1="5" y1="7" x2="15" y2="7"/>
                    <line x1="5" y1="11" x2="15" y2="11"/>
                    <line x1="5" y1="15" x2="11" y2="15"/>
                  </svg>
                  <span class="doc-name-text">{env.name}</span>
                </div>
                <div class="col-from">{env.from}</div>
                <div class="col-status">
                  <span class={`status-badge status-${env.status}`}>
                    {env.status === 'needs_signing' ? '⚡ Needs Signing' :
                     env.status === 'completed' ? '✅ Completed' :
                     env.status === 'waiting' ? '⏳ Waiting for Others' :
                     env.status === 'voided' ? '💀 Voided' : env.status}
                  </span>
                </div>
                <div class="col-date">
                  <span class="date-text">{env.date}</span>
                  <span class="time-text">{env.time}</span>
                </div>
                <div class="col-actions">
                  <button class="action-btn">⋯</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer class="footer">
        <div class="footer-left">
          <button class="lang-btn">
            English (Pig Latin)
            <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor"><path d="M3 5l3 3 3-3"/></svg>
          </button>
          <a href="#">Contact Us (We Won't Reply)</a>
          <a href="#">Terms of Abuse</a>
          <a href="#">Privacy (LOL)</a>
          <a href="#">Intellectual Property (Ours, Not Yours)</a>
          <a href="#">Trust (Just Kidding)</a>
        </div>
        <div class="footer-right">
          <span>Copyright © 2024 DocuSwine, Inc. No rights reserved.</span>
        </div>
      </footer>

      {/* PortScout Footer */}
      <div class="portscout-footer">
        <div class="portscout-footer-content">
          <span class="portscout-footer-text">
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
      </div>
    </div>
  )
}

export default App
