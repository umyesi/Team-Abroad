import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
//import { FaUser } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import AuthModal from "./AuthModal";

class SignedOutLinks extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  // open modal
  handleModalOpen = (e, currIndex) => {
    e.preventDefault();
    this.props.onOpen(currIndex);
  };

  render() {
    return (
      <Nav className="signed-out-links">
        <AuthModal />
        <Dropdown
          className="d-inline-block mr-3 display-block"
          onClick={this.onMouseEnter}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle tag="a" className="nav-link">
            {/* <FaUser size={24} className="icon" /> */}
            <AiOutlineUser size={28} className="icon" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem
              className="dropdown-login-button"
              onClick={event => this.handleModalOpen(event, 0)}
            >
              Sign In
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              className="dropdown-signup-button"
              onClick={event => this.handleModalOpen(event, 1)}
            >
              <div className="nav-link auth-link">Sign Up</div>
            </DropdownItem>

            <DropdownItem>
              <Link
                className="nav-link auth-link"
                to={{
                  pathname: "/contact",
                  state: { modal: true }
                }}
              >
                Contact
              </Link>
            </DropdownItem>

            <DropdownItem>
              {" "}
              <Link
                className="nav-link auth-link"
                to={{
                  pathname: "/contact"
                }}
              >
                Help
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOpen: currIndex => dispatch({ type: "OPEN_MODAL", currIndex })
  };
};

export default connect(null, mapDispatchToProps)(SignedOutLinks);
