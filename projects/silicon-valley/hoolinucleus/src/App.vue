<template>
  <div class="phone-frame-wrapper">
    <div class="phone-frame">
      <div class="phone-frame-inner" ref="frameInner">
        <!-- Loading Screen -->
        <LoadingScreen v-if="loading" @complete="onLoadingComplete" />

        <!-- Main App -->
        <template v-if="!loading">
          <!-- Top Bar -->
          <div class="top-bar">
            <div class="top-bar-left" @click="onLogoTap">
              <svg class="top-bar-logo" viewBox="0 0 28 28">
                <defs>
                  <linearGradient id="topLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#00e676" />
                  </linearGradient>
                </defs>
                <rect width="28" height="28" rx="7" fill="url(#topLogoGrad)" />
                <path d="M8 9 L8 19 M8 14 L20 14 M20 9 L20 19" stroke="white" stroke-width="2" stroke-linecap="round" fill="none" />
              </svg>
              <span class="top-bar-title">NUCLEUS</span>
            </div>
            <div class="top-bar-center">
              <div class="sync-dot"></div>
              <span class="sync-text">Global Sync: Optimal</span>
            </div>
            <div class="top-bar-avatar">GB</div>
          </div>

          <!-- Dashboard -->
          <div class="dashboard">
            <div class="welcome-section">
              <div class="welcome-text">Good {{ timeOfDay }}, Executive.</div>
              <div class="welcome-subtitle">Your cognitive mesh is operating at peak efficiency.</div>
            </div>

            <div class="tile-grid">
              <LifeSyncTile />
              <NeuralMapTile />
              <PredictivePulseTile />
              <PostureIntelligenceTile />
              <MarketSentimentTile />
              <QuantumBreathingTile />
            </div>
          </div>

          <!-- Pied Piper Banner -->
          <div class="pied-piper-banner" v-if="showPiedPiperBanner">
            <div class="pied-piper-text">⚠️ Inferior compression technology detected. Nucleus Core™ is 47x more efficient.</div>
            <button class="pied-piper-close" @click="showPiedPiperBanner = false">✕</button>
          </div>
        </template>

        <!-- Admin Modal -->
        <AdminModal v-if="showAdmin" @close="showAdmin = false" />

        <!-- Gavin Belson Overlay -->
        <GavinBelsonOverlay v-if="showGavin" @close="showGavin = false" />
      </div>
    </div>

    <!-- Notifications (outside phone frame for proper positioning) -->
    <NotificationToast v-if="!loading" />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import LifeSyncTile from './components/tiles/LifeSyncTile.vue'
import NeuralMapTile from './components/tiles/NeuralMapTile.vue'
import PredictivePulseTile from './components/tiles/PredictivePulseTile.vue'
import PostureIntelligenceTile from './components/tiles/PostureIntelligenceTile.vue'
import MarketSentimentTile from './components/tiles/MarketSentimentTile.vue'
import QuantumBreathingTile from './components/tiles/QuantumBreathingTile.vue'
import NotificationToast from './components/NotificationToast.vue'
import AdminModal from './components/AdminModal.vue'
import GavinBelsonOverlay from './components/GavinBelsonOverlay.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    LifeSyncTile,
    NeuralMapTile,
    PredictivePulseTile,
    PostureIntelligenceTile,
    MarketSentimentTile,
    QuantumBreathingTile,
    NotificationToast,
    AdminModal,
    GavinBelsonOverlay
  },
  data() {
    return {
      loading: true,
      showAdmin: false,
      showGavin: false,
      showPiedPiperBanner: false,
      logoTapCount: 0,
      logoTapTimer: null,
      // Gavin Belson mode detection
      gKeyPresses: [],
      swipeStarts: [],
      swipeEnds: []
    }
  },
  computed: {
    timeOfDay() {
      const hour = new Date().getHours()
      if (hour < 12) return 'morning'
      if (hour < 17) return 'afternoon'
      return 'evening'
    }
  },
  mounted() {
    // Pied Piper jab
    localStorage.setItem('hooli-nucleus-running', 'true')
    this.showPiedPiperBanner = !!localStorage.getItem('piedpiper-running')

    // Gavin Belson mode: keyboard
    window.addEventListener('keydown', this.onKeyDown)

    // Gavin Belson mode: touch swipes
    window.addEventListener('touchstart', this.onTouchStart, { passive: true })
    window.addEventListener('touchend', this.onTouchEnd, { passive: true })
  },
  beforeUnmount() {
    localStorage.removeItem('hooli-nucleus-running')
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchend', this.onTouchEnd)
  },
  methods: {
    onLoadingComplete() {
      this.loading = false
    },

    // Admin Mode: tap logo 7 times
    onLogoTap() {
      this.logoTapCount++
      clearTimeout(this.logoTapTimer)
      this.logoTapTimer = setTimeout(() => {
        this.logoTapCount = 0
      }, 3000)

      if (this.logoTapCount >= 7) {
        this.logoTapCount = 0
        this.showAdmin = true
      }
    },

    // Gavin Belson Mode: press G 3 times quickly
    onKeyDown(e) {
      if (e.key === 'g' || e.key === 'G') {
        const now = Date.now()
        this.gKeyPresses.push(now)
        // Keep only last 3
        if (this.gKeyPresses.length > 3) {
          this.gKeyPresses.shift()
        }
        if (this.gKeyPresses.length === 3) {
          const elapsed = this.gKeyPresses[2] - this.gKeyPresses[0]
          if (elapsed < 2000) {
            this.gKeyPresses = []
            this.showGavin = true
          }
        }
      }
    },

    // Gavin Belson Mode: 3 rapid downward swipes
    onTouchStart(e) {
      if (e.touches.length === 1) {
        this.swipeStarts.push({
          y: e.touches[0].clientY,
          time: Date.now()
        })
        if (this.swipeStarts.length > 3) this.swipeStarts.shift()
      }
    },

    onTouchEnd(e) {
      if (e.changedTouches.length === 1) {
        const endY = e.changedTouches[0].clientY
        const now = Date.now()
        const lastStart = this.swipeStarts[this.swipeStarts.length - 1]

        if (lastStart && endY - lastStart.y > 50 && now - lastStart.time < 500) {
          this.swipeEnds.push(now)
          if (this.swipeEnds.length > 3) this.swipeEnds.shift()

          if (this.swipeEnds.length === 3) {
            const elapsed = this.swipeEnds[2] - this.swipeEnds[0]
            if (elapsed < 2000) {
              this.swipeEnds = []
              this.swipeStarts = []
              this.showGavin = true
            }
          }
        }
      }
    }
  }
}
</script>
