# Napper — Parody 🎵

Like Napster, but for napping. Also fake file sharing. Mostly napping.

## What it Parodies

Napster — the original music file-sharing service that changed the internet (and got sued into oblivion).

## How to Start

```bash
# Install dependencies
bundle install

# Start the server
rackup -p 5331
```

Or with Rails (if you have it):

```bash
rails server -p 5331
```

## Port

- **Server**: 5331 (⚠️ conflicts with CPUStorm — cross-technology: Ruby vs Node.js, plus CPUStorm is spiking CPU)

## Stack

- **Ruby** — with Rack for minimal server
- **Rails-style structure** — `app/controllers/` directory
- **Gemfile** — because Ruby projects need Gemfiles

## Features

- **Fake file-sharing UI**: Table of "downloadable" files
- **Suspicious files**: Some files are clearly viruses (linkin_park_numb.mp3.exe)
- **Seed counts**: Just like the old P2P days
- **Legal warning**: We don't condone illegal file sharing (wink)
- **Stats bar**: 847,293 users online, ∞ lawsuits pending

## File Highlights

- `totally_legal_song.mp3` — 4.2 MB, 847 seeds
- `linkin_park_numb.mp3.exe` — 12.4 MB, 2 seeds (suspicious)
- `NOT_A_VIRUS_free_music.mp3.bat` — 0.1 MB, 9999 seeds (very suspicious)
- `free_movie_2005_cam_quality.avi` — 700 MB, 0 seeds (no one wants this)

## Requirements

- Ruby 3.0+
- Bundler
- Rack gem

## Notes

- No actual files are shared
- The download button estimates 47 hours on a 56k modem
- The RIAA cannot sue you for running this parody
- All filenames are fictional
