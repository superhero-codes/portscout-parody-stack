import { createSignal } from 'solid-js'
import './App.css'

const documents = [
  { id: 1, name: 'Employment Contract', status: 'pending', signer: 'John Doe', date: '2024-01-15' },
  { id: 2, name: 'NDA (Never Read It)', status: 'completed', signer: 'Jane Smith', date: '2024-01-14' },
  { id: 3, name: 'Terms of Service (LOL)', status: 'pending', signer: 'Mike Johnson', date: '2024-01-13' },
  { id: 4, name: 'Privacy Policy (We Track Everything)', status: 'draft', signer: '—', date: '2024-01-12' },
]

function App() {
  const [activeDoc, setActiveDoc] = createSignal(1)

  return (
    <div class="app">
      <header class="header">
        <div class="logo">
          <span class="logo-icon">🐷</span>
          <span class="logo-text">DocuSwine</span>
        </div>
        <nav class="nav">
          <span class="tagline">Sign your life away, digitally</span>
        </nav>
      </header>

      <main class="main">
        <aside class="sidebar">
          <h3>Documents</h3>
          <div class="doc-list">
            {documents.map(doc => (
              <div 
                class={`doc-item ${activeDoc() === doc.id ? 'active' : ''}`}
                onClick={() => setActiveDoc(doc.id)}
              >
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                  <span class="doc-name">{doc.name}</span>
                  <span class={`doc-status ${doc.status}`}>{doc.status}</span>
                </div>
              </div>
            ))}
          </div>
          <button class="new-doc-btn">+ New Document</button>
        </aside>

        <div class="content">
          <div class="doc-header">
            <h1>Employment Contract</h1>
            <span class="last-updated">Last updated: 2 hours ago</span>
          </div>

          <div class="doc-preview">
            <div class="preview-placeholder">
              <span class="preview-icon">📝</span>
              <h2>Document Preview</h2>
              <p>Your legally binding document would appear here.</p>
              <p class="fine-print">(Fine print: We are not responsible for anything ever)</p>
            </div>
          </div>

          <div class="signing-section">
            <h3>Signatures</h3>
            <div class="signers">
              <div class="signer">
                <span class="signer-avatar">👨‍💼</span>
                <div class="signer-info">
                  <span class="signer-name">John Doe</span>
                  <span class="signer-role">Employee</span>
                </div>
                <span class="signer-status pending">Pending</span>
              </div>
              <div class="signer">
                <span class="signer-avatar">👩‍💻</span>
                <div class="signer-info">
                  <span class="signer-name">HR Bot 3000</span>
                  <span class="signer-role">Employer</span>
                </div>
                <span class="signer-status completed">Signed</span>
              </div>
            </div>
          </div>

          <div class="actions">
            <button class="btn-primary">Sign Document</button>
            <button class="btn-secondary">Decline (Not Recommended)</button>
          </div>
        </div>
      </main>

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
  )
}

export default App
