import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState, useEffect } from "react";

function Contact() {
	useEffect(() => {}, []);

	return (
		<>
			<Header />
			<Nav />
				<Form />
			<Footer />
		</>
	);
}

export default Contact;
