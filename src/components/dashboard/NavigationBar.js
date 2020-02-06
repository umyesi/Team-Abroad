import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SignedInLinks from "../auth/SignedInLinks";
import SignedOutLinks from "../auth/SignedOutLinks";
import Logo from "../../assets/images/loguna.png";
import { signOut } from "../../store/actions/authActions";

class NavigationBar extends React.Component {
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <Navbar expand="md" className="navigation-bar sticky-top">
        <Link to="/">
          <Navbar.Brand>
            <img className="Logo" src={Logo} alt="logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          className="toggle-button ml-auto"
          aria-expanded="false"
          aria-controls="basic-navbar-nav"
        />
        <div className="collapse-container">
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-lg-around"
          >
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/ourprograms" className="nav-link nav-dropdown">
              Our Programs
              <div className="dropdown-content">
                <div>
                  <Link to="/signin">English Program</Link>
                </div>
                <div>
                  <Link to="/signin">French Program</Link>
                </div>
                <div>
                  <Link to="/signin">Internship</Link>
                </div>
              </div>
            </NavLink>

            <div className="nav-dropdown nav-link">
              <div className="dropbtn">Services</div>
              <div className="dropdown-content">
                <div>
                  <Link to="/signin">Accomodation</Link>
                </div>
                <div>
                  <Link to="/signin">Activities</Link>
                </div>
                <div>
                  <Link to="/signin">Transfers</Link>
                </div>
                <div>
                  <Link to="/signin">Meals</Link>
                </div>
                <div>
                  <Link to="/signin" className="last">
                    Assistance
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-dropdown nav-link">
              Contact
              <div className="dropdown-content">
                <div>
                  <Link to="/signin">Contact Us</Link>
                </div>
                <div>
                  <Link to="/signin">Get a Quote</Link>
                </div>
                <div>
                  <Link to="/signin">About Team Abroad</Link>
                </div>
              </div>
            </div>

            <div className="auth-collapse">
              {auth.uid ? (
                <div>
                  <NavLink to="/signin" className="nav-link toggle-signin">
                    My Account
                  </NavLink>
                  <Nav.Link className="nav-link" onClick={this.props.signOut}>
                    Log Out
                  </Nav.Link>
                </div>
              ) : (
                <div>
                  <NavLink to="/signin" className="nav-link toggle-signin">
                    Sign In
                  </NavLink>
                  <NavLink to="/signup" className="nav-link  toggle-signup">
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </div>

        <Nav className="auth"> {links} </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
