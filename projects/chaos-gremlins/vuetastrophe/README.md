# Vuetastrophe

Satirical Vue + Vite app that intentionally creates bursty, jitter-heavy CPU pressure for detection and runtime observability testing.

## Warning

This project is intentionally unstable and resource-noisy. Test-only. Do not deploy to production.

## Run

```bash
npm install
npm run dev
```

- Default dev URL: `http://localhost:5334`

## Chaos mechanics

- Toggable chaos mode that increases jitter between bursts.
- Bursty busy loops with randomized inner-loop sizes.
- Intensity slider adjusts loop depth and pacing.
- Live counters for ticks, bursts, burst runtime, and rough work-unit totals.
- Simulated PID count that fluctuates over time with bounded jitter.
