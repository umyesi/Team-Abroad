import React from "react";
import { Link } from "react-router-dom";
import eflag from "../../assets/images/eflag.svg";
import fflag from "../../assets/images/fflag.svg";
import internship from "../../assets/images/internship.jpg";

class OurPrograms extends React.Component {
  state = this.initialState;

  get initialState() {
    return {
      englishInfo: false,
      frenchInfo: false,
      internInfo: false
    };
  }

  toggle = (param1, param2) => {
    console.log(param1, param2);
    this.setState(this.initialState);
    this.setState({
      [param1]: !param2
    });

    // this.setState(prevState => ({
    //   param1: !prevState.param2
    // }));

    // const programInfo = e.target.parentNode.id;

    // this.setState({
    //   [programInfo]: !programInfo
    // });
    // console.log(this.prevState);
    //console.log(this.state);
  };

  render() {
    const { englishInfo, frenchInfo, internInfo } = this.state;
    return (
      <div className="our-programs container-fluid">
        <h2>Our Prorgams</h2>
        <hr />
        <p>
          Team Abroad welcomes students to study the English and French
          languages through various programs. These programmes are designed to
          immerse the students in a different culture while learning languages
          and discovering the rich history of the country.
        </p>

        <div className="programs-links row">
          <div
            className="english-courses  col-lg-4"
            id="englishInfo"
            onClick={() => this.toggle("englishInfo", this.state.englishInfo)}
          >
            <div id="englishInfo">
              <img src={eflag} alt="English Flag" />
              <h3>
                Program held in English <br /> Language{" "}
              </h3>
            </div>
          </div>

          <div
            className="french-courses  col-lg-4"
            onClick={() => this.toggle("frenchInfo", this.state.frenchInfo)}
          >
            <img src={fflag} alt="Fnglish Flag" />
            <h3>
              Program held in French <br /> Language
            </h3>
          </div>

          <div
            className="internship  col-lg-4"
            onClick={() => this.toggle("internInfo", this.state.internInfo)}
          >
            <img src={internship} alt="Internship Logo" />
            <h3>Internship Program</h3>
          </div>
        </div>

        <div className="program-info">
          <div className={`english-program ${englishInfo ? "" : "hidden"}`}>
            <h2>English Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p>Certificate provided on completion.</p>
            <p>
              Click on the link below to view an example of our School Trips
              programmes (Tailor-made programmes are available upon request)
            </p>
            <p>London - ST - 5 - days</p>
          </div>
          <div className={`english-program ${frenchInfo ? "" : "hidden"}`}>
            <h2>French Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p>Certificate provided on completion.</p>
            <p>
              Click on the link below to view an example of our School Trips
              programmes (Tailor-made programmes are available upon request)
            </p>
            <p>London - ST - 5 - days</p>
          </div>
          <div className={`english-program ${internInfo ? "" : "hidden"}`}>
            <h2>Internship Program</h2>
            <p>
              During the school year we offer school trips, usually 4 – 5 days,
              which give the opportunity of visiting the most relevant artistic
              and cultural attractions of the city. Students can enjoy
              activities such as theatre workshops and Business Etiquette, along
              with a wide range of guided tours, giving these experiences
              considerable didactic value.
            </p>
            <p>Certificate provided on completion.</p>
            <p>
              Click on the link below to view an example of our School Trips
              programmes (Tailor-made programmes are available upon request)
            </p>
            <p>London - ST - 5 - days</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurPrograms;
