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
    console.log(e.target)
    setTimeout(() => {
      if (e.target.id === "toggle-button") {
        this.setState({ collapse: !this.state.collapse });
      } else if (e.target.closest(".clicked")) {
        this.setState({ collapse: true });
      } else if (e.target.closest(".nav-container")) {
        return false;
      } else {
        this.setState({ collapse: true });
      }
    }, 200);
  };

  showProgramInfo = name => {
    setTimeout(() => {
      window.scroll(0, 2200);
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
    } else if (e.target.closest(".drp-item")) {
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
          <Link className="clicked" to="/">
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
                className="nav-link navigation-link clicked"
              >
                Home
              </NavLink>

              <div className="nav-link nav-dropdown navigation-link">
                <NavLink to="/ourprograms" className="clicked">Our Programs</NavLink>


                <div id="programs" className={`arrow-container ${
                  this.state.programs ? "arrow-active" : ""
                  }`}><i id="programs" className="arrow-down"></i></div>
                <div
                  className={`dropdown-content ${
                    this.state.programs ? "show" : ""
                    }`}
                >
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("englishInfo")}
                      to="/ourprograms"
                      className={`drp-item ${
                        this.props.programInfo.englishInfo ? "active" : ""
                        } `}
                    >
                      English Program
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("frenchInfo")}
                      to="/ourprograms"
                      className={`drp-item ${
                        this.props.programInfo.frenchInfo ? "active" : ""
                        } `}
                    >
                      French Program
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showProgramInfo("internInfo")}
                      to="/ourprograms"
                      className={`drp-item ${
                        this.props.programInfo.internInfo ? "active" : ""
                        } `}
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
                <NavLink className="clicked" to="/services" >
                  Services
                </NavLink>
                <div id="services" className={`arrow-container ${
                  this.state.services ? "arrow-active" : ""
                  }`}><i id="services" className="arrow-down"></i></div>
                <div
                  className={`dropdown-content ${
                    this.state.services ? "show" : ""
                    }`}
                >
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("accomodation")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.accomodation ? "active" : ""
                        } `}
                    >
                      Accomodation
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("activities")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.activities ? "active" : ""
                        } `}
                    >
                      Activities
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("transfers")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.transfers ? "active" : ""
                        } `}
                    >
                      Transfers
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("meals")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.meals ? "active" : ""
                        } `}
                    >
                      Meals
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("assistance")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.assistance ? "active" : ""
                        } `}
                    >
                      Assistance
                    </Link>
                  </div>
                  <div>
                    <Link
                      onClick={() => this.showServiceInfo("optional")}
                      to="/services"
                      className={`drp-item ${
                        this.props.serviceInfo.optional ? "active" : ""
                        } `}
                    >
                      Optional Services
                    </Link>
                  </div>
                </div>
              </div>

              <div
                componentclass="span"
                //  className="nav-dropdown nav-link navigation-link d-none d-md-block"
                className="nav-dropdown nav-link navigation-link"
              >
                <NavLink className="clicked" to="/contact">Contact</NavLink>
                <div id="contact" className={`arrow-container ${
                  this.state.contact ? "arrow-active" : ""
                  }`}><i id="contact" className="arrow-down"></i></div>
                <div
                  className={`dropdown-content ${
                    this.state.contact ? "show" : ""
                    }`}
                >
                  <div>
                    <NavLink className="drp-item" to="/contact/contact-us">Contact Us</NavLink>
                  </div>
                  <div>
                    <NavLink className="drp-item" to="/contact/quote">Get a Quote</NavLink>
                  </div>
                  <div>
                    <NavLink className="drp-item" to="/contact/about-us">About Team Abroad</NavLink>
                  </div>
                </div>
              </div>

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
    auth: state.firebase.auth,
    programInfo: state.programInfo,
    serviceInfo: state.serviceInfo
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
