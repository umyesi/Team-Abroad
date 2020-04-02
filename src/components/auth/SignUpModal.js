import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Form, Button } from "react-bootstrap";

class SignUpModal extends Component {
	constructor() {
		super();
		this.modalRef = React.createRef();

		this.state = {
			email: "",
			password: "",
			firstName: "",
			lastName: ""
		};
	}

	componentDidMount() {
		if (this.props.showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}

	componentDidUpdate() {
		if (this.props.showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}
	componentWillUnmount() {
		document.body.style.overflow = "unset";
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.signUp(this.state);
	};

	render() {
		const { authError, onHide, switchModal, showModal } = this.props;

		if (showModal) {
			return (
				<div
					className='container-fluid signup-modal-container'
					onClick={onHide}
				>
					<Form
						className='form-container'
						onClick={e => e.stopPropagation()}
						onSubmit={this.handleSubmit}
					>
						<h2>Sign up </h2>
						<Form.Group>
							<Form.Label htmlFor='Email' className='floatLabel'>
								Email address
							</Form.Label>
							<Form.Control
								type='email'
								id='email'
								className='form-control'
								onChange={this.handleChange}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor='Password' className='floatLabel'>
								Password
							</Form.Label>
							<Form.Control
								type='password'
								id='password'
								className='form-control'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='firstname' className='floatLabel'>
								First Name
							</Form.Label>
							<Form.Control
								type='text'
								className='form-control'
								id='firstName'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor='lastname' className='floatLabel'>
								Last Name
							</Form.Label>
							<Form.Control
								type='text'
								id='lastName'
								className='form-control'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Button
							variant='success'
							type='submit'
							className='create-account-btn btn-block'
						>
							Create My Account
						</Button>
						<div className='already-member'>
							<Button onClick={switchModal}>Already a member? Sign In</Button>
						</div>

						<div className='text-center text-danger mt-3'>
							{authError ? <p>{authError}</p> : null}
						</div>
					</Form>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError,
		showModal: state.auth.showModal
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: creds => dispatch(signUp(creds))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
