import React, { Component } from "react";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import image from "../../assets/images/courses-prices.jpg";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Welcome />
        <Highlights />
        <div>
          <h2 className="prices-image-caption"></h2>
          <img className="prices-image" src={image} alt="image" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
