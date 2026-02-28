<template>
  <div class="tile">
    <div class="tile-label">QUANTUM BREATHING™</div>
    <div class="breathing-circle-container">
      <div class="breathing-circle"></div>
    </div>
    <div class="breathing-text">{{ breathingPhase }}</div>
    <div class="tile-subtitle">Respiratory Optimization</div>
  </div>
</template>

<script>
export default {
  name: 'QuantumBreathingTile',
  data() {
    return {
      breathingPhase: 'Inhale…',
      phaseInterval: null
    }
  },
  mounted() {
    this.phaseInterval = setInterval(() => {
      this.breathingPhase = this.breathingPhase === 'Inhale…' ? 'Exhale…' : 'Inhale…'
    }, 4000)
  },
  beforeUnmount() {
    clearInterval(this.phaseInterval)
  }
}
</script>
