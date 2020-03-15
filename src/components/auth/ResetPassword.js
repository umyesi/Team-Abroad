import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../store/actions/authActions";
import emailsent from "../../assets/images/emailsent.png";
import { Redirect } from "react-router-dom";
import { Navbar, Form, Button } from "react-bootstrap";

class ResetPassword extends Component {
	state = {
		email: ""
	};
	componentDidMount() {
		setTimeout(() => {
			window.scroll(0, 0);
		}, 200);
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		console.log(this.props);
		//const { resetSent } = this.props;
		e.preventDefault();
		this.props.resetPassword(this.state);
		// if (resetSent === "success") { setTimeout(() => {
		//   //this.props.history.push("/");
		// }, 5000);}
	};

	render() {
		const { authError, auth, resetSent } = this.props;
		if (auth.uid) return <Redirect to='/' />;
		if (resetSent === "success") {
			return (
				<div>
					<div className='container-fluid reset-password-container'>
						<div className='row justify-content-center'>
							<Form
								className='sent-form-container'
								onSubmit={this.handleSubmit}
							>
								<img className='email-sent' src={emailsent} alt='email-sent' />
								<p>Reset instructions has been sent to your email address</p>
							</Form>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Navbar className='reset-password-navbar'></Navbar>
					<div className='container-fluid reset-password-container'>
						<div className='row justify-content-center  reset-content'>
							<Form className='form-container' onSubmit={this.handleSubmit}>
								<h3>Forgot Your Password?</h3>
								<Form.Group className='signin-form-group'>
									<Form.Label htmlFor='email' className='signin-form-label'>
										Email address
									</Form.Label>
									<Form.Control
										type='email'
										id='email'
										className='signin-form-control'
										onChange={this.handleChange}
									/>
								</Form.Group>

								<Button
									variant='success'
									type='submit'
									className='btn btn-block'
								>
									SEND RESET INSTRUCTIONS
								</Button>
								<div className='text-center text-danger mt-3'>
									{authError ? <p>{authError}</p> : null}
								</div>
							</Form>
						</div>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		resetSent: state.auth.resetSent,
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		resetPassword: credentials => dispatch(resetPassword(credentials))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
