import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .container-fluid {
    background-color: #254c6d;
    width: 100%;
    height: 100vh;
  }

  .form-container {
    border: 1px solid #e3e8ec;
    padding: 52px;
    margin-top: 97px;
    width: 432px;
    background-color: white;
    h2 {
      text-align: center;
      padding-bottom: 17px;
    }
  }
`;

class LogIn extends Component {
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
      <Styles>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <form className="form-container" onSubmit={this.handleSubmit}>
              <h2>Log In Form</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
              <div className="text-center text-danger mt-3">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </Styles>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
