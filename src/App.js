import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavigationBar from "./components/dashboard/NavigationBar";
import Footer from "./components/dashboard/Footer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ResetPassword from "./components/auth/ResetPassword";
import DashBoard from "./components/dashboard/DashBoard";
import OurPrograms from "./components/pages/OurPrograms";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Quote from "./components/pages/Quote";
import AboutUs from "./components/pages/AboutUs";
//import NoMatch from "./components/pages/NoMatch";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    //const { location } = this.props;
    return (
      <div className="App">
        {/* {location.pathname !== "/signin" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/reset-password" && <NavigationBar />} */}
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/ourprograms" component={OurPrograms} />
          <Route path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact/contact-us" component={Contact} />
          <Route path="/contact/quote" component={Quote} />
          <Route path="/contact/about-us" component={AboutUs} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

// import React, { Component } from "react";
// import { Switch, Route, withRouter } from "react-router-dom";
// import NavigationBar from "./components/pages/NavigationBar";
// import SecondNav from "./components/pages/SecondNav";
// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
// import Dashboard from "./components/dashboard/Dashboard";
// import NoMatch from "./components/pages/NoMatch";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SignInModal from "./components/auth/SignInModal";
// import SignUpModal from "./components/auth/SignUpModal";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.previousLocation = this.props.location;
//   }

//   UNSAFE_componentWillUpdate() {
//     let { location } = this.props;

//     if (!(location.state && location.state.modal)) {
//       this.previousLocation = location;
//     }
//   }

//   render() {
//     const { location } = this.props;
//     const isModal =
//       location.state &&
//       location.state.modal &&
//       this.previousLocation !== location;

//     return (
//       <div className="App">
//         {location.pathname !== "/signin" && location.pathname !== "/signup" && (
//           <NavigationBar />
//         )}
//         {location.pathname !== "/signin" && location.pathname !== "/signup" && (
//           <SecondNav />
//         )}
//         <Switch location={isModal ? this.previousLocation : location}>
//           <Route exact path="/" component={Dashboard} />
//           <Route path="/signin" component={SignIn} />
//           <Route path="/signup" component={SignUp} />
//           <Route path="/modal/signin">
//             <SignInModal isModal={isModal} />
//           </Route>
//           <Route path="/modal/signup">
//             <SignUpModal isModal={isModal} />
//           </Route>

//           <Route component={NoMatch} />
//         </Switch>
//         {isModal ? (
//           <Route path="/modal/signin">
//             <SignInModal isModal={isModal} />
//           </Route>
//         ) : null}
//         {isModal ? (
//           <Route path="/modal/signup">
//             <SignUpModal isModal={isModal} />
//           </Route>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default withRouter(App);
