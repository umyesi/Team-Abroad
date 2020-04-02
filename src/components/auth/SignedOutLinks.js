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
			<Nav className='signed-out-links'>
				<AuthModal />
				<Dropdown
					className='d-inline-block mr-3 display-block'
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					onClick={this.onMouseEnter}
					isOpen={this.state.dropdownOpen}
					toggle={this.toggle}
				>
					<DropdownToggle tag='a' className='nav-link'>
						<AiOutlineUser size={28} className='icon' />
					</DropdownToggle>
					<DropdownMenu right>
						<div
							onClick={event => this.handleModalOpen(event, 0)}
							className='dropdown-login-button'
						>
							Sign In
						</div>
						<DropdownItem divider />
						<DropdownItem onClick={event => this.handleModalOpen(event, 1)}>
							<div className='auth-link'>Sign Up</div>
						</DropdownItem>

						<Link to='/contact'>
							<DropdownItem className='auth-link'>Contact</DropdownItem>
						</Link>

						<Link to='/contact'>
							<DropdownItem className='auth-link'> Help</DropdownItem>
						</Link>
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
