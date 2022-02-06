package com.backend.domain.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:80")
                .allowedOrigins("http://jolove.kro.kr:80")
                .allowedOrigins("http://jolove.kro.kr:3000")
                .allowedOrigins("http://jolove.kro.kr:8080")
        ;
    }
}