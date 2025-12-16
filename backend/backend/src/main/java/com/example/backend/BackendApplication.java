package com.example.backend;

import com.example.backend.entities.Product;
import com.example.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    private final ProductRepository productRepository;

    @Bean
    CommandLineRunner initData() {
        return args -> {
            if (productRepository.count() == 0) {
                Product p1 = new Product();
                p1.setName("Laptop");
                p1.setDescription("Business laptop");
                p1.setPrice(1200);
                p1.setQuantity(10);

                Product p2 = new Product();
                p2.setName("Phone");
                p2.setDescription("Android smartphone");
                p2.setPrice(600);
                p2.setQuantity(20);

                productRepository.save(p1);
                productRepository.save(p2);
            }
        };
    }
}
