import React from "react";
import thyme from "../images/Mask_Group_1.png";
import junkfood from "../images/junkfood-promo@2x.png";
import daytripper from "../images/daytripper-logo@2x.png";
import weather from "../images/weather-logo@2x.png";
import employee from "../images/Employee-frame.png";
import jate from "../images/jate-frame.png";
import heroku from "../images/heroku.png";
import github from "../images/github.png";
import bootstrap from "bootstrap";

function Project() {
	return (
		<>
			<h1 className="folio-title">folio</h1>
			<section id="folio">
				<img
					id="thumbnail-1"
					className="img-fluid"
					src={thyme}
					alt="thyme"
				/>
				<div className="icon-box">
					<a href="https://thyme-calendar.herokuapp.com/">
						<img className="icons heroku" src={heroku} alt="heroku icon" />
					</a>
					<a href="https://github.com/wulfsounds/g2p-thyme">
						<img src={github} alt="github icon" />
					</a>
				</div>
				<div className="detail col-12">
					<div className="head">
						<h3 className="d-title thyme-header">thyme</h3>
					</div>
					<p>
						Thyme is a conceptual application designed with Bootcamp
						mates, Caitlin Stevenson, Neema Velasco, and Emily
						Vazquez. Thyme is a calendar-style notetaking app
						created using Express, Handlebars, Node packaging and
						designed using Bootstrap, CSS, Photoshop, Adobe Xd, and
						Procreate.
					</p>
				</div>
			</section>
			<section>
				<img id="thumbnail-2" src={junkfood} alt="junkfood" />
				<div className="icon-box2">
				<a href="https://wulfsounds.github.io/g3p-junkfood/">
						<img className="icons heroku" src={heroku} alt="heroku icon" />
					</a>
					<a href="https://github.com/wulfsounds/g3p-junkfood">
						<img src={github} alt="github icon" />
					</a>
				</div>
				<div className="detail col-12">
					<h3 className="d-title2">junkfood</h3>
					<p className="para2">
						Junkfood is the first collaborative group project
						created with Victor Kennedy and Inna Arabejo. Junkfood
						is a web-based application that draws inspiration from
						sites such as Giphy and imgur to serve as a harbor for
						an engadging online community. It is created using
						vanilla based javascript utilizing jQuery syntax and
						third-party Open Source APIs.{" "}
					</p>
				</div>
			</section>
			<section>
				<img id="thumbnail-3" src={daytripper} alt="daytripper" />
				<div className="icon-box3">
				<a href="https://github.com/wulfsounds/daytripper">
						<img className="icons heroku" src={heroku} alt="heroku icon" />
					</a>
					<a href="https://wulfsounds.github.io/daytripper/">
						<img src={github} alt="github icon" />
					</a>
				</div>
				<div className="detail col-12">
					<h3 className="d-title3">daytripper</h3>
					<p className="para3">
						Daytripper is a single-day scheduler that stores inputed
						save data locally. It's design and name is inspired by
						the tune when the world started to live in color. It was
						created using jQuery and empowered by Moment.js.{" "}
					</p>
				</div>
			</section>
			<section>
				<img id="thumbnail-4" src={weather} alt="weather" />
				<div className="icon-box4">
				<a href="https://wulfsounds.github.io/weather-dashboard/">
						<img className="icons heroku" src={heroku} alt="heroku icon" />
					</a>
					<a href="https://github.com/wulfsounds/weather-dashboard">
						<img src={github} alt="github icon" />
					</a>
				</div>
				<div className="detail col-12">
					<h3 className="d-title4">weather</h3>
					<p className="para4">
						Weather is a five day weather application powered by
						OpenWeather API - an free open-source weather api. It
						was created using Vanilla.js and moment.js.
					</p>
				</div>
			</section>
			<section>
				<img id="thumbnail-5" src={jate} alt="jate frame pic" />
				<div className="icon-box5">
					<a href="https://github.com/wulfsounds/pwa-text-editor">
						<img src={github} alt="github icon5" />
					</a>
				</div>
				<div className="detail col-12">
					<h3 className="d-title5 jate-header">
						just another text editor
					</h3>
					<p className="para5">
						JATE is a progressive web-based application (PWA) that
						utilizes IndexedDB for storage and uses a data
						persistence technique that allows the program to run
						offline.
					</p>
				</div>
			</section>
			<section>
				<img
					id="thumbnail-6"
					src={employee}
					alt="employee tracker pic"
				/>
				<div className="icon-box6">
					<a href="https://github.com/wulfsounds/sql-employee-tracker">
						<img src={github} alt="github icon" />
					</a>
				</div>
				<div className="detail col-12">
					<h3 className="d-title6">employee tracker</h3>
					<p className="para6">
						The Employee Tracker is a command-line application built
						with a back-end, Express.js server using a content
						management system (CMS) interface. The application
						stores basic employee information in a SQL database
						using a CRUD api.
					</p>
				</div>
			</section>
		</>
	);
}

export default Project;
