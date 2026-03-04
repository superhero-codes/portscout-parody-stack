/**
 * StackBucks™ — Developer Superpower Beverage Framework
 * Client-Side Caffeine Telemetry Engine
 */

(function () {
    'use strict';

    // ============================================
    // STARTUP CONSOLE SPAM
    // ============================================

    const startupMessages = [
        "☕ StackBucks Client Engine initializing...",
        "☕ Loading caffeine telemetry...",
        "☕ Establishing brew connection...",
        "☕ Mounting virtual espresso machine...",
        "☕ Calibrating developer focus sensors...",
        "☕ Loading neural foam renderer...",
        "☕ Initializing caffeine dependency injection...",
        "☕ Compiling latte art shaders (client-side)...",
        "☕ Registering brew event handlers...",
        "☕ Syncing with StackBucks Caffeine Grid...",
        "☕ Loading developer productivity heuristics...",
        "☕ Initializing procrastination firewall...",
        "☕ Warming up JIT brew compiler...",
        "☕ Establishing WebSocket to coffee machine...",
        "☕ Loading espresso machine learning model...",
        "☕ Calibrating dopamine response curve...",
        "☕ Initializing tab accumulation monitor...",
        "☕ Loading meeting avoidance strategies...",
        "☕ Registering keyboard shortcut: Ctrl+☕...",
        "☕ Initializing dark mode caffeine variant...",
        "☕ Loading Stack Overflow integration...",
        "☕ Calibrating imposter syndrome dampener...",
        "☕ Initializing rubber duck protocol...",
        "☕ Loading emergency caffeine reserves...",
        "☕ Establishing gRPC (ground Roast Protocol Coffee)...",
        "☕ Mounting /dev/coffee client filesystem...",
        "☕ Loading CSS centering algorithms...",
        "☕ Initializing regex comprehension module...",
        "☕ Calibrating git blame deflector...",
        "☕ Loading deployment confidence booster...",
        "☕ Initializing code review patience buffer...",
        "☕ Syncing circadian rhythm override...",
        "☕ Loading variable naming inspiration engine...",
        "☕ Initializing semicolon placement AI...",
        "☕ Calibrating bracket matching neural net...",
        "☕ Loading TODO comment generator...",
        "☕ Initializing technical debt accumulator...",
        "☕ Establishing connection to caffeine CDN...",
        "☕ Loading developer superpower modules...",
        "☕ StackBucks Client Engine: ONLINE ✓"
    ];

    // Log 20-40 startup messages rapidly
    const startupCount = 20 + Math.floor(Math.random() * 21);
    const shuffled = [...startupMessages].sort(() => Math.random() - 0.5);
    for (let i = 0; i < startupCount && i < shuffled.length; i++) {
        console.log(shuffled[i]);
    }

    // ============================================
    // TELEMETRY — Every 2 seconds
    // ============================================

    const stabilityOptions = ['OK', 'OK', 'OK', 'WARN', 'WARN', 'CRITICAL'];

    function emitTelemetry() {
        const focus = 40 + Math.floor(Math.random() * 60);
        const tabs = 3 + Math.floor(Math.random() * 45);
        const stability = stabilityOptions[Math.floor(Math.random() * stabilityOptions.length)];
        console.log(`[BREW-TELEMETRY] Focus: ${focus}% | Tabs: ${tabs} | Stability: ${stability}`);
    }

    setInterval(emitTelemetry, 2000);

    // ============================================
    // ABILITIES LIST
    // ============================================

    const abilities = [
        "Temporary Regex Mastery",
        "Docker Compose Confidence",
        "Accidental Production Deploy Resistance",
        "Meeting Immunity (30 min)",
        "Legacy Code Fear Suppression",
        "Thread-Safety Intuition",
        "NullPointer Evasion",
        "Merge Conflict Clairvoyance",
        "Infinite Patience (beta)",
        "Production Calmness (unstable)",
        "CSS Centering Intuition",
        "Git Rebase Courage"
    ];

    // ============================================
    // DRINK ACTIVATION
    // ============================================

    const drinkCards = document.querySelectorAll('.sb-drink-card');
    const overlay = document.getElementById('drinkOverlay');
    const overlayDrinkName = document.getElementById('overlayDrinkName');
    const overlayStatus = document.getElementById('overlayStatus');
    const powerFill = document.getElementById('powerFill');
    const powerPercent = document.getElementById('powerPercent');
    const overlayResult = document.getElementById('overlayResult');
    const abilityName = document.getElementById('abilityName');
    const overlayClose = document.getElementById('overlayClose');

    const activationMessages = [
        "⚡ CAFFEINE INJECTION INITIATED",
        "⚡ Neural pathways reconfiguring...",
        "⚡ Ability module loading...",
        "⚡ Dopamine receptors activating...",
        "⚡ Synaptic connections strengthening...",
        "⚡ Developer mode: ENHANCED",
        "⚡ Focus beam: LOCKED ON",
        "⚡ Productivity multiplier: ENGAGED",
        "⚡ Code quality: TEMPORARILY IMPROVED",
        "⚡ Bug detection: HEIGHTENED",
        "⚡ Stack trace comprehension: BOOSTED",
        "⚡ Variable naming: INSPIRED",
        "⚡ Caffeine buffer: FILLING",
        "⚡ Neural foam: INJECTED",
        "⚡ Brew sequence: COMPLETE"
    ];

    function activateDrink(drinkName) {
        overlayDrinkName.textContent = drinkName;
        overlayStatus.textContent = 'Injecting Caffeine…';
        powerFill.style.width = '0%';
        powerPercent.textContent = '0%';
        overlayResult.style.display = 'none';
        overlayClose.style.display = 'none';
        overlay.classList.add('active');

        // Burst console messages
        const burstCount = 10 + Math.floor(Math.random() * 6);
        const shuffledActivation = [...activationMessages].sort(() => Math.random() - 0.5);
        for (let i = 0; i < burstCount && i < shuffledActivation.length; i++) {
            console.log(shuffledActivation[i]);
        }

        // Animate power meter over 2 seconds
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            if (progress > 100) progress = 100;
            powerFill.style.width = progress + '%';
            powerPercent.textContent = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                overlayStatus.textContent = 'Injection Complete!';
                const ability = abilities[Math.floor(Math.random() * abilities.length)];
                abilityName.textContent = ability;
                overlayResult.style.display = 'block';
                overlayClose.style.display = 'inline-block';
                console.log(`✓ Ability Unlocked: ${ability}`);
            }
        }, 40); // 50 steps * 40ms = 2000ms
    }

    drinkCards.forEach(card => {
        card.addEventListener('click', () => {
            const drinkName = card.getAttribute('data-drink');
            activateDrink(drinkName);
        });
    });

    overlayClose.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Close overlay on background click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // ============================================
    // MEMORY FOAM TOGGLE
    // ============================================

    const memoryToggle = document.getElementById('memoryToggle');
    const memoryStatusEl = document.getElementById('memoryStatus');

    memoryToggle.addEventListener('click', async () => {
        try {
            const res = await fetch('/api/toggle-memory', { method: 'POST' });
            const data = await res.json();
            if (data.active) {
                memoryStatusEl.textContent = `ON (${data.totalMB}/${data.capMB}MB)`;
                memoryToggle.classList.add('active');
                console.log('[MEMORY] Memory foam expansion ACTIVATED');
            } else {
                memoryStatusEl.textContent = 'OFF';
                memoryToggle.classList.remove('active');
                console.log('[MEMORY] Memory foam released');
            }
        } catch (err) {
            console.error('[MEMORY] Toggle failed:', err);
        }
    });

    // Poll memory status every 10 seconds when active
    setInterval(async () => {
        if (memoryToggle.classList.contains('active')) {
            try {
                const res = await fetch('/api/memory-status');
                const data = await res.json();
                if (data.active) {
                    memoryStatusEl.textContent = `ON (${data.totalMB}/${data.capMB}MB)`;
                }
            } catch (err) {
                // silently ignore
            }
        }
    }, 10000);

    // ============================================
    // CAFFEINE OVERLOAD EASTER EGG
    // ============================================

    const headerLogo = document.getElementById('headerLogo');
    const glitchOverlay = document.getElementById('glitchOverlay');
    let logoClicks = [];

    headerLogo.addEventListener('click', () => {
        const now = Date.now();
        logoClicks.push(now);

        // Keep only clicks within last 3 seconds
        logoClicks = logoClicks.filter(t => now - t < 3000);

        if (logoClicks.length >= 7) {
            logoClicks = [];
            triggerCaffeineOverload();
        }
    });

    async function triggerCaffeineOverload() {
        // Show glitch overlay
        glitchOverlay.classList.add('active');

        // Console burst
        const overloadMessages = [
            "🚨 CAFFEINE OVERLOAD DETECTED",
            "🚨 SYSTEM ENTERING HYPERCAFFEINE STATE",
            "⚡ Neural pathways: SATURATED",
            "⚡ Dopamine levels: CRITICAL",
            "🔥 CPU temperature: RISING",
            "⚡ Developer entering hyperfocus state",
            "🚨 Code output exceeding safe limits",
            "⚡ Keyboard input speed: UNSAFE",
            "⚡ Stack frames: MULTIPLYING",
            "⚠️ Memory allocation: AGGRESSIVE",
            "🔥 Compile speed: LUDICROUS",
            "⚡ Tab count: CRITICAL",
            "🚨 Meeting immunity: ACTIVATED",
            "⚡ Imposter syndrome: SUPPRESSED",
            "⚠️ Sleep schedule: DESTROYED",
            "🔥 Git commit frequency: ALARMING",
            "⚡ Code review patience: DEPLETED",
            "🚨 Refactoring urge: UNCONTROLLABLE",
            "⚡ Documentation writing: UNLIKELY",
            "⚠️ Variable naming quality: DECLINING",
            "🔥 Copy-paste from StackOverflow: ACCELERATING",
            "⚡ TODO count: ASTRONOMICAL",
            "🚨 Technical debt: COMPOUNDING",
            "⚡ Deployment confidence: IRRATIONAL",
            "⚠️ Test coverage: ASPIRATIONAL",
            "🔥 Feature creep: INEVITABLE",
            "⚡ Scope: EXPANDING",
            "🚨 Deadline: APPROACHING",
            "⚡ Coffee consumption: EXPONENTIAL",
            "⚠️ Bathroom breaks: DEFERRED",
            "🔥 CAFFEINE OVERLOAD SEQUENCE COMPLETE"
        ];

        for (const msg of overloadMessages) {
            console.log(msg);
        }

        // Call server-side burst
        try {
            await fetch('/api/caffeine-overload', { method: 'POST' });
        } catch (err) {
            console.error('Overload API call failed:', err);
        }

        // Auto-dismiss after 4 seconds
        setTimeout(() => {
            glitchOverlay.classList.remove('active');
        }, 4000);
    }

    // ============================================
    // SMOOTH SCROLL FOR CTA
    // ============================================

    const brewBtn = document.getElementById('brewBtn');
    brewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

})();
