package com.erlandaslisauskas.egzaminas.controller;

import com.erlandaslisauskas.egzaminas.model.Inventory;
import com.erlandaslisauskas.egzaminas.request.InventoryRegisterRequest;
import com.erlandaslisauskas.egzaminas.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/inventories")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping("/create")
    public ResponseEntity<?> createNewInventory(InventoryRegisterRequest irr) {
        return inventoryService.createNewInventory(irr);
    }

    @GetMapping("/get")
    public List<Inventory> getAllInventories() {
        return inventoryService.getAllInventories();
    }
}
