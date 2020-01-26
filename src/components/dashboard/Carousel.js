import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/carouselpics/img1.jpg";
import img2 from "../../assets/images/carouselpics/img2.jpg";
import img3 from "../../assets/images/carouselpics/img3.jpg";
import image from "../../assets/images/courses-prices.jpg";

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      interval={0}
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>A new way to learn French</h3>
          <p>
            Students can enjoy a dynamic and interactive approach to improving
            French and English skills through educational activities and
            communication
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 center-block"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Discover and explore Paris.</h3>
          <p>
            Team Abroad offers interesting programme and a high-quality
            educational experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Feel free to create your own programme.</h3>
          <p>
            Team Abroad is well-known for its flexibility.
            Every programme is customised to meet the students' needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
