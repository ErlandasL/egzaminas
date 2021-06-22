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

class BuildingRecordUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount = async () => {
    await BuildingRecordService.getBuildingById(this.state.id).then(
      (res) => {
        console.log(res.data);
        this.setState({
          addressCity: res.data.addressCity,
          addressStreet: res.data.addressStreet,
          addressNumber: res.data.addressNumber,
          ownerPersonalNumber: res.data.ownerPersonalNumber,
          ownerFirstName: res.data.ownerFirstName,
          ownerLastName: res.data.ownerLastName,
          sizeInSquareMeters: res.data.sizeInSquareMeters,
          marketValue: res.data.marketValue,
          propertyTypeName: res.data.propertyTypeName,
        });
      },
      (error) => console.log(error)
    );
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      await BuildingRecordService.updateBuildingRecord(this.state.id, {
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
          this.props.history.push("/admin");
          alert("Record updated successfully");
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
          <h1>Update Building Record</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="addressCity">
              <label htmlFor="addressCity">Address City</label>
              <input
                className={formErrors.addressCity.length > 0 ? "error" : null}
                placeholder="Address City"
                type="text"
                name="addressCity"
                value={this.state.addressCity}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressCity.length > 0 && (
                <span className="errorMessage">{formErrors.addressCity}</span>
              )}
            </div>
            <div className="addressStreet">
              <label htmlFor="addressStreet">Address Street</label>
              <input
                className={formErrors.addressStreet.length > 0 ? "error" : null}
                placeholder="Address Street"
                type="text"
                name="addressStreet"
                value={this.state.addressStreet}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressStreet.length > 0 && (
                <span className="errorMessage">{formErrors.addressStreet}</span>
              )}
            </div>
            <div className="addressNumber">
              <label htmlFor="addressNumber">Address Number</label>
              <input
                className={formErrors.addressNumber.length > 0 ? "error" : null}
                placeholder="Address Number"
                type="text"
                name="addressNumber"
                value={this.state.addressNumber}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addressNumber.length > 0 && (
                <span className="errorMessage">{formErrors.addressNumber}</span>
              )}
            </div>
            <div className="ownerPersonalNumber">
              <label htmlFor="ownerPersonalNumber">Owner Personal Number</label>
              <input
                className={
                  formErrors.ownerPersonalNumber.length > 0 ? "error" : null
                }
                placeholder="Owner Personal Number"
                type="text"
                name="ownerPersonalNumber"
                value={this.state.ownerPersonalNumber}
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
                value={this.state.ownerFirstName}
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
                value={this.state.ownerLastName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ownerLastName.length > 0 && (
                <span className="errorMessage">{formErrors.ownerLastName}</span>
              )}
            </div>
            <div className="sizeInSquareMeters">
              <label htmlFor="sizeInSquareMeters">Size in m²</label>
              <input
                className={
                  formErrors.sizeInSquareMeters.length > 0 ? "error" : null
                }
                placeholder="Size in square meters"
                type="number"
                name="sizeInSquareMeters"
                value={this.state.sizeInSquareMeters}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.sizeInSquareMeters.length > 0 && (
                <span className="errorMessage">
                  {formErrors.sizeInSquareMeters}
                </span>
              )}
            </div>
            <div className="marketValue">
              <label htmlFor="marketValue">Market Value</label>
              <input
                className={formErrors.marketValue.length > 0 ? "error" : null}
                placeholder="Market value"
                type="number"
                name="marketValue"
                value={this.state.marketValue}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.marketValue.length > 0 && (
                <span className="errorMessage">{formErrors.marketValue}</span>
              )}
            </div>
            <div className="propertyTypeName">
              <label htmlFor="propertyTypeName">Property Type Name</label>
              <select
                value={this.state.propertyTypeName}
                onChange={this.handleDropdownChange}
              >
                <option value="House">House</option>
                <option value="Industrial">Industrial</option>
                <option value="Apartment">Apartment</option>
              </select>
              {/* <input
                className={
                  formErrors.propertyTypeName.length > 0 ? "error" : null
                }
                placeholder="Property Type Name"
                type="text"
                name="propertyTypeName"
                noValidate
                onChange={this.handleChange}
              /> */}
              {/* {formErrors.propertyTypeName.length > 0 && (
                <span className="errorMessage">
                  {formErrors.propertyTypeName}
                </span>
              )} */}
            </div>
            <div className="createRecord">
              <button type="submit">Update Building Record</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BuildingRecordUpdate;
