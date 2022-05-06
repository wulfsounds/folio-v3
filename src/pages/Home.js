import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Footer from "../components/Footer";
import contact from "../images/contact.png";
import '../../src/main2.css'


const HomePage = (props) => {
	return (
		<>
			<Header />
			{/* <Nav /> */}
			<main>
				<section className="container col-12">
					<div>
						<h1 id="splash-text">imagine.</h1>
						<h3 className="say-it">i-ˈma-jən</h3>
						<p className="definition">
							to form a mental image or concept of.
						</p>
					</div>
					<div>
						<h1 id="splash-text">create.</h1>
						<h3 className="say-it">krēˈāt</h3>
						<p className="definition">
							to bring something into existence.
						</p>
					</div>
					<div>
						<h1 id="splash-text">inspire.</h1>
						<h3 className="say-it">in-ˈspī(-ə)r</h3>
						<p className="definition">
							to fill someone with the urge or ability to do or
							feel something, especially to do something creative.
						</p>
					</div>
					<img id="contact" src={contact} alt="contact-img" />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
