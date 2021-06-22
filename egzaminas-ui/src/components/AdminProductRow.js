import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class AdminProductRow extends Component {
    render() {
        const {
            id,
            addressCity,
            addressStreet,
            addressNumber,
            sizeInSquareMeters,
            marketValue,
        } = this.props;
        return (
            <React.Fragment>
                {/* <th scope="row"></th> */}
                {/* <td>
            <img className="h-50" alt="building" src={img}></img>
          </td> */}
                <td>{addressCity}</td>
                <td>{addressStreet}</td>
                <td>{addressNumber}</td>
                <td>{sizeInSquareMeters}m²</td>
                <td>{marketValue}€</td>
                <td>
                    <Link to={`/update/${id}`}>
                        <button type="button" className="btn btn-success">
                            Update Record
                        </button>
                    </Link>
                </td>
            </React.Fragment>
        );
    }
}
