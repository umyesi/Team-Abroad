import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

class Location extends Component {
  render() {
    return (
      <div className="container-fluid map-container">
        <div className="row align-items-center">
          <iframe
            title="myFrame"
            className="col-lg-7 col-md-12 pb-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.1285712984755!2d2.250617929207431!3d48.94369247954425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66670b2df804b%3A0x372482ef47b82df9!2s23%20Avenue%20Gabriel%20P%C3%A9ri%2C%2095100%20Argenteuil!5e0!3m2!1sen!2sfr!4v1584133733050!5m2!1sen!2sfr"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen="yes"
          ></iframe>

          <div className="col">
            <div className="contact-info-container pl-lg-3">
              <Link to="/contact">
                <h3 className="">Contact us</h3>
              </Link>

              <hr className="" />
              <div className="contact-info ">
                <FaPhone size={23} className="" />
                <a href="tel:+33 605 88 96 28" className="pt-1">+33 7 82 73 64 27</a>
                <div className="location-icon">
                  <MdLocationOn size={28} className="" />
                </div>
                <div className="">
                  <a href="https://www.google.fr/maps/place/21+Avenue+Gabriel+P%C3%A9ri,+95100+Argenteuil/@48.9436951,2.2489764,17z/data=!3m1!4b1!4m5!3m4!1s0x47e666774cdf0bbf:0xbc4439b05f0d4e42!8m2!3d48.9436916!4d2.2511651" target="_blank" rel="noopener noreferrer" className="pt-1">
                    <p>21 Avenue Gabriel Péri,</p> <p className="pt-1"> 95100 Argenteuil, France</p>
                  </a>
                </div>
                <div className="">
                  <MdEmail size={26} />
                </div>

                <a href={`mailto:${"teamabroad2019@gmail.com"}`} target="_blank" rel="noopener noreferrer" className="pt-1">teamabroad2019@gmail.com</a>
              </div>
            </div>
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

/* <div className="contact-info">
          <h3>Contact Us</h3>
          <hr/>
           <p>+33 6 05 88 96 28</p>
           <p>63, rue de la fosse aux bergers</p>
           <p>Villemomble, France</p>
           <p>umyesigiorgi@gmail.com</p>
          </div> */

//       </div>
//<div/>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAeq4GF6PPA4MkYK2ephjOo9vBrBJjzWm4"
// })(Location);
