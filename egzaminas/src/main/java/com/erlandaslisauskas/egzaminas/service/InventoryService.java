package com.erlandaslisauskas.egzaminas.service;

import com.erlandaslisauskas.egzaminas.model.Client;
import com.erlandaslisauskas.egzaminas.model.Inventory;
import com.erlandaslisauskas.egzaminas.repository.ClientRepository;
import com.erlandaslisauskas.egzaminas.repository.InventoryRepository;
import com.erlandaslisauskas.egzaminas.request.InventoryRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Transactional
    public ResponseEntity<?> createNewInventory(InventoryRegisterRequest irr) {

        if(clientRepository.findByFirstName(irr.getClientFirstName()).isPresent() && clientRepository.findByLastName(irr.getClientLastName()).isPresent() && clientRepository.findByBirthDate(irr.getClientBirthDate()).isPresent() ) {
            Client client = clientRepository.findByFirstName(irr.getClientFirstName()).get();
            Inventory inventory = new Inventory(irr.getName(), irr.getWeight(), irr.getSector());
            inventory.setClient(client);
            inventoryRepository.save(inventory);
           return ResponseEntity.ok().body("Inventory created successfully");
        } else {
            return ResponseEntity.badRequest().body("error with creating inventory");
        }

    }

    public List<Inventory> getAllInventories() {
        return inventoryRepository.findAll();
    }
}
