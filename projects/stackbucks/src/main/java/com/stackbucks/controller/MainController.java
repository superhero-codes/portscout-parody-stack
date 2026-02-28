package com.stackbucks.controller;

import com.stackbucks.service.MemoryFoamService;
import com.stackbucks.service.TelemetryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class MainController {

    private final MemoryFoamService memoryFoamService;
    private final TelemetryService telemetryService;

    public MainController(MemoryFoamService memoryFoamService, TelemetryService telemetryService) {
        this.memoryFoamService = memoryFoamService;
        this.telemetryService = telemetryService;
    }

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/api/toggle-memory")
    @ResponseBody
    public Map<String, Object> toggleMemory() {
        boolean active = memoryFoamService.toggleFoam();
        return Map.of(
            "active", active,
            "totalMB", memoryFoamService.getTotalMB(),
            "capMB", memoryFoamService.getCapMB()
        );
    }

    @GetMapping("/api/memory-status")
    @ResponseBody
    public Map<String, Object> memoryStatus() {
        return Map.of(
            "active", memoryFoamService.isActive(),
            "totalMB", memoryFoamService.getTotalMB(),
            "capMB", memoryFoamService.getCapMB()
        );
    }

    @PostMapping("/api/caffeine-overload")
    @ResponseBody
    public Map<String, String> caffeineOverload() {
        telemetryService.caffeineOverloadBurst();
        return Map.of("status", "OVERLOADED");
    }
}
