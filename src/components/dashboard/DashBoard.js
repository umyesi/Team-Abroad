import React, { Component } from "react";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import Highlights from "./Highlights";
import GetQuote from "./GetQuote";
import Location from "./Location";

class DashBoard extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
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

export default DashBoard;
