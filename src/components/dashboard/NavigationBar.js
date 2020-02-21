import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from "../auth/SignedInLinks";
import SignedOutLinks from "../auth/SignedOutLinks";
import Logo from "../../assets/images/loguna.png";
import { signOut } from "../../store/actions/authActions";

class NavigationBar extends React.Component {
  showProgramInfo = name => {
    //stopPropagation();
    window.scroll(0, 2000);
    this.props.showProgramInfo(name);
  };

  showServiceInfo = name => {
    window.scroll(0, 200);
    this.props.showServiceInfo(name);
  };

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
            <div className="nav-link nav-dropdown">
              <NavLink to="/ourprograms">Our Programs</NavLink>
              <div className="dropdown-content">
                <div>
                  <Link
                    onClick={() => this.showProgramInfo("englishInfo")}
                    to="/ourprograms"
                  >
                    English Program
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showProgramInfo("frenchInfo")}
                    to="/ourprograms"
                  >
                    French Program
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showProgramInfo("internInfo")}
                    to="/ourprograms"
                  >
                    Internship
                  </Link>
                </div>
              </div>
            </div>

            <div componentlass="span" className="nav-dropdown nav-link">
              <NavLink
                to="/services"
                //onClick={() => this.showServiceInfo("accomodation")}
                className="dropbtn"
              >
                Services
              </NavLink>
              <div className="dropdown-content">
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("accomodation")}
                    to="/services"
                  >
                    Accomodation
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("activities")}
                    to="/services"
                  >
                    Activities
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("transfers")}
                    to="/services"
                  >
                    Transfers
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("meals")}
                    to="/services"
                  >
                    Meals
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("assistance")}
                    to="/services"
                    className="last"
                  >
                    Assistance
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => this.showServiceInfo("optional")}
                    to="/services"
                    className="last"
                  >
                    Optional Services
                  </Link>
                </div>
              </div>
            </div>

            <div componentclass="span" className="nav-dropdown nav-link">
              <NavLink to="/contact">Contact</NavLink>

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
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    showProgramInfo: name => dispatch({ type: "SHOW_PROGRAM_INFO", name }),
    showServiceInfo: name => dispatch({ type: "SHOW_SERVICE_INFO", name })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
