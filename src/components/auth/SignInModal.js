import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SignInModal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();

    this.state = {
      email: "",
      password: ""
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
    const { authError, onHide, switchModal, showModal } = this.props;

    //const isMobile = window.innerWidth < 720;
    
    

    if (showModal) {
      return (
        <div
          className="container-fluid signin-modal-container"
          onClick={onHide}
        >
          <div className="form-container" onClick={e => e.stopPropagation()}>
            <Form onSubmit={this.handleSubmit}>
              <h2>Sign In</h2>
              <Form.Group className="forgot-password-input">
                <Form.Label htmlFor="email" className="floatLabel">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={this.handleChange}
                />
                <Link
                  onClick={onHide}
                  to="/reset-password"
                  className="forgot-password"
                >
                  Forgot Password?
                </Link>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password" className="floatLabel">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant="success"
                  size="lg"
                  type="submit"
                  className="btn-block"
                >
                  LOGIN
                </Button>
              </Form.Group>

              <div className="text-center text-danger mt-3">
                {authError ? <p>{authError}</p> : null}
              </div>
            </Form>
            <div className="create-account">
              <h5>Don't have an Account?</h5>

              <Button
                onClick={switchModal}
                variant="outline-dark"
                className="btn-block"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    showModal: state.auth.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
