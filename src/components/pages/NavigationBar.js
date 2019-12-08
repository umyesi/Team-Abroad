import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/loguna.png";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    padding: 0 0;
  }
  .Logo {
    width: 130px;
  }
  .nav-link {
    color: #bbb;
  }
`;

const NavigationBar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <Styles>
      <Navbar className="navbar">
        <Link to="/">
          <Navbar.Brand>
            <img className="Logo" src={Logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto"> {links} </Nav>
      </Navbar>
    </Styles>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(NavigationBar);
