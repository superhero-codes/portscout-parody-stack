<template>
  <div class="tile" @click="randomize">
    <div class="tile-label">LIFESYNC™</div>
    <svg class="lifesync-ring" viewBox="0 0 80 80">
      <defs>
        <linearGradient id="lifesyncGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#00e676" />
        </linearGradient>
      </defs>
      <circle class="ring-bg" cx="40" cy="40" r="34" />
      <circle
        class="ring-fill"
        cx="40"
        cy="40"
        r="34"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <div class="lifesync-score">
      {{ score }}<span class="lifesync-unit">%</span>
    </div>
    <div class="tile-subtitle">Daily Optimization Index</div>
  </div>
</template>

<script>
export default {
  name: 'LifeSyncTile',
  data() {
    const radius = 34
    const circumference = 2 * Math.PI * radius
    return {
      score: this.getRandomScore(),
      radius,
      circumference
    }
  },
  computed: {
    dashOffset() {
      return this.circumference - (this.score / 100) * this.circumference
    }
  },
  methods: {
    getRandomScore() {
      return Math.floor(Math.random() * (99 - 72 + 1)) + 72
    },
    randomize() {
      this.score = this.getRandomScore()
    }
  }
}
</script>
