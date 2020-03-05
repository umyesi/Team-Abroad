import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Redirect, Link } from "react-router-dom";
import { Navbar, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/loguna.png";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

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
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <Navbar className="signup-navbar">
          <Link to="/">
            <Navbar.Brand>
              <img className="Logo" src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>
        </Navbar>
        <div className="container-fluid signup-container">
          <div className="row justify-content-center signup-content">
            <Form className="form-container" onSubmit={this.handleSubmit}>
              <h2>Sign Up </h2>
              <Form.Group>
                <Form.Label htmlFor="Email" className="floatLabel">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="Password" className="floatLabel">
                  {" "}
                  Password{" "}
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="firstname" className="floatLabel">
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="lastname" className="floatLabel">
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  id="lastName"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit" className="btn btn-block">
                Create My Account
              </Button>
              <div className="text-center text-danger mt-3">
                {authError ? <p>{authError}</p> : null}
              </div>
              <div className="already-member">
                <Link to="/signin">Already a member? Sign In</Link>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
