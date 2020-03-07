import React from "react";
import { NavLink, Link } from "react-router-dom";
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
      prevScrollpos: window.pageYOffset
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollpos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollpos;
    console.log(currentScrollpos)

    if (!this.state.collapse) {
      this.setState({
        collapse: true
      });
    } else if (currentScrollpos > 70 && (this.state.visible || !this.state.visible)) {
      this.setState({
        prevScrollpos: currentScrollpos,
        visible
      });
    }
  };

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  showProgramInfo = name => {
    setTimeout(() => {
      window.scroll(0, 2000);
    }, 500);
    this.props.showProgramInfo(name);
  };

  showServiceInfo = name => {
    setTimeout(() => {
      window.scroll(0, 200);
    }, 500);
    this.props.showServiceInfo(name);
  };

  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div className="nav-container">
        <Navbar
          expand="md"
          className="navigation-bar"
          className={`navigation-bar ${this.state.visible ? "" : "hidden"}`}
        >
          <Link to="/">
            <Navbar.Brand>
              <img className="Logo" src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>

          <button
            onClick={this.toggleCollapse}
            className="navbar-toggler toggle-button ml-auto collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse-container">
            <div
              className={`justify-content-lg-around navbar-collapse ${
                this.state.collapse ? "collapse " : "collapse show "
              }`}
              id="basic-navbar-nav"
            >
              <NavLink
                onClick={this.toggleCollapse}
                to="/"
                exact
                className="nav-link"
              >
                Home
              </NavLink>
              <div className="nav-link nav-dropdown">
                <NavLink onClick={this.toggleCollapse} to="/ourprograms">
                  Our Programs
                </NavLink>
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
                  onClick={this.toggleCollapse}
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
                <NavLink onClick={this.toggleCollapse} to="/contact">
                  Contact
                </NavLink>

                <div className="dropdown-content">
                  <div>
                    <Link to="/contact">Contact Us</Link>
                  </div>
                  <div>
                    <Link to="/quote">Get a Quote</Link>
                  </div>
                  <div>
                    <Link to="/about-us">About Team Abroad</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
