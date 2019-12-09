import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .nav-link {
    padding: 0.5rem 5rem;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .active {
    color: black;
    &:hover {
      color: black;
    }
  }
`;

const SecondNav = () => {
  return (
    <Styles>
      <Navbar expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/StudyProgrammes" className="nav-link">
            Study Programmes
          </NavLink>
          <Link
            className="frontpage-job"
            to={{
              pathname: "/modal/1",
              state: { modal: true }
            }}
          >
            Modal1
          </Link>

          <NavLink to="/Services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>

          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              <NavLink to="/Contact">Contact</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              <NavLink to="/Contact">Another Action</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              <NavLink to="/Contact">Something else</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">
              <NavLink to="/Contact">Separated Link</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default withRouter(SecondNav);
