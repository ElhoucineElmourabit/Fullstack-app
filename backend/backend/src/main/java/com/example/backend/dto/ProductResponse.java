package com.example.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProductResponse {
    private Long id;
    private String name;
    private String description;
    private double price;
    private int quantity;
    private LocalDateTime createdAt;
}