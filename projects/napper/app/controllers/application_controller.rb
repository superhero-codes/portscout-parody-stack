# Napper — ApplicationController
# A minimal Rack-compatible controller that serves the Napper UI

class ApplicationController
  def call(env)
    request = Rack::Request.new(env)

    case request.path
    when '/'
      [200, { 'Content-Type' => 'text/html' }, [index_html]]
    when '/api/files'
      [200, { 'Content-Type' => 'application/json' }, [files_json]]
    else
      [404, { 'Content-Type' => 'text/plain' }, ['404 - File not found (it was probably taken down by the RIAA)']]
    end
  end

  private

  def files_json
    files = [
      { name: 'totally_legal_song.mp3', size: '4.2 MB', seeds: 847, status: 'Available', artist: 'Unknown Artist', quality: '128kbps' },
      { name: 'summer_hit_2005_FINAL_v2_REAL.mp3', size: '3.8 MB', seeds: 1203, status: 'Available', artist: 'Track 01', quality: '192kbps' },
      { name: 'linkin_park_numb.mp3.exe', size: '12.4 MB', seeds: 2, status: 'Suspicious', artist: 'Definitely Linkin Park', quality: '???kbps' },
      { name: 'free_movie_2005_cam_quality.avi', size: '700 MB', seeds: 0, status: 'No Seeds', artist: 'N/A', quality: 'Potato' },
      { name: 'system_of_a_down_toxicity.mp3', size: '3.4 MB', seeds: 456, status: 'Available', artist: 'System of a Down', quality: '160kbps' },
      { name: 'blink182_all_the_small_things.mp3', size: '3.1 MB', seeds: 789, status: 'Available', artist: 'blink-182', quality: '128kbps' },
      { name: 'NOT_A_VIRUS_free_music.mp3.bat', size: '0.1 MB', seeds: 9999, status: 'Very Suspicious', artist: 'Trust Me', quality: 'N/A' },
      { name: 'green_day_boulevard_broken_dreams.mp3', size: '4.8 MB', seeds: 234, status: 'Available', artist: 'Green Day', quality: '256kbps' },
    ]
    JSON.generate(files)
  end

  def index_html
    <<~HTML
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Napper — Free Music Sharing (Totally Legal)</title>
          <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                  font-family: 'Trebuchet MS', Verdana, sans-serif;
                  background: #1a1a2e;
                  color: #e0e0e0;
                  min-height: 100vh;
              }
              .header {
                  background: linear-gradient(135deg, #16213e, #0f3460);
                  padding: 16px 24px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  border-bottom: 3px solid #e94560;
              }
              .logo {
                  font-size: 1.8rem;
                  font-weight: 800;
                  color: #e94560;
              }
              .logo span { color: #e0e0e0; }
              .search-bar {
                  display: flex;
                  gap: 8px;
              }
              .search-bar input {
                  padding: 8px 16px;
                  border: 1px solid #333;
                  border-radius: 4px;
                  background: #0f0f1a;
                  color: white;
                  font-size: 14px;
                  width: 300px;
              }
              .search-bar button {
                  padding: 8px 20px;
                  background: #e94560;
                  color: white;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  font-weight: 600;
              }
              .container {
                  max-width: 900px;
                  margin: 0 auto;
                  padding: 30px 20px;
              }
              .stats-bar {
                  display: flex;
                  gap: 24px;
                  margin-bottom: 24px;
                  font-size: 13px;
                  color: #888;
              }
              .stats-bar span { color: #e94560; font-weight: 600; }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  background: #12122a;
                  border-radius: 8px;
                  overflow: hidden;
              }
              th {
                  background: #0f3460;
                  padding: 12px 16px;
                  text-align: left;
                  font-size: 12px;
                  text-transform: uppercase;
                  color: #aaa;
              }
              td {
                  padding: 12px 16px;
                  border-bottom: 1px solid #1a1a3e;
                  font-size: 14px;
              }
              tr:hover { background: #1a1a3e; }
              .status-available { color: #22c55e; }
              .status-suspicious { color: #ef4444; }
              .status-noseeds { color: #666; }
              .download-btn {
                  padding: 4px 12px;
                  background: #e94560;
                  color: white;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  font-size: 12px;
              }
              .download-btn:hover { background: #ff6b81; }
              .warning {
                  background: rgba(233, 69, 96, 0.1);
                  border: 1px solid rgba(233, 69, 96, 0.3);
                  border-radius: 8px;
                  padding: 16px;
                  margin-top: 24px;
                  font-size: 13px;
                  color: #e94560;
              }
              .footer-attr {
                  text-align: center;
                  padding: 40px 20px;
                  color: #555;
                  font-size: 12px;
              }
              .footer-attr a { color: #e94560; text-decoration: none; }
          </style>
      </head>
      <body>
          <div class="header">
              <div class="logo">🎵 Nap<span>per</span></div>
              <div class="search-bar">
                  <input type="text" placeholder="Search for music..." id="searchInput">
                  <button onclick="alert('Searching... just kidding. The RIAA is watching.')">Search</button>
              </div>
          </div>

          <div class="container">
              <div class="stats-bar">
                  <div>Users Online: <span>847,293</span></div>
                  <div>Files Shared: <span>12,847,293</span></div>
                  <div>Lawsuits Pending: <span>∞</span></div>
              </div>

              <table>
                  <thead>
                      <tr>
                          <th>Filename</th>
                          <th>Artist</th>
                          <th>Size</th>
                          <th>Quality</th>
                          <th>Seeds</th>
                          <th>Status</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody id="fileList"></tbody>
              </table>

              <div class="warning">
                  ⚠️ <b>Legal Notice:</b> Napper does not condone illegal file sharing. All files listed are 100% fictional. 
                  Any resemblance to actual copyrighted material is purely coincidental. Please don't sue us. 
                  We don't have any money anyway.
              </div>
          </div>

          <div class="footer-attr">
              Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack">PortScout Parody Stack</a> · 
              Sharing is caring (except when it's illegal)
          </div>

          <script>
              async function loadFiles() {
                  try {
                      const res = await fetch('/api/files');
                      const files = await res.json();
                      document.getElementById('fileList').innerHTML = files.map(f => {
                          const statusClass = f.status === 'Available' ? 'status-available' : 
                                            f.status.includes('Suspicious') ? 'status-suspicious' : 'status-noseeds';
                          return `
                              <tr>
                                  <td>${f.name}</td>
                                  <td>${f.artist}</td>
                                  <td>${f.size}</td>
                                  <td>${f.quality}</td>
                                  <td>${f.seeds}</td>
                                  <td class="${statusClass}">${f.status}</td>
                                  <td><button class="download-btn" onclick="alert('Download started! ETA: 47 hours on your 56k modem.')">Download</button></td>
                              </tr>
                          `;
                      }).join('');
                  } catch {
                      document.getElementById('fileList').innerHTML = '<tr><td colspan="7" style="text-align:center;color:#888;padding:40px;">Failed to load files. The RIAA got us.</td></tr>';
                  }
              }
              loadFiles();
          </script>
      </body>
      </html>
    HTML
  end
end
