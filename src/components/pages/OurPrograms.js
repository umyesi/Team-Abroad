import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import eflag from "../../assets/images/eflag.svg";
import fflag from "../../assets/images/fflag.svg";
import internship from "../../assets/images/internship.jpg";
import { FaRegSmileWink } from "react-icons/fa";

class OurPrograms extends React.Component {
	constructor(props) {
		super(props);
		//this.state = this.initialState;
		//this.scrollToDiv = React.createRef();
		//this.scrollToTop = React.createRef();
		//this.myRef = React.createRef();
	}

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

	scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

	showInfo = name => {
		this.props.showInfo(name);
		const mqs = window.matchMedia("(max-width: 500px)");
		const mqm = window.matchMedia("(max-width: 600px)");
		const mqm2 = window.matchMedia("(max-width: 768px)");
		setTimeout(() => {
			if (mqs.matches) {
				window.scroll(0, 1500);
			} else if (mqm.matches && !window.orientation) {
				window.scroll(0, 1627);
			} else if (mqm2.matches && !window.orientation) {
				window.scroll(0, 1720);
			} else if (window.orientation === 90) {
				console.log(window.orientation);
				window.scroll(0, 1870);
			} else {
				window.scroll(0, 880);
			}
		}, 200);
		//window.scrollTo(0, this.myRef.current.offsetTop);
		//this.myRef.current.scrollIntoView({ behavior: "smooth", block: 100 });
	};

	hideInfo = name => {
		this.props.hideInfo(name);
		setTimeout(() => {
			window.scroll(0, 0);
		}, 300);
		//this.props.hideInfo(name);
		//this.scrollToTop.current.scrollIntoView({ behavior: "smooth" });
	};

	render() {
		// const { englishInfo, frenchInfo, internInfo } = this.state;
		const { englishInfo, frenchInfo, internInfo } = this.props.programInfo;

		return (
			<div className='our-programs container-fluid'>
				<h2>Our Programs</h2>
				<hr />
				<p>
					Team Abroad welcomes students to choose one of our amazing programs
					that are designed to immerse students in a different culture while
					learning French and English languages and discovering historical
					monuments of Paris city.
				</p>

				<div className='programs-links row'>
					<div
						className={`english-program  col-md-4 ${
							englishInfo ? "active" : ""
						}`}
						onClick={() => this.showInfo("englishInfo")}
					>
						<div id='englishInfo'>
							<img src={eflag} alt='English Flag' />
							<h3>
								Program held in English <br /> Language{" "}
							</h3>
						</div>
					</div>

					<div
						className={`french-courses  col-md-4 ${frenchInfo ? "active" : ""}`}
						onClick={() => this.showInfo("frenchInfo")}
					>
						<img src={fflag} alt='Fnglish Flag' />
						<h3>
							Program held in French <br /> Language
						</h3>
					</div>

					<div
						className={`internship  col-md-4 ${internInfo ? "active" : ""}`}
						onClick={() => this.showInfo("internInfo")}
					>
						<img src={internship} alt='Internship Logo' />
						<h3>Internship Program</h3>
					</div>
				</div>

				<div className='program-info'>
					<div className={`english-program ${englishInfo ? "" : "hidden"}`}>
						<span className='close' onClick={() => this.hideInfo()}>
							&times;
						</span>
						<h2 ref={this.myRef}>English Program</h2>
						<p>
							Throughout their stay at the English program Camp, our students
							are completely immersed in English. They are looked after and
							supervised from morning to evening by qualified teachers and group
							leaders.
						</p>
						<p>
							During the morning classes our students will learn or build on
							their knowledge of the language in a fun way, they will have
							lessons in history and culture of France, seminars about various
							interesting topics such as 'Healthy way of living', 'How to take
							care of our environment' etc. all in English, they will work on
							the project and at the end of the program they will present it.
							During these classes, teachers will focus on the sociability that
							is conducive to developing spoken skills so that everyone can
							become more confident in communicating in English.
						</p>
						<p>
							In the afternoon students will enjoy a wide range of excursions,
							cultural activities and entertainment.
						</p>
						<p>
							At the end of the day they will enjoy, bowling, laser game, cinema
							and karaoke evenings supervised, in English, by our group leaders
							who are on-hand 24 hours a day.
						</p>
						<p>
							Throughout 10 days, our students will have 4 full days and 6 half
							days excursions, all guided by qualified group leaders and tour
							guides.{" "}
						</p>
						<p className='certificate'>Certificate provided on completion.</p>
						<p className='link-info'>
							Click on the link below to view the agenda of our{" "}
							<span>English Program</span>
						</p>
						<p>
							<a href='/'>English Program - 10 - days</a>
						</p>
					</div>
					<div
						id='french-program'
						className={`french-program ${frenchInfo ? "" : "hidden"}`}
					>
						<span className='close' onClick={() => this.hideInfo()}>
							&times;
						</span>
						<h2>French Program</h2>
						<p>
							Throughout their stay at the French program Camp, our students are
							completely immersed in French. They are looked after and
							supervised from morning to evening by qualified teachers and group
							leaders.
						</p>
						<p>
							During the morning classes our students will learn or build on
							their knowledge of the language in a fun way, they will have
							lessons in history and culture of France, seminars about various
							interesting topics such as 'Healthy way of living', 'How to take
							care of our environment' etc. all in French, they will work on the
							project and at the end of the program they will present it. During
							these classes, teachers will focus on the sociability that is
							conducive to developing spoken skills so that everyone can become
							more confident in communicating in French.
						</p>
						<p>
							In the afternoon students will enjoy a wide range of excursions,
							cultural activities and entertainment.
						</p>
						<p>
							At the end of the day they will enjoy, bowling, laser game, cinema
							and karaoke evenings supervised, in French, by our group leaders
							who are on-hand 24 hours a day.
						</p>
						<p>
							Throughout 10 days, our students will have 4 full days and 6 half
							days excursions, all guided by qualified group leaders and tour
							guides.{" "}
						</p>
						<p className='certificate'>Certificate provided on completion.</p>
						<p className='link-info'>
							Click on the link below to view the agenda of our{" "}
							<span>French Program</span>
						</p>
						<p>
							<a href='/'>French Program - 10 - days</a>
						</p>
					</div>
					<div className={`internship-program ${internInfo ? "" : "hidden"}`}>
						<span className='close' onClick={() => this.hideInfo()}>
							&times;
						</span>
						<h2>Internship Program</h2>
						<p>
							We are looking for Group leader interns throughout the whole year
							from 2 weeks up to 3 months programs in Paris.
						</p>
						<p>
							During the internship program you will be provided by full board
							accommodation with 3 meals. You will visit the best of Paris with
							us for free of charge, and enjoy amazing outdoor activities with
							our campers.{" "}
						</p>
						<p>
							We promise that, Internship in Team Abroad will be an
							unforgettable and breathtaking experience in your life, and a big
							step in your carrier. This is a fantastic opportunity for
							individuals looking to improve their leadership, interpersonal and
							organizing skills.
						</p>
						<p>If you think you are:</p>
						<ul>
							<li>Speaking perfect English or French.</li>
							<li>
								Team-oriented, creative, and enthusiastic individual, who can
								create quality all-season camp experiences for teenagers.
							</li>
							<li>Self-motivated with strong organizational skills.</li>
							<li>
								Capable to react quickly, calmly and appropriately in emergency
								situations.
							</li>
							<li>
								Comfortable managing children’s behavior, and acting as a role
								model and mentor.{" "}
							</li>
							<li>Someone who enjoys games and physical activities.</li>
							<li>
								Able to work effectively with representatives of different
								institutions including museum curators, tour guides, managers
								and other colleagues on staff.
							</li>
						</ul>
						<p>
							Then, we are looking for you{" "}
							<span>
								{" "}
								<FaRegSmileWink size={23} className='' />
							</span>{" "}
						</p>
						<p>
							Group Leaders will be responsible to plan general or specialized
							activities, participate in them and encourage group members to be
							fully involved.
						</p>
						<p>
							Responsibilities include but are not limited to leading indoor and
							outdoor group games, sports and karaoke evenings.
						</p>
						<p className='certificate'>Certificate provided on completion.</p>
						<p>
							Don’t hesitate to{" "}
							<span className='contact-link'>
								<Link to='contact'>contact us</Link>
							</span>{" "}
							for more details.
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
