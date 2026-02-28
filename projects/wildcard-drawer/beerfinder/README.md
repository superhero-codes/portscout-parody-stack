# BeerFinder — Parody 🍺

Find craft beer near you. A geo-based brewery search parody. Because life's too short for bad beer.

## What it Parodies

Beer/brewery finder apps — with a modern landing page and mock geo-search.

## Prerequisites

- Python 3.10+
- `venv` module available

## How to Start

```bash
python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && uvicorn app:app --port 5325
```

## Port

- **Server**: 5325 (⚠️ conflicts with Faceplant — intermittent, since Faceplant crashes 50% of the time)

## Stack

- **Python + FastAPI + Uvicorn** — serving beer data since 2026
- **Qwik-inspired parody vibe** — resumable, like your bar tab

## Features

- **`GET /api/health`**: returns `{ "ok": true }`
- **`GET /api/search?q=...`**: mock nearby beer spots with parody tone and optional random jitter (0.2s–1.2s)
- **`GET /api/breweries`**: compatibility endpoint for existing static UI behavior
- **Geo-based mock search**: Pretends to use your location
- **Modern dark landing page**: Amber/gold beer theme
- **Brewery cards**: Names, ratings, distance, beers on tap
- **Map placeholder**: We spent the map budget on beer

## Brewery Highlights

- Hoppy Days Brewing Co. (IPA Specialists)
- The Frothy Mustache (Belgian & Sours)
- Yeast Mode Activated (Experimental Brews)
- Stout of This World (Stouts & Porters)
- The Pint-ernet (Everything on Tap)

## Notes

- Port 5325 conflicts with Faceplant (intermittent — Faceplant crashes 50% of the time, so BeerFinder sometimes gets the port)
- No actual geolocation is used
- All brewery data is mocked
- Please drink responsibly

## PortScout detection expectations

- Runtime markers: [`app.py`](app.py) + [`requirements.txt`](requirements.txt)
- Python web stack markers: `fastapi` and `uvicorn`
- Behavior markers:
    - binds on port `5325`
    - serves UI at `/`
    - responds on `/api/health`, `/api/search`, and `/api/breweries`
    - may intermittently fail to bind if Faceplant holds `5325` (until its 50% crash behavior frees the port)
