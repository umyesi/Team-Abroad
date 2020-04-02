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
import { AiOutlineUser } from "react-icons/ai";

class SignedInLinks extends React.Component {
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

	render() {
		return (
			<Nav className='signed-in-links'>
				<Dropdown
					className='d-inline-block mr-3 display-block'
					onMouseOver={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					isOpen={this.state.dropdownOpen}
					toggle={this.toggle}
				>
					<DropdownToggle tag='a' className='nav-link'>
						<AiOutlineUser size={28} className='icon' />
					</DropdownToggle>
					<DropdownMenu right>
						<Link className='auth-link' to='/my-account'>
							<DropdownItem>My Account</DropdownItem>
						</Link>
						<Link className='auth-link' to='/contact'>
							<DropdownItem>Help</DropdownItem>
						</Link>

						<Link className='auth-link' to='/contact'>
							<DropdownItem> contact</DropdownItem>
						</Link>

						<DropdownItem divider />
						<DropdownItem className='auth-link' onClick={this.props.signOut}>
							Log Out
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
