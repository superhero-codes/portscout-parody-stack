# NipAlert™ — Thermodynamic Proximity Detection System

> *"Making the world a safer place, one thermal signature at a time."*

## Overview

NipAlert™ is a cutting-edge, AI-powered thermodynamic prediction engine designed to detect and classify areola-based thermal signatures in real-time using advanced machine learning calibration algorithms.

Built on a proprietary **Advanced Areola Detection Grid (AADG)**, NipAlert leverages multi-spectral infrared analysis, geospatial triangulation, and a patent-pending confidence scoring system to deliver sub-centimeter thermal resolution at distances of up to 500 meters.

## Technical Specifications

| Parameter | Value |
|---|---|
| Detection Range | 0–500m (line of sight) |
| Thermal Resolution | 0.003°C |
| Confidence Algorithm | Bayesian Neural Cascade v4.2 |
| Scan Frequency | 144 Hz |
| Calibration Mode | Auto-adaptive (manual override available) |
| False Positive Rate | < 0.7% (lab conditions) |
| Supported Wavelengths | 8–14 μm (LWIR band) |
| ML Model | NipNet™ v3.1 (47M parameters) |
| Training Data | 2.3M annotated thermal frames |

## Architecture

```
┌─────────────────────────────────────────┐
│         THERMAL ACQUISITION LAYER       │
│    (Multi-band IR Sensor Fusion)        │
├─────────────────────────────────────────┤
│       SIGNAL PROCESSING PIPELINE        │
│  Noise Reduction → Edge Detection →     │
│  Thermal Gradient Mapping               │
├─────────────────────────────────────────┤
│        NipNet™ INFERENCE ENGINE         │
│   (Real-time Classification @ 144Hz)    │
├─────────────────────────────────────────┤
│      GEOSPATIAL CORRELATION MODULE      │
│   GPS + WiFi + Cell Tower Trilateration │
├─────────────────────────────────────────┤
│          USER INTERFACE LAYER           │
│     (Vue 3 + Leaflet Dark Mode Map)     │
└─────────────────────────────────────────┘
```

## Requirements

- Node.js 18+
- A modern browser with geolocation support
- Machine learning calibration required (first-time setup takes approximately 3–7 business days)

## Getting Started

```bash
npm install && npm run dev
```

The application will start on **port 6060**.

Navigate to `http://localhost:6060` to begin thermal scanning.

### First-Time Calibration

On first launch, the system will enter **Calibration Mode** to tune the Bayesian Neural Cascade to your local atmospheric conditions. This process is fully automated and requires no user intervention. Do not interrupt the calibration sequence.

## Features

- 🔴 **Live Scan Mode** — Real-time thermal signature detection with rotating radar sweep
- 📍 **Geospatial Mapping** — Dark-mode Leaflet map with precision coordinate overlay
- 👤 **Profile Detection** — AI-classified thermal profiles with confidence scoring
- 📊 **Thermal Gain Optimization** — Automatic gain adjustment for optimal detection
- 🔊 **Audible Scan Confirmation** — Proprietary radar beep on scan completion

## Known Limitations

- Detection accuracy decreases significantly in ambient temperatures above 37°C
- The system cannot distinguish between humans and large warm-blooded animals at distances greater than 200m
- Calibration drift may occur during solar eclipses
- Not recommended for use in saunas, hot springs, or active volcanic regions

## License

Proprietary. All rights reserved by Bachmanity Capital.

---

## ⚠️ DISCLAIMER

**This is a parody/homage project inspired by the HBO television series *Silicon Valley*.** NipAlert is a fictional application from the show, created by the character Nelson "Big Head" Bighetti. This project is built purely for entertainment and educational purposes.

No actual thermal detection, areola scanning, or proximity tracking of any kind is performed. All data is mocked. All profiles are fake. The "AI" is a random number generator. The "machine learning model" is `Math.random()`.

This project is not affiliated with HBO, Silicon Valley, or any real thermal imaging technology.

*"This guy fucks."* — Russ Hanneman
