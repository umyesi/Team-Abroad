import React, { Component, createRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavigationBar from "./components/dashboard/NavigationBar";
import Footer from "./components/dashboard/Footer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ResetPassword from "./components/auth/ResetPassword";
import MyAccount from "./components/auth/MyAccount";
import DashBoard from "./components/dashboard/DashBoard";
import OurPrograms from "./components/pages/OurPrograms";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Quote from "./components/pages/Quote";
import AboutUs from "./components/pages/AboutUs";
import NoMatch from "./components/pages/NoMatch";

class App extends Component {
	constructor(props) {
		super(props);
		this.ProgramScrollRef = createRef();
	}

	render() {
		//const { location } = this.props;
		return (
			<div className='App'>
				{/* {location.pathname !== "/signin" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/reset-password" && <NavigationBar />} */}
				<NavigationBar ProgramScrollRef={this.ProgramScrollRef} />
				<Switch>
					<Route exact path='/' component={DashBoard} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SignUp} />
					<Route path='/reset-password' component={ResetPassword} />
					<Route path='/my-account' component={MyAccount} />
					<Route
						path='/ourprograms'
						render={props => (
							<OurPrograms
								{...props}
								ProgramScrollRef={this.ProgramScrollRef}
							/>
						)}
					/>
					<Route path='/services' component={Services} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/contact/contact-us' component={Contact} />
					<Route path='/contact/quote' component={Quote} />
					<Route path='/contact/about-us' component={AboutUs} />

					<Route component={NoMatch} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
