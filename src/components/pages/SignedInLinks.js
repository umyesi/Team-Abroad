import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .signedinlinks {
    a {
      cursor: pointer;
    }
  }
`;

const SignedInLinks = props => {
  return (
    <Styles>
      <Nav>
        <NavLink className="nav-link" to="/signup" onClick={props.signOut}>
          Log Out
        </NavLink>

        <NavLink className="nav-link" to="/login">
          GG
        </NavLink>
      </Nav>
    </Styles>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
