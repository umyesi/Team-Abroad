import React from "react";
import { connect } from "react-redux";
import eflag from "../../assets/images/eflag.svg";
import fflag from "../../assets/images/fflag.svg";
import internship from "../../assets/images/internship.jpg";

class OurPrograms extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //this.state = this.initialState;
  //   //this.scrollToDiv = React.createRef();
  //   //this.scrollToTop = React.createRef();
  // }

  // get initialState() {
  //   return {
  //     englishInfo: false,
  //     frenchInfo: false,
  //     internInfo: false
  //   };
  // }
  // reset() {
  //   this.setState(this.initialState);
  // }

  componentDidMount() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }

  componentWillUnmount() {
    this.props.hideInfo();
  }

  // toggle = name => {
  //   this.reset();
  //   this.props.showInfo(name);
  //   this.setState(prev => ({
  //     [name]: !prev[name]
  //   }));
  // };

  showInfo = name => {
    const mql = window.matchMedia("(max-width: 375px)");
    //this.scrollToDiv.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      if (mql.matches) {
        window.scroll(0, 1300);
      } else {
        window.scroll(0, 2000);
      }
    }, 200);

    this.props.showInfo(name);
  };

  hideInfo = name => {
    this.props.hideInfo(name);
    window.scroll(0, 0);
    //this.scrollToTop.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    // const { englishInfo, frenchInfo, internInfo } = this.state;
    const { englishInfo, frenchInfo, internInfo } = this.props.programInfo;

    return (
      <div className="our-programs container-fluid">
        <h2>Our Programs</h2>
        <hr />
        <p>
          Team Abroad welcomes students to choose one of our amazing programs
          that are designed to immerse students in a different culture while
          learning French and English languages and discovering historical
          monuments of Paris city.
        </p>

        <div className="programs-links row">
          <div
            className={`english-program  col-md-4 ${
              englishInfo ? "active" : ""
            }`}
            onClick={() => this.showInfo("englishInfo")}
          >
            <div id="englishInfo">
              <img src={eflag} alt="English Flag" />
              <h3>
                Program held in English <br /> Language{" "}
              </h3>
            </div>
          </div>

          <div
            className={`french-courses  col-md-4 ${frenchInfo ? "active" : ""}`}
            onClick={() => this.showInfo("frenchInfo")}
          >
            <img src={fflag} alt="Fnglish Flag" />
            <h3>
              Program held in French <br /> Language
            </h3>
          </div>

          <div
            className={`internship  col-md-4 ${internInfo ? "active" : ""}`}
            onClick={() => this.showInfo("internInfo")}
          >
            <img src={internship} alt="Internship Logo" />
            <h3>Internship Program</h3>
          </div>
        </div>

        <div className="program-info">
          <div className={`english-program ${englishInfo ? "" : "hidden"}`}>
            <span className="close" onClick={() => this.hideInfo()}>
              &times;
            </span>
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
            <span className="close" onClick={() => this.hideInfo()}>
              &times;
            </span>
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
            <span className="close" onClick={() => this.hideInfo()}>
              &times;
            </span>
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
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    programInfo: state.programInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInfo: name => dispatch({ type: "SHOW_PROGRAM_INFO", name }),
    hideInfo: name => dispatch({ type: "HIDE_PROGRAM_INFO", name })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OurPrograms);
