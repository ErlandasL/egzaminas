package com.erlandaslisauskas.egzaminas.model;

import com.erlandaslisauskas.egzaminas.model.enums.EClientType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
public class Client {

    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotBlank
    private Date birthDate;
    @NotBlank
    private String phoneNum;
    @OneToOne(cascade = CascadeType.DETACH)
    @JoinTable(name = "client_type", joinColumns = @JoinColumn(name = "client_id"), inverseJoinColumns = @JoinColumn(name = "client_type_id"))
    private ClientType clientType;
    @OneToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Inventory> inventories;

    private Client() {

    }

    public Client(@NotBlank String firstName, @NotBlank String lastName, @NotBlank Date birthDate, @NotBlank String phoneNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNum = phoneNum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(List<Inventory> inventories) {
        this.inventories = inventories;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public ClientType getClientType() {
        return clientType;
    }

    public void setClientType(ClientType clientType) {
        this.clientType = clientType;
    }
}
