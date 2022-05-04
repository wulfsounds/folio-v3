import React, { useState } from "react";
import { Button } from "bootstrap";

function Form() {
	// Setting state variables for first and last name
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleInputChange = (e) => {
		// Getting the value and name that triggered the change
		const { name, value } = e.target;
		// Call either the first or last name based on the user field
		return name === "firstName" ? setFirstName(value) : setLastName(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Alert the user their first and last name, clear the inputs
		alert(
			`Hello ${firstName} ${lastName}, thanks for the message! I'll be in contact soon!`
		);
		setFirstName("");
		setLastName("");
	};

	return (
		<>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
		</>
	);
}

export default Form;
