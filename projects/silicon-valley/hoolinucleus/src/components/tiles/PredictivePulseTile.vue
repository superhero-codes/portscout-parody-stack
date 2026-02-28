<template>
  <div class="tile">
    <div class="tile-label">PREDICTIVE PULSE™</div>
    <div class="risk-value" :class="riskColor">{{ riskValue }}</div>
    <div class="tile-subtitle">Threat Assessment</div>
    <svg class="mini-chart" viewBox="0 0 140 40" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#60a5fa" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="chart-fill" :d="fillPath" />
      <path :d="linePath" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PredictivePulseTile',
  data() {
    return {
      riskValue: '0.00',
      chartPoints: [],
      updateInterval: null
    }
  },
  computed: {
    riskColor() {
      const v = parseFloat(this.riskValue)
      if (v < 0.3) return 'green'
      if (v <= 0.6) return 'yellow'
      return 'red'
    },
    linePath() {
      if (!this.chartPoints.length) return ''
      const w = 140
      const h = 40
      const step = w / (this.chartPoints.length - 1)
      return this.chartPoints
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * step},${h - p * h}`)
        .join(' ')
    },
    fillPath() {
      if (!this.chartPoints.length) return ''
      const w = 140
      const h = 40
      const step = w / (this.chartPoints.length - 1)
      const line = this.chartPoints
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * step},${h - p * h}`)
        .join(' ')
      return `${line} L${w},${h} L0,${h} Z`
    }
  },
  mounted() {
    this.generateData()
    this.updateInterval = setInterval(() => this.generateData(), 10000)
  },
  beforeUnmount() {
    clearInterval(this.updateInterval)
  },
  methods: {
    generateData() {
      this.riskValue = (0.01 + Math.random() * 0.88).toFixed(2)
      this.chartPoints = Array.from({ length: 12 }, () => 0.1 + Math.random() * 0.8)
    }
  }
}
</script>
