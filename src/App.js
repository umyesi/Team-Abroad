import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/pages/NavigationBar";
import SecondNav from "./components/pages/SecondNav";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NoMatch from "./components/pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <NavigationBar />
            <SecondNav/>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
