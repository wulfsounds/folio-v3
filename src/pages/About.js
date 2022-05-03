import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import profile from "../images/dev-profile.jpg";
import "../../src/css/about.css";
import name from '../images/nameplate-folio2.png';

const AboutPage = (props) => {
	return (
		<>
				<Header />
				<Nav />
				<main>
					<div className="container">
						<img
							className="profile-pic"
							src={profile}
							alt="profile picture"
						/>
						<h3 className="hello">hello</h3>
						<div className="bio">
							<p className="about-me">
								<strong>
									Stack Web & Graphic Designer in Dallas,
									Texas.
								</strong>
								<br></br>
								Hello, I’m Dev. I’m currently attending SMU Code
								Bootcamp to develop skills in MERN and mySQL.
								I’ve always had a passion for graphic and web
								design since Tom was my first MySpace friend.
								Over the years, I’ve made a lot of show flyers,
								album covers, church bulletins, posters, tanning
								salon signs, and hand-drawn logos but web
								development is a rediscovery for me. Through
								this course, my goal is to gain enough knowledge
								to be dangerous enough to build websites and
								applications that standout from the rest.
							</p>
						</div>
					</div>
				</main>
				<Footer />
		</>
	);
};

export default AboutPage;
