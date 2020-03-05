import React, { Component } from "react";

class AboutUs extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }
  render() {
    return (
      <div className="about-us-container">
        <div className="">
          <h2>About Us</h2>
          <hr />
          <p className="">
            Team Abroad is a friendly, independent English language school in
            the centre of London offering excellent quality English language
            courses at affordable prices.
          </p>
          <p>
            Our aim is to ensure that all our students improve their English
            quickly, reach their learning goals and enjoy their time in London.
            You will be provided with a personal study plan, as well as
            individual attention and support throughout your English course to
            ensure that you progress rapidly and achieve your learning
            objectives.
          </p>
          <p>
            We have a truly international atmosphere with around 2,000 students
            from over 40 different countries choosing to study at Bloomsbury
            International every year. Whether you are looking to prepare for an
            English language exam, improve your career opportunities or just
            learn English for fun, you are sure to find the perfect course.
          </p>
          <p></p>
        </div>
        <div className="our-mission">
          <h2 className="">Our Mission</h2>
          <hr />
          <p>
            We believe that languages help people to communicate across borders
            and cultures, leading them to achieve their personal dreams and
            ambitions. In pursuit of this mission, the BIS is dedicated to the
            following areas:
          </p>
          <ul>
            <li>
              Well-researched and up-to-date educational programmes that respond
              to the needs of English language learners and allow them to put in
              practice their skills in a work environment.
            </li>
            <li>
              A rich socio-cultural programme set in a dynamic national context.
            </li>
            <li>
              A highly committed team who actively pursue professional
              development.
            </li>
            <li>Excellent value for money.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutUs;
