import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	};

	componentDidMount() {
		setTimeout(() => {
			window.scroll(0, 0);
		}, 200);
	}
	componentWillUnmount() {
		this.props.resetAuth();
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
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to='/' />;
		return (
			<div className='signup-container'>
				<div className='signup-content'>
					<Form className='form-container' onSubmit={this.handleSubmit}>
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
								{" "}
								Password{" "}
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
						<Button variant='success' type='submit' className='btn btn-block'>
							Create My Account
						</Button>
						<div className='text-center text-danger mt-3'>
							{authError ? <p>{authError}</p> : null}
						</div>
						<div className='already-member'>
							<Link to='/signin'>Already a member? Sign In</Link>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: creds => dispatch(signUp(creds)),
		resetAuth: () => dispatch({ type: "RESET_AUTH" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
