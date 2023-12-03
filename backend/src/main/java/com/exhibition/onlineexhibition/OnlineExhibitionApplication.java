package com.exhibition.onlineexhibition;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.onlineexhibition.backend.controllers")

public class OnlineExhibitionApplication {

    public static void main(String[] args) {

        SpringApplication.run(OnlineExhibitionApplication.class, args);
    }

}
