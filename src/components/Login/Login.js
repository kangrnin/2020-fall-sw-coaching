import firebase from "firebase/app";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
	Container, Typography, Card, Grid, TextField, Button
} from "@material-ui/core";

function Login({ setUser }) {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			alert("로그인 안됨!!");
		});
	};

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			setUser(user);
			history.push('/form');
		}
	});

	return (
		<Container>
			<Card style={{display:"inline-block"}}elevation={2} size="sm">
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<Typography variant="h5">
							로그인하세요
						</Typography>
					</Grid>
					<Grid item>
						<TextField label="이메일" onChange={e=>setEmail(e.target.value)}/>
					</Grid>
					<Grid item>
						<TextField label="비밀번호" type="password" onChange={e=>setPassword(e.target.value)}/>
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary" onClick={handleLogin}>
							로그인
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

export default Login;