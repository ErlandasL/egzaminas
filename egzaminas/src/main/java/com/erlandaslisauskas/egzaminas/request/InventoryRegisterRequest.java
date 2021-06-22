package com.erlandaslisauskas.egzaminas.request;

import java.util.Date;

public class InventoryRegisterRequest {

    private String name;
    private String weight;
    private int sector;
    private String clientFirstName;
    private String clientLastName;
    private Date clientBirthDate;

    public InventoryRegisterRequest(String name, String weight, int sector, String clientFirstName, String clientLastName, Date clientBirthDate) {
        this.name = name;
        this.weight = weight;
        this.sector = sector;
        this.clientFirstName = clientFirstName;
        this.clientLastName = clientLastName;
        this.clientBirthDate = clientBirthDate;
    }

    public InventoryRegisterRequest() {

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

    public String getClientFirstName() {
        return clientFirstName;
    }

    public void setClientFirstName(String clientFirstName) {
        this.clientFirstName = clientFirstName;
    }

    public String getClientLastName() {
        return clientLastName;
    }

    public void setClientLastName(String clientLastName) {
        this.clientLastName = clientLastName;
    }

    public Date getClientBirthDate() {
        return clientBirthDate;
    }

    public void setClientBirthDate(Date clientBirthDate) {
        this.clientBirthDate = clientBirthDate;
    }
}
