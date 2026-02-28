import random
import time
from pathlib import Path

from fastapi import FastAPI, Query
from fastapi.responses import FileResponse

app = FastAPI(title="BeerFinder")

BASE_DIR = Path(__file__).resolve().parent
INDEX_FILE = BASE_DIR / "public" / "index.html"

PORT = 5325

BREWERIES = [
    {
        "id": 1,
        "name": "Hoppy Days Brewing Co.",
        "distance": "0.3 km",
        "rating": 4.8,
        "beers": 24,
        "style": "IPA Specialists",
        "lat": 59.913,
        "lng": 10.752,
        "emoji": "🍺",
    },
    {
        "id": 2,
        "name": "The Frothy Mustache",
        "distance": "0.7 km",
        "rating": 4.5,
        "beers": 18,
        "style": "Belgian & Sours",
        "lat": 59.915,
        "lng": 10.748,
        "emoji": "🍻",
    },
    {
        "id": 3,
        "name": "Barrel & Grain",
        "distance": "1.2 km",
        "rating": 4.9,
        "beers": 32,
        "style": "Barrel-Aged Everything",
        "lat": 59.92,
        "lng": 10.755,
        "emoji": "🪵",
    },
    {
        "id": 4,
        "name": "Yeast Mode Activated",
        "distance": "1.8 km",
        "rating": 4.3,
        "beers": 15,
        "style": "Experimental Brews",
        "lat": 59.908,
        "lng": 10.76,
        "emoji": "🧪",
    },
    {
        "id": 5,
        "name": "Stout of This World",
        "distance": "2.4 km",
        "rating": 4.7,
        "beers": 20,
        "style": "Stouts & Porters",
        "lat": 59.925,
        "lng": 10.74,
        "emoji": "🌑",
    },
    {
        "id": 6,
        "name": "Ale Caesar",
        "distance": "3.1 km",
        "rating": 4.6,
        "beers": 28,
        "style": "Classic Ales",
        "lat": 59.93,
        "lng": 10.735,
        "emoji": "🏛️",
    },
    {
        "id": 7,
        "name": "Brew-tiful Day",
        "distance": "4.0 km",
        "rating": 4.4,
        "beers": 12,
        "style": "Lagers & Pilsners",
        "lat": 59.905,
        "lng": 10.77,
        "emoji": "☀️",
    },
    {
        "id": 8,
        "name": "The Pint-ernet",
        "distance": "5.2 km",
        "rating": 4.2,
        "beers": 40,
        "style": "Everything on Tap",
        "lat": 59.935,
        "lng": 10.725,
        "emoji": "🌐",
    },
]


@app.get("/api/health")
def health() -> dict:
    return {"ok": True}


@app.get("/api/breweries")
def breweries(lat: str | None = None, lng: str | None = None, radius: str | None = None) -> dict:
    print(
        f"[BeerFinder:{PORT}] Search: lat={lat or 'any'}, lng={lng or 'any'}, radius={radius or 'all'}"
    )
    results = sorted(BREWERIES, key=lambda b: float(b["distance"].split()[0]))
    return {"results": results, "total": len(results), "query": {"lat": lat, "lng": lng, "radius": radius}}


@app.get("/api/search")
def search(q: str = Query(default="")) -> dict:
    time.sleep(random.uniform(0.2, 1.2))

    lowered = q.strip().lower()
    if not lowered:
        matches = BREWERIES
    else:
        matches = [
            b
            for b in BREWERIES
            if lowered in b["name"].lower() or lowered in b["style"].lower() or lowered in b["emoji"]
        ]

    spots = [
        {
            "name": b["name"],
            "distance": b["distance"],
            "style": b["style"],
            "rating": b["rating"],
            "emoji": b["emoji"],
        }
        for b in sorted(matches, key=lambda b: float(b["distance"].split()[0]))
    ]

    return {
        "query": q,
        "spots": spots,
        "total": len(spots),
        "note": "Nearby beer located. Hydration advice intentionally ignored.",
    }


@app.get("/")
def home() -> FileResponse:
    return FileResponse(INDEX_FILE)
