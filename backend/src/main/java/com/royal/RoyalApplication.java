package com.royal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@EnableMongoRepositories
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class RoyalApplication {

    public static void main(String[] args) {
        SpringApplication.run(RoyalApplication.class, args);
    }


}

