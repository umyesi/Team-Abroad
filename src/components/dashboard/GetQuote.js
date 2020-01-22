import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import image from "../../assets/images/courses-prices.jpg";

class GetQuote extends Component {
  render() {
    return (
      <div className="get-quote-container ">
        <img className="prices-image w-100 d-block" src={image} alt="image" />
        <div className="get-quote-content">
          <div className="get-quote-header pb-md-5 pb-sm-3">
            <h2>We would love to help you choose your</h2>
            <h2>ideal English study programme.</h2>
          </div>

          <Link>
            <Button variant="outline-light px-sm-5 py-sm-3">Get a Quote</Button>
          </Link>
          <Link to="/" className="get-quote-button">
            <Button variant="outline-light px-sm-5 py-sm-3">English Level Test</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default GetQuote;
