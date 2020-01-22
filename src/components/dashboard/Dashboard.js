import React, { Component } from "react";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import GetQuote from "./GetQuote";
import Location from "./Location";
import image from "../../assets/images/courses-prices.jpg";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Welcome />
        <Highlights />
        <GetQuote />
        <Location />
      </div>
    );
  }
}

export default Dashboard;
