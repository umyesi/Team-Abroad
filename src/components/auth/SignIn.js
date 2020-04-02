import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Redirect, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase/app";

class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};

	// uiConfig = {
	// 	// Popup signin flow rather than redirect flow.
	// 	signInFlow: "popup",
	// 	// We will display Google and Facebook as auth providers.
	// 	signInOptions: [
	// 		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	// 		firebase.auth.FacebookAuthProvider.PROVIDER_ID
	// 	],
	// 	callbacks: {
	// 		// Avoid redirects after sign-in.
	// 		signInSuccessWithAuthResult: () => false
	// 	}
	// };
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
		this.props.logIn(this.state);
	};

	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to='/' />;
		return (
			<div className='signin-container'>
				<div className='signin-content'>
					<Form className='form-container' onSubmit={this.handleSubmit}>
						<h2>Sign in</h2>
						<Form.Group className='form-group forgot-password-input'>
							<Form.Label htmlFor='email' className='form-label'>
								Email address
							</Form.Label>
							<div>
								<Form.Control
									type='email'
									id='email'
									className='form-control'
									onChange={this.handleChange}
								/>

								<Link to='/reset-password' className='forgot-password'>
									Forgot Password?
								</Link>
							</div>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor='password' className='form-label'>
								Password
							</Form.Label>
							<Form.Control
								type='password'
								id='password'
								className='form-control'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Button
							variant='success'
							type='submit'
							className='btn btn-block submit-button'
						>
							Submit
						</Button>

						<div className='text-center text-danger mt-3'>
							{authError ? <p>{authError}</p> : null}
						</div>
						{/* <StyledFirebaseAuth
							uiConfig={this.uiConfig}
							firebaseAuth={firebase.auth()}
						/> */}
						<div className='create-account'>
							<Link to='/signup'>Don't have an Account? Sign Up</Link>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logIn: creds => dispatch(logIn(creds)),
		resetAuth: () => dispatch({ type: "RESET_AUTH" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
