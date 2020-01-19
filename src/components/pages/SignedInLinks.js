import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { NavLink, Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { FaUser } from "react-icons/fa";

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
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
            <FaUser size={24} className="icon" />
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
              <Link className="nav-link" to="/" onClick={this.props.signOut}>
                Log Out
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
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
