import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
//import { FaUser } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { NavItem } from "react-bootstrap";

class SignedInLinks extends React.Component {
  

    state = {
      dropdownOpen: false
    };
  

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Nav className="signed-in-links">
        <Dropdown
          className="d-inline-block mr-3 display-block"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle tag="a" className="nav-link">
            {/* <FaUser size={24} className="icon" /> */}
            <AiOutlineUser size={28} className="icon" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link className="nav-link" to="/">
                My Account
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link className="nav-link" to="/">
                Help
              </Link>
            </DropdownItem>

            <DropdownItem>
              
              <Link
                className="nav-link"
                to='/'
              >
                Contact
              </Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <NavItem className="nav-link"   onClick={this.props.signOut}>
                Log Out
              </NavItem>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
