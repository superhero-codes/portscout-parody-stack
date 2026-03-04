package com.stackbucks.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class MemoryFoamService {

    private static final Logger log = LoggerFactory.getLogger(MemoryFoamService.class);
    private static final int CAP_MB = 256;

    private final List<byte[]> foamChunks = new ArrayList<>();
    private final Random random = new Random();
    private volatile boolean active = false;
    private int totalMB = 0;

    /**
     * Toggle memory foam on/off.
     * When toggled OFF, releases all allocated memory.
     */
    public synchronized boolean toggleFoam() {
        active = !active;
        if (!active) {
            foamChunks.clear();
            totalMB = 0;
            log.info("[MEMORY] Memory foam released.");
        } else {
            log.info("[MEMORY] Memory foam expansion ACTIVATED.");
        }
        return active;
    }

    /**
     * Expand foam by allocating a 1-5MB byte array.
     */
    public synchronized void expandFoam() {
        if (!active) return;

        if (totalMB >= CAP_MB) {
            log.info("[MEMORY] Memory foam cap reached ({}MB). Stabilized.", CAP_MB);
            return;
        }

        int chunkMB = 1 + random.nextInt(5); // 1-5 MB
        if (totalMB + chunkMB > CAP_MB) {
            chunkMB = CAP_MB - totalMB;
        }

        byte[] chunk = new byte[chunkMB * 1024 * 1024];
        // Fill with random data to prevent JVM optimization
        random.nextBytes(chunk);
        foamChunks.add(chunk);
        totalMB += chunkMB;

        log.info("[MEMORY] Memory foam expanded: +{}MB (total: {}MB)", chunkMB, totalMB);
    }

    /**
     * Scheduled task: expand foam every 30 seconds when active.
     */
    @Scheduled(fixedRate = 30000)
    public void scheduledExpansion() {
        if (active) {
            expandFoam();
        }
    }

    public boolean isActive() {
        return active;
    }

    public synchronized int getTotalMB() {
        return totalMB;
    }

    public int getCapMB() {
        return CAP_MB;
    }
}
