// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/images/loguna.png";
// import SignedInLinks from "../pages/SignedInLinks";
// import SignedOutLinks from "../pages/SignedOutLinks";
// import { connect } from "react-redux";
// import { Navbar, Nav } from "react-bootstrap";

// const NavigationBar = props => {
//   const { auth } = props;
//   const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
//   return (
//     <Navbar className="primary-nav container-fluid">
//       <Nav className="ml-auto"> {links} </Nav>
//     </Navbar>
//   );
// };

// const mapStateToProps = state => {
//   // console.log(state);
//   return {
//     auth: state.firebase.auth
//   };
// };

// export default connect(mapStateToProps)(NavigationBar);
