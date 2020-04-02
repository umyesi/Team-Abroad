import React from "react";
import paris from "../../assets/images/paris-background2.png";

const Welcome = () => {
	return (
		<div className='welcome'>
			<h2 className='welcome-header'>
				Welcome to <span className='team'>Team</span>{" "}
				<span className='abroad'>Abroad</span>{" "}
			</h2>
			<hr />
			<div className='welcome-content'>
				<p>
					{" "}
					Team Abroad, established in 2020, offers diverse programs for groups
					of international students during the whole year in one of the world’s
					most lively and vibrant destination: Paris!
				</p>

				<p className='mt-2'>
					Our programs focus on improving students' language skills and overall
					knowledge, based on indoor theoretical teaching, in corelation with
					outdoor activities and excursions.
				</p>

				<p className='mt-2'>
					We will ensure that students have unforgottable experience during
					their stay in our all-season camp, by arranging lessons, activities
					and excursions accompanied by quilified English and French speaking
					teachers, group leaders, animators and tour guides.
				</p>
			</div>
			<div className='paris-container'>
				<div className='row align-items-center paris-content'>
					<div className='col-12 col-lg-6 mb-3'>
						<iframe
							title='paris'
							width='560'
							height='327'
							src='https://www.youtube.com/embed/B-8fXb8tts0'
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className='col-12 col-lg-6  paris-text'>
						<img className='paris-background' src={paris} alt='background' />

						<div className='paris-header'>
							<h2>You will see the best of Paris </h2>
							<h2>
								{" "}
								with <span className='team'>Team</span>{" "}
								<span className='abroad'>Abroad</span>
							</h2>
						</div>

						<p>
							Paris has been drawing visitors for centuries. From its wonderful
							historic monuments to its exceptional cuisine, it is a destination
							unlike any other. Wandering in and out of museums, cafes,
							beautiful gardens, and enjoying the romance of the city. You will
							take in the view from the Eiffel Tower, say hi to Mona Lisa in the
							Louvre, eat street food crepes, climb the Arc de Triomphe, explore
							several Parisian neighborhoods, and visit the amazing Palace of
							Versailles.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Welcome;
