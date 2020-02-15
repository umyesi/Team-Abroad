import React from "react";
import eflag from "../../assets/images/eflag.svg";
import fflag from "../../assets/images/fflag.svg";
import internship from "../../assets/images/internship.jpg";

class OurPrograms extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

   get initialState() {
    return {
      englishInfo: false,
      frenchInfo: false,
      internInfo: false
    };
  }

  toggle = (name, value) => {
    const state = this.initialState;
    this.setState({
      ...state,
      [name]: !value
    });
  };

  render() {
    const { englishInfo, frenchInfo, internInfo } = this.state;
    return (
      <div className="our-programs container-fluid">
        <h2>Our Programs</h2>
        <hr />
        <p>
          Team Abroad welcomes students to study the English and French
          languages through various programs. These programmes are designed to
          immerse the students in a different culture while learning languages
          and discovering the rich history of the country.
        </p>

        <div className="programs-links row">
          <a
            href="#english-program"
            className={`english-program  col-md-4 ${
              englishInfo ? "active" : ""
            }`}
            onClick={() => this.toggle("englishInfo", this.state.englishInfo)}
          >
            <div id="englishInfo">
              <img src={eflag} alt="English Flag" />
              <h3>
                Program held in English <br /> Language{" "}
              </h3>
            </div>
          </a>

          <a
            href="#french-program"
            className={`french-courses  col-md-4 ${frenchInfo ? "active" : ""}`}
            onClick={() => this.toggle("frenchInfo", this.state.frenchInfo)}
          >
            <img src={fflag} alt="Fnglish Flag" />
            <h3>
              Program held in French <br /> Language
            </h3>
          </a>

          <a
            href="#internship-program"
            className={`internship  col-md-4 ${internInfo ? "active" : ""}`}
            onClick={() => this.toggle("internInfo", this.state.internInfo)}
          >
            <img src={internship} alt="Internship Logo" />
            <h3>Internship Program</h3>
          </a>
        </div>

        <div className="program-info">
          <div
            id="english-program"
            className={`english-program ${englishInfo ? "" : "hidden"}`}
          >
            <h2>English Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p className="certificate">Certificate provided on completion.</p>
            <p className="link-info">
              Click on the link below to view an example of our{" "}
              <span>English Program</span>
            </p>
            <p>
              <a href="/">Paris - ST - 10 - days</a>
            </p>
          </div>
          <div
            id="french-program"
            className={`french-program ${frenchInfo ? "" : "hidden"}`}
          >
            <h2>French Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p className="certificate">Certificate provided on completion.</p>
            <p className="link-info">
              Click on the link below to view an example of our{" "}
              <span>English Program</span>
            </p>
            <p>
              <a href="/">Paris - ST - 10 - days</a>
            </p>
          </div>
          <div className={`internship-program ${internInfo ? "" : "hidden"}`}>
            <h2>Internship Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p className="certificate">Certificate provided on completion.</p>
            <p className="link-info">
              Click on the link below to view an example of our{" "}
              <span>English Program</span>
            </p>
            <p>
              <a href="/">Paris - ST - 10 - days</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurPrograms;