import React from "react";
import thyme from '../images/Mask_Group_1.png'
import junkfood from '../images/junkfood-promo@2x.png'
import daytripper from '../images/daytripper-logo@2x.png'
import weather from '../images/weather-logo@2x.png'

function Project() {
	return (
		<>
			<section id="folio">
				<img
					id="thumbnail-1"
					src={thyme}
					alt="thyme"
				/>
				<div className="detail col-12">
					<h3 className="d-title">thyme</h3>
					<p>
						Thyme is a conceptual application designed with Bootcamp
						mates, Caitlin Stevenson, Neema Velasco, and Emily
						Vazquez. Thyme is a calendar-style notetaking app
						created using Express, Handlebars, Node packaging and
						designed using Bootstrap, CSS, Photoshop, Adobe Xd, and
						Procreate.
					</p>
					{/* <!-- Icon links to GitHub and Heroku --> */}
                    
				</div>
			</section>
			<section>
				<img
					id="thumbnail-2"
					src={junkfood}
					alt="junkfood"
				/>
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
				<img
					id="thumbnail-3"
					src={daytripper}
					alt="daytripper"
				/>
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
				<img
					id="thumbnail-4"
					src={weather}
					alt="weather"
				/>
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
				<img
					id=""
					src=""
					alt=""
				/>
				<div className="detail col-12">
					<h3 className="d-title4">just another text editor</h3>
					<p className="para4">
					JATE is a progressive web-based application (PWA) that utilizes IndexedDB for storage and uses a data persistence technique that allows the program to run offline.
					</p>
				</div>
			</section>
		</>
	);
}


export default Project;