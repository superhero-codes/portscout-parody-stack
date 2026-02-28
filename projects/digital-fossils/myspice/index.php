<?php
// MySpice — Like MySpace, but spicier. And it's 2005 forever.
$profiles = [
    [
        'name' => 'Tom',
        'status' => 'Thanks for being my friend! I\'m everyone\'s first friend.',
        'mood' => '😎 Chillin\'',
        'song' => '🎵 Now Playing: Smash Mouth - All Star',
        'friends' => 847293847,
        'age' => 'Forever 32',
        'location' => 'The Internet',
    ],
    [
        'name' => 'xX_DarkAngel_Xx',
        'status' => 'RaWr means I love you in dinosaur 🦕',
        'mood' => '😈 Feeling emo',
        'song' => '🎵 Now Playing: My Chemical Romance - Welcome to the Black Parade',
        'friends' => 847,
        'age' => '15 (but actually 37)',
        'location' => 'My room (it\'s dark)',
    ],
    [
        'name' => 'GlitterQueen2005',
        'status' => 'OMG check out my new layout!! Took me 6 hours of HTML!!',
        'mood' => '✨ Sparkly',
        'song' => '🎵 Now Playing: Hilary Duff - So Yesterday',
        'friends' => 2341,
        'age' => '16',
        'location' => 'The Mall',
    ],
];

$currentProfile = $profiles[array_rand($profiles)];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySpice — A Place for Friends (and bad HTML)</title>
    <style>
        body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background: #003366;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004488' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            color: #ffffff;
            font-size: 12px;
            margin: 0;
            padding: 0;
        }
        .header {
            background: linear-gradient(to right, #003366, #006699);
            padding: 10px 20px;
            border-bottom: 3px solid #ff6600;
        }
        .header h1 {
            font-size: 24px;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            margin: 0;
        }
        .header h1 span { color: #ff6600; }
        .nav {
            background: #004488;
            padding: 5px 20px;
            border-bottom: 1px solid #006699;
        }
        .nav a {
            color: #99ccff;
            text-decoration: none;
            margin-right: 15px;
            font-size: 11px;
        }
        .nav a:hover { color: #ffffff; text-decoration: underline; }
        .container {
            max-width: 900px;
            margin: 20px auto;
            display: flex;
            gap: 20px;
            padding: 0 20px;
        }
        .sidebar {
            width: 200px;
            flex-shrink: 0;
        }
        .main { flex: 1; }
        .profile-box {
            background: #ffffff;
            color: #333333;
            border: 2px solid #ff6600;
            padding: 15px;
            margin-bottom: 15px;
        }
        .profile-box h2 {
            color: #003366;
            font-size: 16px;
            border-bottom: 1px solid #cccccc;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
        .profile-pic {
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, #ff6600, #ff9900, #ffcc00);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            margin: 0 auto 10px;
            border: 3px solid #003366;
        }
        .profile-info { font-size: 11px; line-height: 1.8; }
        .profile-info b { color: #003366; }
        .blurbs {
            background: #ffffff;
            color: #333333;
            border: 2px solid #ff6600;
            padding: 15px;
            margin-bottom: 15px;
        }
        .blurbs h3 {
            color: #ff6600;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .friends-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .friend {
            text-align: center;
            font-size: 10px;
        }
        .friend-pic {
            width: 60px;
            height: 60px;
            background: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin: 0 auto 4px;
            border: 1px solid #999;
        }
        .comment-box {
            background: #f0f0f0;
            border: 1px solid #cccccc;
            padding: 10px;
            margin-bottom: 8px;
        }
        .comment-box .author { color: #003366; font-weight: bold; }
        .comment-box .time { color: #999999; font-size: 10px; }
        .marquee-text {
            color: #ff6600;
            font-weight: bold;
            font-size: 14px;
            padding: 10px 0;
        }
        .visitor-counter {
            text-align: center;
            padding: 10px;
            background: #000000;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 11px;
            margin-top: 15px;
        }
        .footer-attr {
            text-align: center;
            padding: 20px;
            color: #6699cc;
            font-size: 10px;
        }
        .footer-attr a { color: #99ccff; }
        .blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>My<span>Spice</span> 🌶️</h1>
    </div>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a href="#">Search</a>
        <a href="#">Mail</a>
        <a href="#">Blog</a>
        <a href="#">Forum</a>
        <a href="#">Groups</a>
        <a href="#">Music</a>
        <a href="#">Film</a>
    </div>

    <div class="container">
        <div class="sidebar">
            <div class="profile-box">
                <div class="profile-pic">🌶️</div>
                <h2><?php echo htmlspecialchars($currentProfile['name']); ?></h2>
                <div class="profile-info">
                    <b>Status:</b> <?php echo htmlspecialchars($currentProfile['status']); ?><br>
                    <b>Mood:</b> <?php echo $currentProfile['mood']; ?><br>
                    <b>Age:</b> <?php echo htmlspecialchars($currentProfile['age']); ?><br>
                    <b>Location:</b> <?php echo htmlspecialchars($currentProfile['location']); ?><br>
                    <b>Friends:</b> <?php echo number_format($currentProfile['friends']); ?><br>
                </div>
                <p style="margin-top:10px;font-size:10px;color:#ff6600;">
                    <?php echo $currentProfile['song']; ?>
                </p>
            </div>

            <div class="visitor-counter">
                <span class="blink">★</span> 
                You are visitor #<?php echo number_format(rand(100000, 999999)); ?>
                <span class="blink">★</span>
            </div>
        </div>

        <div class="main">
            <marquee class="marquee-text" scrollamount="3">
                ★ Welcome to MySpice! ★ A place for friends! ★ Now with 100% more spice! ★ Tom is still your friend! ★
            </marquee>

            <div class="blurbs">
                <h3>About Me</h3>
                <p>Hey!! Thanks 4 visiting my page!! Make sure 2 sign my guestbook!! If u add me I'll add u back!! 
                PC4PC?? I made this layout myself it took FOREVER lol. Don't steal it or I'll report u!!</p>
                <p style="margin-top:8px;">
                    <b>Interests:</b> music, hanging out, AIM, making layouts, HTML, being random XD
                </p>
            </div>

            <div class="blurbs">
                <h3>My Top 8 Friends</h3>
                <div class="friends-grid">
                    <div class="friend"><div class="friend-pic">👤</div>Tom</div>
                    <div class="friend"><div class="friend-pic">😎</div>CoolDude99</div>
                    <div class="friend"><div class="friend-pic">🎸</div>RockStar</div>
                    <div class="friend"><div class="friend-pic">💀</div>xX_Emo_Xx</div>
                    <div class="friend"><div class="friend-pic">🌸</div>PinkPrincess</div>
                    <div class="friend"><div class="friend-pic">🎮</div>Gamer4Life</div>
                    <div class="friend"><div class="friend-pic">📷</div>PhotoGirl</div>
                    <div class="friend"><div class="friend-pic">🏀</div>Baller23</div>
                </div>
            </div>

            <div class="blurbs">
                <h3>Comments (<?php echo rand(12, 847); ?>)</h3>
                <div class="comment-box">
                    <span class="author">Tom</span> <span class="time">2 hours ago</span>
                    <p>Thanks for the add! Welcome to MySpice! 🌶️</p>
                </div>
                <div class="comment-box">
                    <span class="author">xX_DarkAngel_Xx</span> <span class="time">5 hours ago</span>
                    <p>OMG ur layout is SO cool!! How did u make it?? Teach me!! 🖤</p>
                </div>
                <div class="comment-box">
                    <span class="author">GlitterQueen2005</span> <span class="time">1 day ago</span>
                    <p>PC4PC?? I'll comment on urs if u comment on mine!! ✨✨</p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-attr">
        Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack">PortScout Parody Stack</a> · 
        It's 2005 and everything is beautiful
    </div>
</body>
</html>
