<template>
  <div class="loading-screen" :class="{ 'fade-out': fadingOut }">
    <svg class="loading-logo" viewBox="0 0 80 80">
      <defs>
        <linearGradient id="hooliLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#00e676" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" rx="18" fill="url(#hooliLogoGrad)" />
      <path d="M22 26 L22 54 M22 40 L58 40 M58 26 L58 54" stroke="white" stroke-width="5" stroke-linecap="round" fill="none" />
    </svg>
    <div class="loading-brand">HOOLI</div>
    <div class="loading-tagline" v-if="phase >= 2">We Don't Disrupt. We Replace.</div>
    <div class="loading-progress" v-if="phase >= 3">
      <div class="loading-progress-text" :class="{ visible: currentMessage }">
        {{ currentMessage }}
      </div>
      <div class="loading-bar-container">
        <div class="loading-bar" :style="{ width: progressWidth + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  emits: ['complete'],
  data() {
    return {
      phase: 1,
      fadingOut: false,
      currentMessage: '',
      progressWidth: 0,
      messages: [
        'Initializing Cognitive Mesh…',
        'Calibrating Global Data Spine…',
        'Aligning Nucleus Grid…',
        'Synchronizing Behavioral Harmonics…'
      ],
      messageIndex: 0,
      audioCtx: null,
      oscillator: null,
      gainNode: null
    }
  },
  mounted() {
    this.startSequence()
    this.playAmbientHum()
  },
  beforeUnmount() {
    this.stopAudio()
  },
  methods: {
    startSequence() {
      // Phase 2: tagline at 1s
      setTimeout(() => {
        this.phase = 2
      }, 1000)

      // Phase 3: progress messages at 2s
      setTimeout(() => {
        this.phase = 3
        this.cycleMessages()
      }, 2000)

      // Complete at ~4.5s
      setTimeout(() => {
        this.fadingOut = true
        setTimeout(() => {
          this.$emit('complete')
        }, 600)
      }, 4500)
    },

    cycleMessages() {
      const cycle = () => {
        if (this.messageIndex < this.messages.length) {
          this.currentMessage = this.messages[this.messageIndex]
          this.progressWidth = ((this.messageIndex + 1) / this.messages.length) * 100
          this.messageIndex++
          setTimeout(cycle, 600)
        }
      }
      cycle()
    },

    playAmbientHum() {
      try {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        this.oscillator = this.audioCtx.createOscillator()
        this.gainNode = this.audioCtx.createGain()

        this.oscillator.type = 'sine'
        this.oscillator.frequency.setValueAtTime(120, this.audioCtx.currentTime)
        // Slight oscillation
        this.oscillator.frequency.linearRampToValueAtTime(125, this.audioCtx.currentTime + 1)
        this.oscillator.frequency.linearRampToValueAtTime(118, this.audioCtx.currentTime + 2)

        this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
        this.gainNode.gain.linearRampToValueAtTime(0.03, this.audioCtx.currentTime + 0.5)
        this.gainNode.gain.linearRampToValueAtTime(0.02, this.audioCtx.currentTime + 1.5)
        this.gainNode.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 2.5)

        this.oscillator.connect(this.gainNode)
        this.gainNode.connect(this.audioCtx.destination)
        this.oscillator.start()
        this.oscillator.stop(this.audioCtx.currentTime + 3)
      } catch (e) {
        // Audio not supported or blocked — fail silently
      }
    },

    stopAudio() {
      try {
        if (this.oscillator) this.oscillator.disconnect()
        if (this.gainNode) this.gainNode.disconnect()
        if (this.audioCtx) this.audioCtx.close()
      } catch (e) {
        // ignore
      }
    }
  }
}
</script>
