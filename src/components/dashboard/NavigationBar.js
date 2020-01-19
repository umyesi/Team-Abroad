import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import SignedInLinks from "../pages/SignedInLinks";
import SignedOutLinks from "../pages/SignedOutLinks";
import Logo from "../../assets/images/loguna.png";

const NavigationBar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <Navbar expand="md" className="navigation-bar sticky-top">
      <Link to="/">
        <Navbar.Brand>
          <img className="Logo" src={Logo} alt="logo" />
        </Navbar.Brand>
      </Link>

      <div className="mr-auto">
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/signin" className="nav-link">
            What We Offer
          </NavLink>

          <NavDropdown title="Services" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Contact</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated Link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Contact" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Contact</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another Actions</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated Link</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="auth"> {links} </Nav>
    </Navbar>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(NavigationBar);
