import React, { Component } from "react";
import BuildingRecordService from "../services/building-record";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class BuildingRecordCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressCity: "",
      addressStreet: "",
      addressNumber: "",
      ownerPersonalNumber: "",
      ownerFirstName: "",
      ownerLastName: "",
      sizeInSquareMeters: null,
      marketValue: null,
      propertyTypeName: "House",
      formErrors: {
        addressCity: "",
        addressStreet: "",
        addressNumber: "",
        ownerPersonalNumber: "",
        ownerFirstName: "",
        ownerLastName: "",
        sizeInSquareMeters: "",
        marketValue: "",
        // propertyTypeName: "",
      },
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      await BuildingRecordService.createBuildingRecord({
        addressCity: this.state.addressCity,
        addressStreet: this.state.addressStreet,
        addressNumber: this.state.addressNumber,
        ownerPersonalNumber: this.state.ownerPersonalNumber,
        ownerFirstName: this.state.ownerFirstName,
        ownerLastName: this.state.ownerLastName,
        sizeInSquareMeters: +this.state.sizeInSquareMeters,
        marketValue: +this.state.marketValue,
        propertyTypeName: this.state.propertyTypeName,
      }).then(
        (response) => {
          console.log(response);
          window.location.reload();
          alert("Record created successfully");
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );

      console.log(`
            --SUBMITTING--
            Address City: ${this.state.addressCity}
            Address Street: ${this.state.addressStreet}
            Address Number: ${this.state.addressNumber}
            Owner PN:  ${this.state.ownerPersonalNumber}
            owner First Name: ${this.state.ownerFirstName}
            owner Last Name: ${this.state.ownerLastName}
            sizeInSquareMeters: ${this.state.sizeInSquareMeters}
            marketValue: ${this.state.marketValue}
            propertyTypeName: ${this.state.propertyTypeName}
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleDropdownChange = (e) => {
    this.setState({ propertyTypeName: e.target.value });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "addressCity":
        formErrors.addressCity =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "addressStreet":
        formErrors.addressStreet =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "addressNumber":
        formErrors.addressNumber =
          value.length < 1 ? "minimum 1 characater required" : "";
        break;
      case "ownerPersonalNumber":
        formErrors.ownerPersonalNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ownerFirstName":
        formErrors.ownerFirstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ownerLastName":
        formErrors.ownerLastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "sizeInSquareMeters":
        formErrors.sizeInSquareMeters =
          +value < +1 ? "minimum 1 characater required" : "";
        break;
      case "marketValue":
        formErrors.marketValue =
          +value < +1 ? "minimum 1 characater required" : "";
        break;
      //   case "propertyTypeName":
      //     formErrors.propertyTypeName =
      //       value === "Apartment" || value === "House" || value === "Industrial"
      //         ? ""
      //         : "Type in: Industrial, Apartment or House";
      //     break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Client Inventory</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="addressCity">
              <label htmlFor="addressCity">Inventory Name</label>
              <input
                className={formErrors.addressCity.length > 0 ? "error" : null}
                placeholder="Inventory Name"
                type="text"
                name="addressCity"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressCity.length > 0 && (
                <span className="errorMessage">{formErrors.addressCity}</span>
              )}
            </div>
            <div className="addressStreet">
              <label htmlFor="addressStreet">Inventory Weight</label>
              <input
                className={formErrors.addressStreet.length > 0 ? "error" : null}
                placeholder="Inventory Weight"
                type="text"
                name="addressStreet"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressStreet.length > 0 && (
                <span className="errorMessage">{formErrors.addressStreet}</span>
              )}
            </div>
            <div className="addressNumber">
              <label htmlFor="addressNumber">Sector</label>
              <input
                className={formErrors.addressNumber.length > 0 ? "error" : null}
                placeholder="Sector"
                type="number"
                name="addressNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressNumber.length > 0 && (
                <span className="errorMessage">{formErrors.addressNumber}</span>
              )}
            </div>
            <div className="ownerPersonalNumber">
              <label htmlFor="ownerPersonalNumber">Owner Date Of Birth</label>
              <input
                className={
                  formErrors.ownerPersonalNumber.length > 0 ? "error" : null
                }
                placeholder="Owner Date Of Birth"
                type="date"
                name="ownerPersonalNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ownerPersonalNumber.length > 0 && (
                <span className="errorMessage">
                  {formErrors.ownerPersonalNumber}
                </span>
              )}
            </div>
            <div className="ownerFirstName">
              <label htmlFor="ownerFirstName">Owner First Name</label>
              <input
                className={
                  formErrors.ownerFirstName.length > 0 ? "error" : null
                }
                placeholder="Owner First Name"
                type="text"
                name="ownerFirstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ownerFirstName.length > 0 && (
                <span className="errorMessage">
                  {formErrors.ownerFirstName}
                </span>
              )}
            </div>
            <div className="ownerLastName">
              <label htmlFor="ownerLastName">Owner Last Name</label>
              <input
                className={formErrors.ownerLastName.length > 0 ? "error" : null}
                placeholder="Owner Last Name"
                type="text"
                name="ownerLastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ownerLastName.length > 0 && (
                <span className="errorMessage">{formErrors.ownerLastName}</span>
              )}
            </div>
            <div className="createRecord">
              <button type="submit">Create Client Inventory</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BuildingRecordCreation;
