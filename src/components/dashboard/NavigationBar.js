import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import SignedInLinks from "../auth/SignedInLinks";
import SignedOutLinks from "../auth/SignedOutLinks";
import Logo from "../../assets/images/loguna.png";
import { signOut } from "../../store/actions/authActions";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      visible: true,
      prevScrollpos: window.pageYOffset,
      programs: false,
      services: false,
      contact: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousedown", this.dropdown);
    window.addEventListener("mousedown", this.toggleCollapse);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousedown", this.dropdown, false);
    window.removeEventListener("mousedown", this.toggleCollapse, false);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollpos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollpos;
    const { location } = this.props;

    if (!this.state.collapse) {
      this.setState({
        collapse: true
      });
    } else if (
      currentScrollpos > 100 &&
      location.pathname !== "/signup" &&
      location.pathname !== "/signin" &&
      (this.state.visible || !this.state.visible)
    ) {
      this.setState({
        prevScrollpos: currentScrollpos,
        visible,
        dropdown: false
      });
    }
  };

  toggleCollapse = e => {
    setTimeout(() => {
      if (e.target.id === "toggle-button") {
        this.setState({ collapse: !this.state.collapse });
      } else if (e.target.className === "arrow") {
        return false;
      } else {
        this.setState({ collapse: true });
      }
    }, 200);
  };

  showProgramInfo = name => {
    setTimeout(() => {
      window.scroll(0, 2500);
    }, 500);
    this.props.showProgramInfo(name);
  };

  showServiceInfo = name => {
    setTimeout(() => {
      window.scroll(0, 200);
    }, 500);
    this.props.showServiceInfo(name);
  };

  dropdown = e => {
    console.log(e.target)
    if (e.target.id === "programs") {
      this.setState({
        programs: !this.state.programs,
        services: false,
        contact: false
      });
    } else if (e.target.id === "services") {
      this.setState({
        services: !this.state.services,
        contact: false,
        programs: false
      });
    } else if (e.target.id === "contact") {
      this.setState({
        contact: !this.state.contact,
        services: false,
        programs: false
      });
    } else if (e.target.className === "drp-item") {
      console.log("djsk")
      setTimeout(() => {
        this.setState({
          contact: false,
          services: false,
          programs: false
        });
      }, 500);

    } else {
      this.setState({ contact: false, services: false, programs: false });
    }
    // if (this.node.contains(e.target)) {
    //   this.setState({ dropdown: !this.state.dropdown });
    // }
  };

  render() {
    //console.log(this.props);
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div ref={node => (this.node = node)} className="nav-container">
        <Navbar
          expand="md"
          className={`nav-content ${this.state.visible ? "" : "nav-hidden"}`}
        >
          <Link to="/">
            <Navbar.Brand>
              <img className="Logo" src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>

          <button
            //onClick={this.toggleCollapse}
            className="navbar-toggler toggle-button ml-auto collapsed"
            id="toggle-button"
            type="button"
            data-toggle="collapse"
            data-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="toggle-button" className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse-container">
            <div
              className={`justify-content-lg-around navbar-collapse collapse-content ${
                this.state.collapse ? "collapse " : "collapse show "
                }`}
              id="basic-navbar-nav"
            >
              <NavLink
                //onClick={this.toggleCollapse}
                to="/"
                exact
                className="nav-link navigation-link"
              >
                Home
              </NavLink>

              <div className="nav-link nav-dropdown navigation-link">
                <NavLink to="/ourprograms">Our Programs</NavLink>

                <span id="programs" className="arrow"></span>
                <div
                  className={`dropdown-content ${
                    this.state.programs ? "show" : ""
                    }`}
                >
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("englishInfo")}
                      to="/ourprograms"
                      className="drp-item"
                    >
                      English Program
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("frenchInfo")}
                      to="/ourprograms"
                      className="drp-item"
                    >
                      French Program
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("internInfo")}
                      to="/ourprograms"
                      className="drp-item"
                    >
                      Internship
                    </Link>
                  </div>
                </div>
              </div>

              <div
                componentlass="span"
                className="nav-dropdown nav-link navigation-link services"
              >
                <span id="services" className="arrow"></span>
                <NavLink to="/services" className="dropbtn">
                  Services
                </NavLink>
                <div
                  className={`dropdown-content ${
                    this.state.services ? "show" : ""
                    }`}
                >
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("accomodation")}
                      to="/services"
                      className="drp-item"
                    >
                      Accomodation
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("activities")}
                      to="/services"
                      className="drp-item"
                    >
                      Activities
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("transfers")}
                      to="/services"
                      className="drp-item"
                    >
                      Transfers
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("meals")}
                      to="/services"
                      className="drp-item"
                    >
                      Meals
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("assistance")}
                      to="/services"
                      className="last drp-item"
                    >
                      Assistance
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("optional")}
                      to="/services"
                      className="last drp-item"
                    >
                      Optional Services
                    </Link>
                  </div>
                </div>
              </div>

              <div
                //componentclass="span"
                className="nav-dropdown nav-link navigation-link d-none d-md-block"
              >
                <span id="contact" className="arrow"></span>
                <NavLink to="/contact">Contact</NavLink>

                <div
                  className={`dropdown-content ${
                    this.state.contact ? "show" : ""
                    }`}
                >
                  <div>
                    <NavLink className="drp-item" to="/contact">Contact Us</NavLink>
                  </div>
                  <div>
                    <NavLink className="drp-item" to="/quote">Get a Quote</NavLink>
                  </div>
                  <div>
                    <NavLink className="drp-item" to="/about-us">About Team Abroad</NavLink>
                  </div>
                </div>
              </div>
              <NavLink
                //onClick={this.toggleCollapse}
                to="/contact"
                exact
                className="nav-link navigation-link d-md-none"
              >
                Contact Us
              </NavLink>
              <NavLink
                //onClick={this.toggleCollapse}
                to="/quote"
                exact
                className="nav-link navigation-link d-md-none"
              >
                Get a Quote
              </NavLink>
              <NavLink
                //onClick={this.toggleCollapse}
                to="/about-us"
                exact
                className="nav-link navigation-link d-md-none"
              >
                About Team Abroad
              </NavLink>

              <div className="auth-collapse">
                {auth.uid ? (
                  <div>
                    <NavLink to="/signin" className="nav-link toggle-signin">
                      My Account
                    </NavLink>
                    <Nav.Link className="nav-link navigation-link" onClick={this.props.signOut}>
                      Log Out
                    </Nav.Link>
                  </div>
                ) : (
                    <div>
                      <NavLink to="/signin" className="nav-link navigation-link">
                        Sign In
                    </NavLink>
                      <NavLink to="/signup" className="nav-link  navigation-link">
                        Sign Up
                    </NavLink>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <Nav className="auth"> {links} </Nav>
        </Navbar>
      </div>
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavigationBar);
//export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
