package com.erlandaslisauskas.egzaminas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import java.time.Instant;
import java.util.Date;

@Entity
public class Inventory {

    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String weight;
    @NotBlank
    private int sector;
    @NotBlank
    private Date inventoryDateAdded;
    @ManyToOne
    private Client client;

    public Inventory() {

    }

    public Inventory(@NotBlank String name, @NotBlank String weight, @NotBlank int sector) {
        this.name = name;
        this.weight = weight;
        this.sector = sector;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public int getSector() {
        return sector;
    }

    public void setSector(int sector) {
        this.sector = sector;
    }

    public Date getInventoryDateAdded() {
        return inventoryDateAdded;
    }

    public void setInventoryDateAdded(Date inventoryDateAdded) {
        this.inventoryDateAdded = inventoryDateAdded;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
