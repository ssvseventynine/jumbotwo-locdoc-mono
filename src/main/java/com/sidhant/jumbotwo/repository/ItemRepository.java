package com.sidhant.jumbotwo.repository;

import com.sidhant.jumbotwo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    // Inherits standard database methods: save(), findAll(), findById(), deleteById()
}