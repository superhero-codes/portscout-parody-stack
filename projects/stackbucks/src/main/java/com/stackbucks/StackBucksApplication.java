package com.stackbucks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class StackBucksApplication {

    public static void main(String[] args) {
        SpringApplication.run(StackBucksApplication.class, args);
    }
}
