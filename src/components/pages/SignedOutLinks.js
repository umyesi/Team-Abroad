import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <Nav>
      <NavLink className="nav-link" to="/signup">
        Sign Up
      </NavLink>

      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
    </Nav>
  );
};

export default SignedOutLinks;
