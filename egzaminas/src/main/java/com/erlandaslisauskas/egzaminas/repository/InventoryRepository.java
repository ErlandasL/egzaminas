package com.erlandaslisauskas.egzaminas.repository;

import com.erlandaslisauskas.egzaminas.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
