import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Redirect, Link } from "react-router-dom";
import Logo from "../../assets/images/loguna.png";
import { Navbar, Form, Button } from "react-bootstrap";


class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

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
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <Navbar className="signin-navbar">
          <Link to="/">
            <Navbar.Brand>
              <img className="Logo" src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>
        </Navbar>
        <div className="container-fluid signin-container">
          <div className="row justify-content-center">
            <Form className="form-container" onSubmit={this.handleSubmit}>
              <h2>Login</h2>
              <Form.Group className="form-group forgot-password-input">
                <Form.Label htmlFor="email" className="form-label">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={this.handleChange}
                />
                <Link to="/reset-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password" className="form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit" className="btn btn-block">
                Submit
              </Button>
              <div className="text-center text-danger mt-3">
                {authError ? <p>{authError}</p> : null}
              </div>
              <div className="create-account">
                <Link to='/signup'>Don't have an Account? Sign Up</Link>
                
              </div>
            </Form>
          </div>
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
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
