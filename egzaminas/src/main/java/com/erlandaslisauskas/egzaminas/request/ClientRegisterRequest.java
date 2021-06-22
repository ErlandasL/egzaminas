package com.erlandaslisauskas.egzaminas.request;

import java.util.Date;

public class ClientRegisterRequest {

    private String firstName;
    private String lastName;
    private Date birthDate;
    private String phoneNum;
    private String clientType;

    public ClientRegisterRequest() {

    }

    public ClientRegisterRequest(String firstName, String lastName, Date birthDate, String phoneNum, String clientType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNum = phoneNum;
        this.clientType = clientType;
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

    public String getClientType() {
        return clientType;
    }

    public void setClientType(String clientType) {
        this.clientType = clientType;
    }
}
