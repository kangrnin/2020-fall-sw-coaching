import firebase from "firebase/app";

import { useState } from "react";

import {
	Container, Typography, Card, Grid, TextField, Button
} from "@material-ui/core";

function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container>
			<Card style={{display:"inline-block"}}elevation={2} size="sm">
				<Grid container direction="column" spacing={2}>
					<Grid item>
						
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

export default Register;