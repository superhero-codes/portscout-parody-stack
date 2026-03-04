# StackBucks™ — Developer Superpower Beverage Framework

> Enterprise-grade caffeine delivery and developer optimization platform.

## Overview

StackBucks is an enterprise-grade caffeine delivery and developer optimization platform. Through proprietary brew algorithms and neural foam injection, StackBucks transforms ordinary developers into mass-producing code machines.

Built on the StackBucks Caffeine Engine™ — a vertically integrated, horizontally scalable, diagonally confusing beverage orchestration framework — StackBucks delivers measurable improvements in developer throughput, meeting survival rates, and spontaneous refactoring confidence.

**Warning:** StackBucks has not been evaluated by the FDA, IEEE, or any organization with actual authority. Side effects may include shipping code.

## The Menu

### ☕✨ Quantum Espresso
+40 Focus | +12 Compile Speed | -2 Social Skills. The foundational developer fuel. Exists in a superposition of "too strong" and "not strong enough" until observed by a project manager.

### ⚡ HyperBrew 3000™
Enables temporary overclocking. May cause spontaneous refactoring. Not recommended before code reviews or during sprint planning.

### 🐛 Debug Dark Roast
75% chance to fix bug. 25% chance to introduce new one. The odds are better than most debugging sessions.

### ♾️ Infinite Loop Latte
You will not sleep. You will not stop. Caffeine level: 100%. Comes with a pulsing warning indicator for a reason.

### 🧹 Garbage Collection Frappuccino
Clears brain cache. Resets emotional memory. Recommended after reading legacy code or attending all-hands meetings.

### 📚 Stack Overflow Shot
Instantly remembers something you "already knew". Pairs well with copy-paste workflows and "I wrote this from scratch" claims.

## How to Run

### Prerequisites
- Java 21+
- Maven 3.9+ (or use the included Maven Wrapper)

### Start the application

```bash
# Using Maven Wrapper (recommended)
./mvnw spring-boot:run

# Or with system Maven
mvn spring-boot:run
```

The application will start on **port 8088**: [http://localhost:8088](http://localhost:8088)

**Note:** Startup includes a deliberate ~2.7 second calibration delay. This is by design. The espresso manifold requires calibration.

## Observed Behaviors / Test Signals

### Server-Side Signals

| Signal | Description |
|--------|-------------|
| **Startup Log Burst** | 30-60 INFO lines logged rapidly on startup (with 50-150ms delays between each) |
| **Startup Delay** | ~2.7 second deliberate pause during "espresso manifold calibration" |
| **Telemetry Logs** | INFO line every 2 seconds with random developer metrics |
| **WARN/ERROR Logs** | Random WARN or ERROR every 20-40 seconds |
| **Memory Foam** | When toggled ON, allocates 1-5MB every 30 seconds, capped at 256MB |
| **Caffeine Overload** | Easter egg triggers burst of 50 rapid WARN log lines |

### Client-Side Signals

| Signal | Description |
|--------|-------------|
| **Console Startup Spam** | 20-40 console.log messages on page load |
| **Console Telemetry** | Telemetry message every 2 seconds |
| **Drink Activation** | 10-15 rapid console messages when activating a drink |
| **Caffeine Overload** | 30+ rapid console messages during easter egg |

### Easter Egg: Caffeine Overload Mode
Click the StackBucks logo in the header **7 times within 3 seconds** to trigger:
- Visual glitch overlay with scanlines and color shift
- Stats panel (Heart Rate: 148 bpm, Tabs: 27, Sleep Debt: ∞, Deploy Risk: HIGH)
- 30+ rapid browser console messages
- Server-side burst of 50 WARN log lines via `/api/caffeine-overload`
- Auto-dismisses after 4 seconds

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main page (Thymeleaf template) |
| `/api/toggle-memory` | POST | Toggle memory foam on/off |
| `/api/memory-status` | GET | Current memory foam status |
| `/api/caffeine-overload` | POST | Trigger server-side log burst |

## PortScout Detection Notes

This project should be flagged for:
- **High log activity**: 30-60 lines on startup, then continuous every 2 seconds
- **High console activity**: 20-40 lines on load, then continuous every 2 seconds
- **Periodic WARN/ERROR logs**: Every 20-40 seconds
- **Memory growth**: Observable when Memory Foam toggle is ON (1-5MB/30s, cap 256MB)
- **Startup delay**: ~2.7 seconds of deliberate calibration pause
- **Burst activity**: Easter egg triggers simultaneous server + client log bursts

## Tech Stack

- **Java 21** with **Spring Boot 3.2.3**
- **Thymeleaf** for server-rendered HTML
- **Vanilla JavaScript** for client-side console spam
- **Maven** with Maven Wrapper
- **Embedded Tomcat** on port 8088

## Disclaimer

This is a parody project, part of the **PortScout Parody Stack**. StackBucks is not affiliated with, endorsed by, or connected to any real coffee company, beverage brand, or caffeine delivery platform. No actual developer superpowers are granted. Any resemblance to real productivity tools is purely coincidental and frankly concerning.

*StackBucks™ — Because `System.out.println("I need coffee")` wasn't enterprise enough.*
