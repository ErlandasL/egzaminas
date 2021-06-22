package com.erlandaslisauskas.egzaminas.repository;

import com.erlandaslisauskas.egzaminas.model.ClientType;
import com.erlandaslisauskas.egzaminas.model.enums.EClientType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientTypeRepository extends JpaRepository<ClientType, Long> {
    Optional<ClientType> findByName(EClientType name);
}
