import { useState, useEffect } from "react"
import '../../src/main2.css'
const FolioPage = (props) => {

  return (
    <>
			<header>
				<nav>
					<ul className="nav justify-content-end navi">
						<li className="nav-item">
							<a className="nav-link a" href="/folio">
								folio
							</a>
						</li>
						<li className="nav-item a">
							<a className="nav-link active" href="/about">
								about
							</a>
						</li>
						<li className="nav-item a">
							<a
								className="nav-link"
								href="https://github.com/wulfsounds"
								target="_blank"
								rel="noreferrer"
							>
								github
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link a"
								href="mailto:devinlwulf@gmail.com"
							>
								email
							</a>
						</li>
					</ul>
				</nav>
			</header>
            <section id="folio">
                <img id="thumbnail-1" src="./Assets/images/Mask_Group_1.png" alt="thyme" />
                <div className="detail col-12">
                  <h3 className="d-title">thyme</h3>
                  <p>Thyme is a conceptual application designed with Bootcamp mates, Caitlin Stevenson, Neema Velasco, and Emily Vazquez. Thyme is a calendar-style notetaking app created using Express, Handlebars, Node packaging and designed using Bootstrap, CSS, Photoshop, Adobe Xd, and Procreate.</p>
                  {/* <!-- Icon links to GitHub and Heroku --> */}
                </div>
              </section>
              <section>
                <img id="thumbnail-2" src="./Assets/images/junkfood-promo@2x.png" alt="junkfood" />
                <div className="detail col-12">
                  <h3 className="d-title2">junkfood</h3>
                  <p className="para2">Junkfood is the first collaborative group project created with Victor Kennedy and Inna Arabejo. Junkfood is a web-based application that draws inspiration from sites such as Giphy and imgur to serve as a harbor for an engadging online community. It is created using vanilla based javascript utilizing jQuery syntax and third-party Open Source APIs. </p>
                </div>
              </section>
              <section>
                <img id="thumbnail-3" src="./Assets/images/daytripper-logo@2x.png" alt="daytripper" />
                <div className="detail col-12">
                  <h3 className="d-title3">daytripper</h3>
                  <p className="para3">Daytripper is a single-day scheduler that stores inputed save data locally. It's design and name is inspired by the tune when the world started to live in color. It was created using jQuery and empowered by Moment.js. </p>
                </div>
              </section>
              <section>
                <img id="thumbnail-4" src="./Assets/images/weather-logo@2x.png" alt="weather" />
                <div className="detail col-12">
                  <h3 className="d-title4">weather</h3>
                  <p className="para4">Weather is a five day weather application powered by OpenWeather API - an free open-source weather api. It was created using Vanilla.js and moment.js.</p>
                </div>
              </section>
    </>
  )
}

export default FolioPage