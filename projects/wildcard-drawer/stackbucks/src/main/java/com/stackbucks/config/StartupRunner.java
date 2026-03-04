package com.stackbucks.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Component
public class StartupRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(StartupRunner.class);
    private final Random random = new Random();

    private static final List<String> STARTUP_MESSAGES = List.of(
        "Initializing Caffeine Engine...",
        "Hydrating Beans...",
        "Compiling Roast Profile...",
        "Injecting Neural Foam...",
        "Optimizing Developer Throughput...",
        "Loading Quantum Espresso Module...",
        "Calibrating HyperBrew Subsystem...",
        "Warming Debug Dark Roast Pipeline...",
        "Initializing Infinite Loop Prevention...",
        "Garbage Collection Frappuccino: READY",
        "Stack Overflow Shot: LOADED",
        "Syncing Caffeine Telemetry Grid...",
        "Establishing Neural Drip Connection...",
        "Verifying Bean Integrity...",
        "Activating Brew Daemon...",
        "Mounting Espresso Filesystem...",
        "Indexing Roast Profiles...",
        "Compiling Latte Art Shaders...",
        "Initializing Foam Physics Engine...",
        "Loading Barista Neural Network...",
        "Calibrating Taste Prediction Model...",
        "Establishing Caffeine WebSocket...",
        "Registering Brew Event Listeners...",
        "Optimizing Grind Particle Distribution...",
        "Initializing Steam Pressure Regulator...",
        "Loading Customer Addiction Profiles...",
        "Activating Aroma Diffusion Module...",
        "Syncing with Global Coffee Grid...",
        "Verifying Milk Foam Density...",
        "Initializing Pour-Over Algorithm...",
        "Bootstrapping Drip Injection Framework...",
        "Resolving Bean Dependencies (dark-roast:3.2.1)...",
        "Compiling CoffeeScript (the real one)...",
        "Warming Up JIT Brew Compiler...",
        "Loading Espresso Machine Learning Model...",
        "Initializing Caffeine Garbage Collector...",
        "Registering Brew Lifecycle Hooks...",
        "Mounting /dev/coffee filesystem...",
        "Calibrating Dopamine Response Curve...",
        "Loading Developer Productivity Heuristics...",
        "Initializing Procrastination Firewall...",
        "Compiling Meeting Avoidance Strategies...",
        "Syncing Circadian Rhythm Override...",
        "Loading Emergency Caffeine Reserves...",
        "Activating Code Review Patience Module...",
        "Initializing Deadline Panic Suppressor...",
        "Calibrating Imposter Syndrome Dampener...",
        "Loading Stack Trace Decoder Ring...",
        "Warming Microservice Espresso Mesh...",
        "Initializing Kubernetes Koffee Pods...",
        "Deploying Brew Canary Instance...",
        "Establishing gRPC (ground Roast Protocol Coffee)...",
        "Loading OAuth2 (Open Aroma Token Handshake)...",
        "Initializing REST (Roast Extraction Service Transport)...",
        "Calibrating CI/CD (Coffee Integration / Continuous Drip)...",
        "Verifying TLS (Thermal Latte Security)...",
        "Loading DNS (Drip Name System) records...",
        "Initializing TCP (Thermal Coffee Protocol)..."
    );

    @Override
    public void run(String... args) throws Exception {
        // Phase 1: Deliberate calibration pause
        log.info("☕ Calibrating espresso manifold… (2.7s)");
        Thread.sleep(2700);

        // Phase 2: Rapid startup messages (30-60 lines)
        int messageCount = 30 + random.nextInt(31); // 30-60
        List<String> shuffled = new ArrayList<>(STARTUP_MESSAGES);
        Collections.shuffle(shuffled, random);

        for (int i = 0; i < messageCount && i < shuffled.size(); i++) {
            log.info(shuffled.get(i));
            Thread.sleep(50 + random.nextInt(101)); // 50-150ms
        }

        // Phase 3: Final online message
        log.info("☕ StackBucks Caffeine Engine ONLINE — Port 8088");
    }
}
