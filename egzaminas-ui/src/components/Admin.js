import React from "react";
import { Link } from "react-router-dom";
import BuildingRecordService from "../services/building-record";
import AdminProductRow from "../components/AdminProductRow";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
    };
    this.deleteBuildingRecord = this.deleteBuildingRecord.bind(this);
  }

  componentDidMount = async () => {
    await BuildingRecordService.getAllBuildingRecords().then(
      (res) => {
        console.log(res.data);
        this.setState({ records: res.data });
      },
      (error) => console.log(error)
    );
  };

  deleteBuildingRecord = (id) => {
    BuildingRecordService.deleteBuildingRecordById(id).then(
      (res) => {
        console.log(res);
        this.setState({
          records: this.state.records.filter((g) => g.id !== id),
        });
      },
      (error) => console.log(error)
    );
  };

  render() {
    console.log(this.state.records);
    if (this.state.records) {
      return (
        <div className="bg-lightblue">
          <div className="container">
            <Link to="/create">
              <button type="button" className="btn btn-success mt-3">
                Add new record
              </button>
            </Link>
            <table className="table">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">City</th>
                  <th scope="col">Street</th>
                  <th scope="col">Number</th>
                  <th scope="col">Size</th>
                  <th scope="col">Market Value</th>
                  <th scope="col">Update Records</th>
                  <th scope="col">Delete Records</th>
                </tr>
              </thead>
              <tbody>
                {this.state.records.map(({ id, ...otherProps }) => (
                  <tr key={id}>
                    <AdminProductRow
                      id={id}
                      {...otherProps}

                      // addressCity={item.addressCity}
                      // firstName={item.firstName}
                      // lastName={item.lastName}
                    />
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => this.deleteBuildingRecord(id)}
                      >
                        Delete Record
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Admin;
