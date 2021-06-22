package com.erlandaslisauskas.egzaminas.repository;

import com.erlandaslisauskas.egzaminas.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findByFirstName (String firstName);
    Optional<Client> findByLastName (String lastName);
    Optional<Client> findByBirthDate(Date birthDate);
}
