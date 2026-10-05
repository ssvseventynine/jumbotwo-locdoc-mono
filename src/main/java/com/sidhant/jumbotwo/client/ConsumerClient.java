package com.sidhant.jumbotwo.client; // Your newly created package

import com.sidhant.jumbotwo.model.Item;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ConsumerClient {
    public Item[] consumeItemApi() {
        RestTemplate restTemplate = new RestTemplate();
        String resourceUrl = "http://localhost:8080/api/items";
        try {
            return restTemplate.getForObject(resourceUrl, Item[].class);
        } catch (Exception e) {
            System.err.println("ConsumerClient Engine Error: " + e.getMessage());
            return new Item[0];
        }
    }
}