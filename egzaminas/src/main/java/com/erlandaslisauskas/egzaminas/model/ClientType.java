package com.erlandaslisauskas.egzaminas.model;

import com.erlandaslisauskas.egzaminas.model.enums.EClientType;

import javax.persistence.*;

@Entity
@Table(name = "client_types")
public class ClientType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EClientType name;

    public ClientType(EClientType name) {
        this.name = name;
    }

    public ClientType() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public EClientType getName() {
        return name;
    }

    public void setName(EClientType name) {
        this.name = name;
    }

    @Override
    public String toString() {
        if(name == EClientType.LOYAL) {
            return "Loyal";
        }
        else return "Standard";
    }
}
