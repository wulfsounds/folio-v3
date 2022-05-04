import React, { useState } from "react";
import bootstrap from "bootstrap";
import "../../src/main2.css";

const FORM_ENDPOINT =
	"https://public.herotofu.com/v1/758cd9e0-cb75-11ec-a557-034a17e2da28"; //herotofu form link goes here

const Form = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return (
			<>
				<h4 id="splash-text">Thank You!</h4>
				<p className="say-it">I'll be in touch soon!</p>
			</>
		);
	}

	return (
		<>
			<main className="container col-12">
				<form
					className="container col-12"
					action={FORM_ENDPOINT}
					onSubmit={handleSubmit}
					method="POST"
					target="_blank"
				>
					<h3 className="contact-title">contact</h3>
					<div className="form-group col-4">
						<input
							className="form-control"
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
					</div>
					<div className="form-group col-4">
						<input
						className="form-control"
							type="email"
							placeholder="Email"
							name="email"
							required
						/>
					</div>
					<div className="form-group col-4">
						<textarea
						className="form-control"
							placeholder="Message"
							name="message"
							required
						/>
					</div>
					<div>
						<button className="btn btn-primary" type="submit">
							Send Message
						</button>
					</div>
				</form>
			</main>
			<footer className="contact-foot">
				©2022 Dev Wulf for SMU Bootcamp |{" "}
				<span>
					<a href="https://github.com/wulfsounds/portfolio">
						Repo this on GitHub.
					</a>
				</span>
			</footer>
		</>
	);
};

export default Form;
