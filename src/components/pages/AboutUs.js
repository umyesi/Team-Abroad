import React, { Component } from "react";

class AboutUs extends Component {
	componentDidMount() {
		setTimeout(() => {
			window.scroll(0, 0);
		}, 200);
	}
	render() {
		return (
			<div className='about-us-container'>
				<div className=''>
					<h2>About us</h2>
					<hr />
					<p className=''>
						Team Abroad is committed to supporting not only the academic
						learning but also the personal, social and emotional development of
						each student. Our job is to keep students safe, healthy and happy
						while promoting their linguistic, interpersonal, cultural and
						communication skills. We make the effort to get to know each student
						as an individual and support them to develop a healthy sense of
						independence and self-esteem, while socializing and making new
						friends, and even learning new skills.
					</p>
					<p>
						New friendships, independence, self confidence, sense of belonging,
						more fluency in English or/and French, positive experiences and
						emotions, unforgettable memories, these are incomplete listings of
						the benefits that Team Abroad provides for all participants. All of
						these things contribute to the development of the child as they make
						strides from being a kid to a strong, considerate, competent adult.
					</p>
					<p></p>
				</div>
				<div className='our-mission'>
					<h2 className=''>Our Mission</h2>
					<hr />
					<p>
						We believe that languages help people to communicate across borders
						and cultures, leading them to achieve their personal dreams and
						ambitions. In pursuit of this mission, Team Abroad is dedicated to
						the following areas:
					</p>
					<ul>
						<li>
							Well-researched and up-to-date educational programs that respond
							to the needs of English/French language learners and allow them to
							put in practice their skills in a social environment.
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
