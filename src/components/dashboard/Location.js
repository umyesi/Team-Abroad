import React, { Component } from "react";
import { FaPhone } from "react-icons/fa";

class Location extends Component {
  render() {
    return (
      <div className="container-fluid map-container">
        <div className="row align-items-center pt-5">
          <iframe
            className="col"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.522657914607!2d2.2494806705395796!3d48.94353302820787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e666774cdf0bbf%3A0xbc4439b05f0d4e42!2s21%20Avenue%20Gabriel%20P%C3%A9ri%2C%2095100%20Argenteuil!5e0!3m2!1sfr!2sfr!4v1579648819376!5m2!1sfr!2sfr"
            width="600"
            height="450"
            frameborder="0"
            //style="border:0;"
            allowfullscreen="yes"
          ></iframe>

          <div className="contact-info col">
            <h3>Contact Us</h3>

            <hr />
            <FaPhone size={24} className="icon" />
            <p>+33 6 05 88 96 28</p>
            <p>63, rue de la fosse aux bergers</p>
            <p>Villemomble, France</p>
            <p>umyesigiorgi@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;

// import React, { Component } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// class Location extends Component {
//   render() {
//     const mapStyles = {
//       width: "40%",
//       height: "50%",
//       "min-width": "300px",
//       "margin-top": "5rem",
//       //"background-color": "red"
//     };
//     return (
//       <div className="map-container container-fluid">
//         <Map
//           className="location "
//           google={this.props.google}
//           zoom={11}
//           style={mapStyles}
//           initialCenter={{ lat: 48.947907, lng: 2.24818 }}
//         >
//           <Marker position={{ lat: 48.0, lng: -122.0 }} />
//         </Map>

{
  /* <div className="contact-info">
          <h3>Contact Us</h3>
          <hr/>
           <p>+33 6 05 88 96 28</p>
           <p>63, rue de la fosse aux bergers</p>
           <p>Villemomble, France</p>
           <p>umyesigiorgi@gmail.com</p>
          </div> */
}
//       </div>
//<div/>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAeq4GF6PPA4MkYK2ephjOo9vBrBJjzWm4"
// })(Location);
