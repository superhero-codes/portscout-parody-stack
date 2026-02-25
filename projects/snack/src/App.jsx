import { useState } from 'react'
import './App.css'

const channels = [
  { id: 1, name: 'general', unread: 3 },
  { id: 2, name: 'random', unread: 0 },
  { id: 3, name: 'introductions', unread: 12 },
  { id: 4, name: 'announcements', unread: 0 },
  { id: 5, name: 'memes', unread: 47 },
]

const directMessages = [
  { id: 1, name: 'Dave', avatar: '👨‍💻', status: 'online' },
  { id: 2, name: 'Sarah', avatar: '👩‍🎨', status: 'away' },
  { id: 3, name: 'Mike', avatar: '🧑‍🚀', status: 'offline' },
]

const messages = [
  { id: 1, user: 'Dave', avatar: '👨‍💻', time: '9:42 AM', text: 'Hey everyone! How\'s it going?' },
  { id: 2, user: 'Sarah', avatar: '👩‍🎨', time: '9:45 AM', text: 'Just trying to figure out why my code works. I have no idea.' },
  { id: 3, user: 'Mike', avatar: '🧑‍🚀', time: '9:47 AM', text: 'Classic. Have you tried turning it off and on again?' },
  { id: 4, user: 'Dave', avatar: '👨‍💻', time: '9:48 AM', text: 'The code works, I just don\'t know WHY it works. That\'s the scary part.' },
  { id: 5, user: 'Sarah', avatar: '👩‍🎨', time: '9:50 AM', text: 'That\'s called "job security" 😂' },
  { id: 6, user: 'System', avatar: '🤖', time: '9:51 AM', text: 'Dave has left the channel to contemplate their life choices.' },
]

function App() {
  const [activeChannel, setActiveChannel] = useState('general')
  const [messageInput, setMessageInput] = useState('')

  return (
    <div className="app">
      {/* Workspace Header */}
      <header className="workspace-header">
        <div className="workspace-name">
          <span className="workspace-icon">🥨</span>
          Snack Workspace
        </div>
        <div className="header-actions">
          <span className="search-placeholder">🔍 Search (doesn't work)</span>
        </div>
      </header>

      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Channels</h3>
            <ul className="channel-list">
              {channels.map(channel => (
                <li 
                  key={channel.id}
                  className={`channel-item ${activeChannel === channel.name ? 'active' : ''}`}
                  onClick={() => setActiveChannel(channel.name)}
                >
                  <span className="channel-hash">#</span>
                  <span className="channel-name">{channel.name}</span>
                  {channel.unread > 0 && (
                    <span className="unread-badge">{channel.unread}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Direct Messages</h3>
            <ul className="dm-list">
              {directMessages.map(dm => (
                <li key={dm.id} className="dm-item">
                  <span className="dm-avatar">{dm.avatar}</span>
                  <span className="dm-name">{dm.name}</span>
                  <span className={`dm-status ${dm.status}`}></span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="chat-area">
          <div className="channel-header">
            <h2># {activeChannel}</h2>
            <span className="channel-desc">Where the magic happens (or doesn't)</span>
          </div>

          <div className="messages-container">
            {messages.map(msg => (
              <div key={msg.id} className="message">
                <div className="message-avatar">{msg.avatar}</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-user">{msg.user}</span>
                    <span className="message-time">{msg.time}</span>
                  </div>
                  <p className="message-text">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="message-input-container">
            <input
              type="text"
              className="message-input"
              placeholder={`Message #${activeChannel} (nobody will see this)`}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>
        </main>
      </div>

      {/* PortScout Footer */}
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
