<template>
  <div class="tile">
    <div class="tile-label">MARKET SENTIMENT ENGINE™</div>
    <svg class="market-chart" viewBox="0 0 140 60" preserveAspectRatio="none">
      <defs>
        <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00e676" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#00e676" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="market-fill" :d="fillPath" />
      <path
        class="market-line"
        :d="linePath"
        :stroke-dasharray="lineLength"
        :stroke-dashoffset="animated ? 0 : lineLength"
        :style="{ transition: 'stroke-dashoffset 2s ease' }"
      />
    </svg>
    <div class="market-value">{{ value }}</div>
    <div class="market-change">+{{ change }}%</div>
    <div class="tile-subtitle">Global Sentiment Index</div>
  </div>
</template>

<script>
export default {
  name: 'MarketSentimentTile',
  data() {
    return {
      points: [],
      value: '0',
      change: '0.0',
      animated: false,
      lineLength: 500
    }
  },
  computed: {
    linePath() {
      if (!this.points.length) return ''
      const w = 140
      const h = 60
      const step = w / (this.points.length - 1)
      return this.points
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(h - p * h * 0.8 - h * 0.1).toFixed(1)}`)
        .join(' ')
    },
    fillPath() {
      if (!this.points.length) return ''
      const w = 140
      const h = 60
      const step = w / (this.points.length - 1)
      const line = this.points
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(h - p * h * 0.8 - h * 0.1).toFixed(1)}`)
        .join(' ')
      return `${line} L${w},${h} L0,${h} Z`
    }
  },
  mounted() {
    this.generateData()
    setTimeout(() => {
      this.animated = true
    }, 100)
  },
  methods: {
    generateData() {
      // Generate upward-trending random data
      let base = 0.3
      this.points = Array.from({ length: 14 }, () => {
        base += (Math.random() - 0.35) * 0.15
        base = Math.max(0.1, Math.min(0.95, base))
        return base
      })
      this.value = (5000 + Math.random() * 5000).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      this.change = (0.5 + Math.random() * 4).toFixed(1)
    }
  }
}
</script>
