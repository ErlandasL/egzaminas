package com.erlandaslisauskas.egzaminas.repository;

import com.erlandaslisauskas.egzaminas.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}
