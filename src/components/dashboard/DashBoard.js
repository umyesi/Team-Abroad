import React, { Component } from "react";
import Carousel from "./Carousel";
import Welcome from "./Welcome";
import GetQuote from "./GetQuote";
import Location from "./Location";

class DashBoard extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }

  render() {
    return (
      <div>
        <Carousel />
        <Welcome />
        <GetQuote />
        <Location />
      </div>
    );
  }
}

export default DashBoard;
