import React from "react";
import { connect } from "react-redux";
import { accomodationImgs } from "../../assets/images/accomodation/accomodationArray";
import { activitiesImgs } from "../../assets/images/campsite-activities/activitiesArray";
import { schoolImgs } from "../../assets/images/school/schoolArray";
import transfer from "../../assets/images/transfer/transfer.jpg";
import Assistance from "../../assets/images/assistance.png";
import Meals from "../../assets/images/meals.png";
import Gallery from "react-grid-gallery";
import eiffel from "../../assets/images/outdoor-activities/eiffel.jpg";
import notreDame from "../../assets/images/outdoor-activities/notre-dame.jpg";
import sacreCoeur from "../../assets/images/outdoor-activities/sacre-coeur.jpg";
import sorbonne from "../../assets/images/outdoor-activities/sorbonne.jpg";
import champs from "../../assets/images/outdoor-activities/champs-elysees.jpg";
import arc from "../../assets/images/outdoor-activities/arc-de-triomphe.jpg";
import versailles from "../../assets/images/outdoor-activities/versailles.jpg";
import louvre from "../../assets/images/outdoor-activities/louvre.jpg";
import disneyland from "../../assets/images/outdoor-activities/disneyland.jpg";

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
		const mqs = window.matchMedia("(max-width: 500px)");
		const mqm = window.matchMedia("(max-width: 600px)");
		const mqm2 = window.matchMedia("(max-width: 768px)");
		setTimeout(() => {
			if (mqs.matches && !window.orientation) {
				window.scroll(0, 270);
			} else if (mqm.matches && !window.orientation) {
				window.scroll(0, 270);
			} else if (mqm2.matches && !window.orientation) {
				window.scroll(0, 320);
			} else if (window.orientation === 90) {
				window.scroll(0, 320);
			} else {
				window.scroll(0, 270);
			}
		}, 500);
	};

	hideInfo = name => {
		this.props.hideInfo(name);
		setTimeout(() => {
			window.scroll(0, 0);
		}, 300);
	};

	render() {
		const {
			school,
			accomodation,
			activities,
			transfers,
			meals,
			assistance
		} = this.props.serviceInfo;

		return (
			<div className='service-container container-fluid'>
				<h2>Services</h2>
				<hr />
				<p>
					To make the experience of the students unforgettable, The British
					International School offers complementary services such as
					accommodation, meals and transport. All of our services are listed
					below.
				</p>
				<div className='row service-content '>
					<div className='col-3  service-navigation'>
						<ul>
							<li>
								<h4
									onClick={() => this.showInfo("school")}
									className={` ${school ? "active" : ""}`}
								>
									School{" "}
								</h4>
							</li>
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
						</ul>
					</div>
					<div className=' col-8 '>
						<div className='service-info'>
							<div className={`school ${school ? "" : "hidden"}`}>
								<h2>School</h2>
								<p>
									Since the beginning we have been cooperating
									with well-established school Etude Plus in Paris. With 15
									years successful experience, Etude Plus guarantees us with
									qualified native speaking teachers, who not only teach well,
									but also succeed to establish good and responsible
									relationship with children. Their unique and fun way of
									teaching allows our campers to absorb new language skills
									quickly.
								</p>
								<Gallery
									images={schoolImgs}
									margin={2}
									rowHeight={150}
									maxRows={4}
									backdropClosesModal={true}
									enableImageSelection={false}
									enableLightbox={false}
								/>
							</div>
							<div className={`accomodation ${accomodation ? "" : "hidden"}`}>
								<h2>Accomodation</h2>
								<p>
									Our participants will stay at “Camping International de
									Maisons-Laffitte”, four star child-friendly campsite located
									on an island on the Seine. The campsite with a variety of
									sporting and fun activities in, is the ideal base for
									exploring Paris, as the city centre is only a 20 minutes train
									journey.
								</p>
								<p>
									Our campers will be allocated in well-equipped and modern 6
									place cottages (5 students + 1 group leader).
								</p>
								<p>
									Girls and boys sleep in separate areas and are supervised by
									our friendly and professional group leaders.
								</p>
								<p>
									Cottages have a fully equipped kitchen, 3 bedrooms, a living
									room, a bathroom with shower, and a separate toilet.
								</p>
								<p>
									Please take a look at our gallery below to view the pictures
									of accessible stays.
								</p>
								<Gallery
									images={accomodationImgs}
									margin={2}
									rowHeight={150}
									maxRows={1}
									backdropClosesModal={true}
									showLightboxThumbnails={true}
								/>
								<div className='campsite-services'>
									<h3>Services on the campsite: </h3>
									<ul>
										<li>Grocery store with fresh bread</li>
										<li>Cafe/restaurant</li>
										<li>Launderette</li>
										<li>WIFI with free access in the reading room</li>
										<li>Swimming pool</li>
										<li>
											Activities: hand/football, ping-pong, boules, basketball,
											badminton, children's playground.
										</li>
									</ul>
									<p>
										Team Abroad campers will enjoy all the sport and fun
										activities available on the campsite (pictures below), led
										by our group leaders and animators.
									</p>
									<Gallery
										images={activitiesImgs}
										margin={2}
										rowHeight={150}
										maxRows={1}
										backdropClosesModal={true}
										showLightboxThumbnails={true}
									/>
								</div>
							</div>
							<div className={`activities ${activities ? "" : "hidden"}`}>
								<h2>Activities</h2>
								<p>
									We provide multi-sportive activities, exciting excursions as
									well as entertaining evenings, giving our students every
									opportunity to have fun, to practice the language and to
									develop friendships with fellow campers.  It's all included at
									no extra cost.
								</p>
								<p>
									Our full-day and half-day trips to places of historical and
									cultural importance are a good way to introduce students to
									the great diversity of French culture, history, food,
									geography and aim to take full advantage of the special
									attractions around each destination.
								</p>
								<p>
									Team Abroad offers its participants 10 days of action, fun and
									adventure in a safe, secure and healthy environment.
								</p>
								<p>
									The activities promote teamwork and interaction between
									children and staff. They are challenging and develop
									self-esteem, confidence, social skills, leadership, and
									respect for the environment in children.
								</p>

								<p>
									In addition they will participate in various entertainment
									activities such as:
								</p>

								<div>
									<div className='thumbnail-gallery row'>
										<div className='thumbnail-container col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={eiffel} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={notreDame} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={sacreCoeur} alt='Meat' />
											</div>
										</div>

										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={sorbonne} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={arc} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={champs} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={louvre} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={disneyland} alt='Meat' />
											</div>
										</div>
										<div className='thumbnail-container col-12 col-md-4'>
											<div
												className='thumbnail'
												data-title='Bacon'
												data-description='Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs'
											>
												<img src={versailles} alt='Meat' />
											</div>
										</div>
										<div></div>
										<div></div>
										<div></div>
									</div>
								</div>

								<p className='pt-3'>
									All groups are accompanied by our Team Abroad Group Assistants
									and the city tours are led by a native, qualified guide.
								</p>
								<p className='agenda-link'>
									<a href='/'>
										Click on this link to view the agenda of our 10 - days
										English/French Program
									</a>
								</p>
							</div>
							<div className={`transfers ${transfers ? "" : "hidden"}`}>
								<h2>Transfers</h2>
								<p>
									Students are welcomed at the airport upon arrival and at the
									end of the program accompanied to the airport by a Team Abroad
									Group assistant. We provide safe travel from / to the airport
									by licensed taxi.
								</p>
								<div className='row justify-content-center w-100'>
									<img
										className='col-12 col-md-9 mt-4 w-100'
										src={transfer}
										alt='transfer'
									/>
								</div>
							</div>
							<div className={`meals ${meals ? "" : "hidden"}`}>
								<h2>Meals</h2>
								<p>
									Eating well and healthy is an important issue at our camp
									which we take very seriously. All our programs and stays offer
									3 time meals.
								</p>
								<p>
									Typical French breakfast with croissants is served at the
									campsite.
								</p>
								<p>
									At school we offer packed lunches, which consist of a panini
									or sandwich, a snack, a piece of fruit, juice and water.
								</p>
								<p>
									For dinner we book restaurants which fit in with the locations
									of the excursions planned for that afternoon or evening.
									Dinner consists of one main course with either a piece of
									fruit or a dessert.
								</p>
								<img className='' src={Meals} alt='logo' />
							</div>
							<div className={`assistance ${assistance ? "" : "hidden"}`}>
								<h2>Assistance</h2>
								<p>
									Each student group is assigned one of our group assistants,
									who are well-trained and experienced in guiding students
									through the city. This assistant is with the group throughout
									their stay and liaise with both the Team Abroad offices and
									the group leaders, to ensure a smooth and positive experience
									for all our visitors.
								</p>
								<img className='assistance' src={Assistance} alt='logo' />
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
