import React, { useState } from "react";
import bootstrap from "bootstrap";
import "../../src/main2.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/758cd9e0-cb75-11ec-a557-034a17e2da28"; //herotofu form link goes here

const Form = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return(
			<>
				<h4 id="splash-text">Thank You!</h4>
				<p className="say-it">I'll be in touch soon!</p>
			</>
		);
	}

	return(
		<form
			action={FORM_ENDPOINT}
			onSubmit={handleSubmit}
			method="POST"
			target="_blank"
		>
			<div className="form-group">
				<input className="form-control" type="text" placeholder="Name" name="name" required />
			</div>
			<div className="form-group">
				<input type="email" placeholder="Email" name="email" required />
			</div>
			<div className="form-group">
				<textarea placeholder="Message" name="message" required />
			</div>
			<div> 
				<button className="btn btn-primary" type="submit">Send Message</button>
			</div>
		</form>
	)
}

export default Form;