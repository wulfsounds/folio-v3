import contact from "../images/contact.png"

const HomePage = (props) => {
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
					<img
						id="contact"
						src={contact}
						alt="contact-img"
					/>
				</section>
			</main>
		</>
	);
};

export default HomePage;
