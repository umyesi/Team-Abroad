import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import image from "../../assets/images/courses-prices.jpg";

class GetQuote extends Component {
  render() {
    return (
      <div className="get-quote-container ">
        <img className="prices-image w-100 d-block" src={image} alt="quote" />
        <div className="get-quote-content">
          <div className="get-quote-header pb-md-5 pb-sm-3">
            <h2>We would love to help you choose your</h2>
            <h2>ideal study program.</h2>
          </div>
          <div className="row get-quote-buttons">
            <Link to="/ourprograms" className="col-6">
              <Button variant="outline-light px-sm-5 py-sm-3">
                See Programs
              </Button>
            </Link>
            <Link to="/contact/quote" className="col-6">
              <Button variant="outline-light px-sm-5 py-sm-3">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GetQuote;
