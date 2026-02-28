package com.stackbucks.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TelemetryService {

    private static final Logger log = LoggerFactory.getLogger(TelemetryService.class);
    private final Random random = new Random();
    private final AtomicLong lastWarnTime = new AtomicLong(System.currentTimeMillis());
    private volatile long nextWarnDelay = 20000 + new Random().nextInt(21000); // 20-40s

    /**
     * Every 2 seconds — log a random telemetry line.
     */
    @Scheduled(fixedRate = 2000)
    public void emitTelemetry() {
        int choice = random.nextInt(10);
        switch (choice) {
            case 0 -> log.info("[TELEMETRY] Focus Level: {}%", 40 + random.nextInt(60));
            case 1 -> log.info("[TELEMETRY] Tabs Open: {}", 3 + random.nextInt(45));
            case 2 -> log.info("[TELEMETRY] TODOs Ignored: {}", 12 + random.nextInt(836));
            case 3 -> {
                String stability = weightedStability();
                log.info("[TELEMETRY] Stack Stability: {}", stability);
            }
            case 4 -> log.info("[TELEMETRY] Sleep Debt: ∞");
            case 5 -> log.info("[TELEMETRY] Caffeine Half-Life: {}h {}m",
                    1 + random.nextInt(8), random.nextInt(60));
            case 6 -> log.info("[TELEMETRY] Code Quality Index: {}.{}",
                    1 + random.nextInt(9), random.nextInt(10));
            case 7 -> log.info("[TELEMETRY] Bugs Introduced Today: {}", random.nextInt(13));
            case 8 -> log.info("[TELEMETRY] Meetings Survived: {}", random.nextInt(6));
            case 9 -> log.info("[TELEMETRY] Deploy Confidence: {}%", 10 + random.nextInt(86));
        }
    }

    /**
     * Every 2 seconds, check if enough time has passed for a WARN/ERROR burst.
     * Uses random delay between 20-40 seconds.
     */
    @Scheduled(fixedRate = 2000)
    public void emitWarnings() {
        long now = System.currentTimeMillis();
        if (now - lastWarnTime.get() >= nextWarnDelay) {
            lastWarnTime.set(now);
            nextWarnDelay = 20000 + random.nextInt(21000); // 20-40s for next

            int choice = random.nextInt(6);
            switch (choice) {
                case 0 -> log.warn("⚠️ Caffeine levels approaching unsafe threshold.");
                case 1 -> log.warn("⚠️ Developer focus drift detected.");
                case 2 -> log.warn("⚠️ Excessive tab accumulation warning.");
                case 3 -> log.error("🚨 Energy spike anomaly detected.");
                case 4 -> log.error("🚨 Stack overflow in caffeine buffer.");
                case 5 -> log.error("🚨 Brew daemon unresponsive — restarting...");
            }
        }
    }

    /**
     * Burst 50 rapid log lines for the caffeine overload easter egg.
     */
    public void caffeineOverloadBurst() {
        String[] burstMessages = {
            "🚨 CAFFEINE OVERLOAD DETECTED",
            "⚡ Neural pathways saturated",
            "⚡ Dopamine receptors maxed out",
            "🔥 CPU temperature rising from sheer productivity",
            "⚠️ Developer entering hyperfocus state",
            "⚡ Code output exceeding safe limits",
            "🚨 Keyboard input speed: UNSAFE",
            "⚡ Stack frames multiplying uncontrollably",
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
            "🔥 Snack inventory: CRITICAL",
            "⚡ Monitor brightness: MAXIMUM",
            "🚨 Dark mode: ENGAGED",
            "⚡ Mechanical keyboard: CLACKING",
            "⚠️ Coworker patience: TESTED",
            "🔥 Slack notifications: MUTED",
            "⚡ Focus music: LOOPING",
            "🚨 IDE plugins: EXCESSIVE",
            "⚡ Font size: DECREASING",
            "⚠️ Terminal tabs: MULTIPLYING",
            "🔥 Docker containers: SPAWNING",
            "⚡ npm packages: INSTALLING",
            "🚨 node_modules: EXPANDING",
            "⚡ Build time: INCREASING",
            "⚠️ Patience: EVAPORATING",
            "🔥 Rubber duck: CONSULTED",
            "⚡ StackOverflow: REFRESHING",
            "🚨 GitHub Copilot: HALLUCINATING",
            "⚡ Regex: INCOMPREHENSIBLE",
            "⚠️ CSS: CENTERING ATTEMPT #847",
            "🔥 CAFFEINE OVERLOAD SEQUENCE COMPLETE"
        };

        for (String msg : burstMessages) {
            log.warn(msg);
        }
    }

    private String weightedStability() {
        int roll = random.nextInt(100);
        if (roll < 60) return "OK";
        if (roll < 85) return "WARN";
        return "CRITICAL";
    }
}
