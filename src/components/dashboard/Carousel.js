import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/carouselpics/img1.jpg";
import img2 from "../../assets/images/carouselpics/img2.jpg";
import img3 from "../../assets/images/carouselpics/img3.jpg";
//import image from "../../assets/images/courses-prices.jpg";

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
			<Carousel.Item className='first-image'>
				<img className='d-block w-100 ' src={img1} alt='First slide' />
				<Carousel.Caption className=''>
					<h3>The best way to explore Paris</h3>
					<p>
						Team Abroad offers fantastic combination of lessons, indoor &
						outdoor activities, excursions and cultural trips in Paris
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='second-image'>
				<img
					className='d-block w-100 center-block'
					src={img2}
					alt='Second slide'
				/>

				<Carousel.Caption>
					<h3>Improve your Linguistic skills</h3>
					<p>
						Improve your linguistic skills through our educational and
						entertaining activities, held by French and English native speaking
						teachers, group leaders, animators and tour guides.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='third-image'>
				<img className='d-block w-100' src={img3} alt='Third slide' />

				<Carousel.Caption>
					<h3>Choose one of our amazing programs</h3>
					<p>
						Team Abroad offers various types of certificated programs during the
						whole year
					</p>
					<Link to='/ourprograms'>
						<Button
							className='programs-link'
							variant='outline-light px-md-5 py-md-3 mt-2 mt-sm-3 mt-md-4'
						>
							See Programs
						</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
