import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand nav-item">
          <i className="fas fa-building">Client Inventories Home</i>
        </NavLink>

        <NavLink to="/create" className="nav-link nav-item">
          Create client
          {/* <span className="sr-only">(current)</span> */}
        </NavLink>
        <NavLink to="/create-inventory" className="nav-link nav-item">
          Create Inventory
        </NavLink>
        <NavLink to="/admin" className="nav-link nav-item">
          Admin
          {/* <span className="sr-only">(current)</span> */}
        </NavLink>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainRed) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: var(--buttonBlue) !important;
  }
  .navbar-brand {
    color: gold;
  }
  .navbar-brand:hover {
    color: var(--buttonBlue) !important;
  }
`;
