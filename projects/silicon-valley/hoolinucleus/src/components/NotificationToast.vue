<template>
  <div class="notification-container" v-if="visible">
    <div class="notification-toast" :class="{ dismissing: dismissing }">
      <svg class="notification-icon" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="notifGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#00e676" />
          </linearGradient>
        </defs>
        <rect width="20" height="20" rx="5" fill="url(#notifGrad)" />
        <text x="10" y="14" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="11" fill="white">H</text>
      </svg>
      <div class="notification-text">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationToast',
  data() {
    return {
      visible: false,
      dismissing: false,
      message: '',
      messages: [
        'Hooli Nucleus has optimized your caffeine absorption.',
        'User behavior indicates mild inefficiency.',
        'A competitor has been neutralized.',
        'Entropy reduced by 0.3%.',
        'Your cognitive mesh has been recalibrated.',
        'Shareholder value increased by 0.01%.',
        'Posture correction applied remotely.',
        'Your breathing pattern has been filed.',
        'A synergy opportunity has been detected.',
        'Your productivity is being monitored for quality assurance.',
        'Nucleus Core™ has absorbed 3 new data streams.',
        'Your life infrastructure has been updated.'
      ],
      notifTimeout: null,
      scheduleTimeout: null
    }
  },
  mounted() {
    this.scheduleNext()
  },
  beforeUnmount() {
    clearTimeout(this.notifTimeout)
    clearTimeout(this.scheduleTimeout)
  },
  methods: {
    scheduleNext() {
      const delay = 20000 + Math.random() * 20000 // 20-40 seconds
      this.scheduleTimeout = setTimeout(() => {
        this.showNotification()
      }, delay)
    },
    showNotification() {
      this.message = this.messages[Math.floor(Math.random() * this.messages.length)]
      this.visible = true
      this.dismissing = false

      this.notifTimeout = setTimeout(() => {
        this.dismissing = true
        setTimeout(() => {
          this.visible = false
          this.dismissing = false
          this.scheduleNext()
        }, 300)
      }, 4000)
    }
  }
}
</script>
