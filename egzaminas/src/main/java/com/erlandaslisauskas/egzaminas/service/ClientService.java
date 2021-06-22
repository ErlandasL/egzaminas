package com.erlandaslisauskas.egzaminas.service;

import com.erlandaslisauskas.egzaminas.model.Client;
import com.erlandaslisauskas.egzaminas.model.enums.EClientType;
import com.erlandaslisauskas.egzaminas.repository.ClientRepository;
import com.erlandaslisauskas.egzaminas.repository.ClientTypeRepository;
import com.erlandaslisauskas.egzaminas.request.ClientRegisterRequest;
import com.erlandaslisauskas.egzaminas.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ClientTypeRepository clientTypeRepository;

    @Transactional
    public ResponseEntity<?> createClient(ClientRegisterRequest crr) {
        if(clientRepository.findByFirstName(crr.getFirstName()).isPresent() && clientRepository.findByLastName(crr.getLastName()).isPresent() && clientRepository.findByBirthDate(crr.getBirthDate()).isPresent()) {
            ResponseEntity.badRequest().body("Client already registered in the system");
        }

        Client client = new Client(crr.getFirstName(), crr.getLastName(), crr.getBirthDate(), crr.getPhoneNum());

        switch(crr.getClientType()) {
            case "Standard":
                client.setClientType(clientTypeRepository.findByName(EClientType.STANDARD).get());
                break;
            case "Loyal":
                client.setClientType(clientTypeRepository.findByName(EClientType.LOYAL).get());
                break;
            default:
                new MessageResponse("Client Type not exists");
        }

        if(client.getClientType().toString().isEmpty()) {
            new MessageResponse("no client type in client");
        } else {
            clientRepository.save(client);
        }

        return ResponseEntity.ok(new MessageResponse("Client created successfully"));
    }

    @Transactional
    public List<Client> getClients() {
        return clientRepository.findAll();
    }
}
