import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavigationBar from "./components/pages/NavigationBar";
import SecondNav from "./components/pages/SecondNav";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NoMatch from "./components/pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/auth/SignIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  UNSAFE_componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal =
      location.state &&
      location.state.modal &&
      this.previousLocation !== location;

    return (
      <div className="App">
        <NavigationBar />
        <SecondNav />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/modal/:id">
            <Modal isModal={isModal} />
          </Route>
          <Route component={NoMatch} />
        </Switch>
        {isModal ? (
          <Route exact path="/modal/:id">
            <Modal isModal={isModal} />
          </Route>
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);
