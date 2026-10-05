package com.sidhant.jumbotwo.controller;

import com.sidhant.jumbotwo.model.Item;
import com.sidhant.jumbotwo.repository.ItemRepository;
import com.sidhant.jumbotwo.client.ConsumerClient; // Updated import line
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ConsumerClient consumerClient;

    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @GetMapping("/consume")
    public Item[] getConsumedItems() {
        return consumerClient.consumeItemApi();
    }

    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }
}