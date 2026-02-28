# AltaVistaBaby — Parody 🔍

A search engine from a simpler time. Powered by COBOL. Searching the World Wide Web since 1998.

## What it Parodies

AltaVista — the search engine that existed before Google made it irrelevant.

## Components

### COBOL Backend

```bash
# Compile (requires GnuCOBOL)
cobc -x -o search search.cob

# Run
./search
```

The COBOL program accepts a search query and returns fake results. It's a command-line search engine, because that's how we rolled in the mainframe era.

### HTML Frontend

```bash
# Just open it in a browser
open index.html
```

The HTML frontend is a standalone 1998-style search page with fake results.

## Port

- **None** — The COBOL program is CLI-based, the HTML is a static file

## Stack

- **COBOL** — because someone has to keep the mainframes running
- **HTML** — the 1998 edition, with `<hr>` tags and Times New Roman

## Features

- **COBOL search backend**: Accepts queries, returns random result counts
- **Retro search UI**: Blue/yellow color scheme, fake ad banners
- **Fake results**: GeoCities, Netscape, Hamster Dance, and more
- **Babel Fish link**: For translating your search into another language (not really)

## Requirements

- GnuCOBOL (`cobc`) for the COBOL backend (optional)
- A web browser for the HTML frontend
- Nostalgia for the late 90s

## Notes

- The COBOL program compiles with GnuCOBOL: `apt install gnucobol` or `brew install gnucobol`
- The HTML frontend works standalone without the COBOL backend
- We searched before Google. We just didn't search very well.
