
const HomePage = (props) => {
	return (
		<>
			<nav>
				<ul class="nav justify-content-end navi">
					<li class="nav-item">
						<a class="nav-link" href="/folio">
							folio
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="/about">
							about
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://github.com/wulfsounds" target="_blank">
							github
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="mailto:devinlwulf@gmail.com">
							email
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default HomePage;
