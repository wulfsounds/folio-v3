import React from "react";

function Header() {
	return (
		<header className="header">
        <a href="/">
			<h2 id="title-main">WulfSounds</h2>
			<h2 id="title-fourth">WulfSounds</h2>
        </a>
		<nav>
			<ul className="nav justify-content-end navi">
				<li className="nav-item a">
					<a className="nav-link active" href="/about">
						about
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link a" href="/folio">
						folio
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link a" href="/contact">
						contact
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
	);
}

export default Header;
