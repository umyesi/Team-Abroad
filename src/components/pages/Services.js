import React from "react";
import { connect } from "react-redux";
import image1 from "../../assets/images/accomodation/1.jpg";
import image2 from "../../assets/images/accomodation/2.jpg";
import image3 from "../../assets/images/accomodation/3.jpg";
import image4 from "../../assets/images/accomodation/4.jpg";
import image5 from "../../assets/images/accomodation/5.jpg";
import image6 from "../../assets/images/accomodation/6.jpg";
import image7 from "../../assets/images/accomodation/7.jpg";
import image8 from "../../assets/images/accomodation/8.jpg";
import transfer from "../../assets/images/transfer/transfer.jpg";
import Assistance from "../../assets/images/assistance.png";
import Meals from "../../assets/images/meals.png";
import Gallery from "react-grid-gallery";

const accomodationImg = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
    //customOverlay:  [image2]
    //thumbnailCaption: "raisrame"
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  }
];

const activitiesImg = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
    //customOverlay:  [image2]
    //thumbnailCaption: "raisrame"
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 160,
    thumbnailHeight: 90,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  }
];

class Services extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }

  componentWillUnmount() {
    this.props.hideInfo();
  }

  showInfo = name => {
    this.props.showInfo(name);
    setTimeout(() => {
      window.scroll(0, 200);
    }, 400);
  };

  hideInfo = name => {
    this.props.hideInfo(name);
    window.scroll(0, 0);
  };

  render() {
    const {
      accomodation,
      activities,
      transfers,
      meals,
      assistance,
      optional
    } = this.props.serviceInfo;

    return (
      <div className="service-container container-fluid">
        <h2>Services</h2>
        <hr />
        <p>
          To make the experience of the students unforgettable, The British
          International School offers complementary services such as
          accommodation, meals and transport. All of our services are listed
          below.
        </p>
        <div className="row service-content ">
          <div className="col-3  service-navigation">
            <ul>
              <li>
                <h4
                  onClick={() => this.showInfo("accomodation")}
                  className={` ${accomodation ? "active" : ""}`}
                >
                  Accomodation{" "}
                </h4>
              </li>
              <li>
                <h4
                  onClick={() => this.showInfo("activities")}
                  className={` ${activities ? "active" : ""}`}
                >
                  Activities
                </h4>
              </li>
              <li>
                <h4
                  onClick={() => this.showInfo("transfers")}
                  className={` ${transfers ? "active" : ""}`}
                >
                  Transfers
                </h4>
              </li>
              <li>
                <h4
                  onClick={() => this.showInfo("meals")}
                  className={` ${meals ? "active" : ""}`}
                >
                  Meals
                </h4>
              </li>
              <li>
                <h4
                  onClick={() => this.showInfo("assistance")}
                  className={` ${assistance ? "active" : ""}`}
                >
                  Assistance
                </h4>
              </li>
              <li>
                <h4
                  onClick={() => this.showInfo("optional")}
                  className={` ${optional ? "active" : ""}`}
                >
                  Optional Services
                </h4>
              </li>
            </ul>
          </div>
          <div className=" col-8 ">
            <div className="service-info">
              <div className={`accomodation ${accomodation ? "" : "hidden"}`}>
                <h2>Accomodation</h2>
                <p>
                  "The campsite is a very good starting point if you want to
                  discover the capital while enjoying unusual accommodation, and
                  great activities for children! My Love hut: if you are looking
                  for child-friendly accommodation near Paris and you don't
                  necessarily want to lock yourself in a hotel room, I recommend
                  that you try the wooden perched huts. "
                </p>
                <Gallery
                  images={accomodationImg}
                  margin={2}
                  rowHeight={150}
                  maxRows={1}
                  backdropClosesModal={true}
                />
              </div>
              <div className={`activities ${activities ? "" : "hidden"}`}>
                <h2>Activities</h2>
                <p>
                  Our language learning process does not end with lessons, which
                  is why we also provide our students with extra-curricular
                  activities aimed at improving linguistic skills. By offering
                  plenty of visits and cultural excursions, students will be
                  able to enhance their English abilities in a practical
                  context.{" "}
                </p>
                <p>
                  All our activities are carefully selected to suit the length
                  of your trip and are aimed at showing students the main
                  attractions of the cities they are staying in.
                </p>
                <p>
                  All our activities are carefully selected to suit the length
                  of your trip and are aimed at showing students the main
                  attractions of the cities they are staying in.
                </p>
                <Gallery
                  images={activitiesImg}
                  margin={2}
                  rowHeight={150}
                  maxRows={1}
                  backdropClosesModal={true}
                />
                <p>
                  In addition they will participate in various entertainment
                  activities such as:
                </p>

                <Gallery
                  images={activitiesImg}
                  margin={2}
                  rowHeight={150}
                  maxRows={1}
                  backdropClosesModal={true}
                />
                <p>
                  All groups are accompanied by our BIS Group Assistants and the
                  city tours are led by a native, qualified guide.
                </p>
              </div>
              <div className={`transfers ${transfers ? "" : "hidden"}`}>
                <h2>Transfers</h2>
                <p>
                  Upon arrival, the students are met and welcomed at the
                  airport, by a BIS Group assistant. We provide safe travel to
                  their accommodation either by private coach or licensed taxi.
                </p>
                <div className="row justify-content-center">
                  <img className="col-7 mt-4" src={transfer} alt="transfer" />
                </div>
              </div>
              <div className={`meals ${meals ? "" : "hidden"}`}>
                <h2>Meals</h2>
                <p>
                  All our programmes and stays offer a continental breakfast and
                  dinner (half-board) and either a packed or hot lunch can also
                  be included upon request. Our Summer programmes generally
                  include all meals (full-board) as standard.
                </p>
                <p>
                  Dinner consists of one main course with a side dish and either
                  a piece of fruit or a dessert. Students staying with host
                  families will enjoy their evening meal at home.
                </p>
                <p>
                  We book each restaurant to fit in with the locations of the
                  excursions planned for that afternoon or evening. However,
                  this is only available if the selected programme involves
                  students staying at a hotel or residence.
                </p>
                <p>
                  During lunchtime, we offer an optional hot main meal or packed
                  lunches which consist of a panini or sandwich, a snack, a
                  piece of fruit and water
                </p>
                <img className="" src={Meals} alt="logo" />
              </div>
              <div className={`assistance ${assistance ? "" : "hidden"}`}>
                <h2>Assistance</h2>
                <p>
                  Each student group is assigned one of our BIS group
                  assistants, who are well-trained and experienced in guiding
                  students through the city. This assistant is with the group
                  throughout their stay and liaise with both the BIS offices and
                  the group leaders, to ensure a smooth and positive experience
                  for all our visitors.
                </p>
                <img className="assistance" src={Assistance} alt="logo" />
              </div>
              <div className={`optional ${optional ? "" : "hidden"}`}>
                <h2>Optional Services</h2>
                <p>Flight bookings, visas and travel insurance Upon request.</p>
                <p>
                  The BIS can offer the additional service of booking flight
                  tickets for the groups. We also offer optional travel
                  insurance, provided by our partner insurance company.
                </p>
                <p> Public transport tickets</p>
                <p>
                  Public transport tickets can be made available to the group
                  upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    serviceInfo: state.serviceInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInfo: name => dispatch({ type: "SHOW_SERVICE_INFO", name }),
    hideInfo: name => dispatch({ type: "HIDE_INFO", name })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
