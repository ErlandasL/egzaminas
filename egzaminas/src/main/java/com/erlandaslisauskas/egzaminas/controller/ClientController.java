package com.erlandaslisauskas.egzaminas.controller;

import com.erlandaslisauskas.egzaminas.model.Client;
import com.erlandaslisauskas.egzaminas.request.ClientRegisterRequest;
import com.erlandaslisauskas.egzaminas.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/create")
    public ResponseEntity<?> createClient(@RequestBody ClientRegisterRequest crr) {
        return clientService.createClient(crr);
    }

    @GetMapping("/getclients")
    public List<Client> getClients() {
        return clientService.getClients();
    }
}
