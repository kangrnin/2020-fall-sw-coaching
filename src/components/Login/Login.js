import firebase from "firebase/app";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
	Container, Typography, Card, Grid, TextField, Button
} from "@material-ui/core";

import styles from './Login.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Login() {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			alert(error.message);
		});

		const user = firebase.auth().currentUser;
		if(user)
			history.push('/form');
	};

	return (
		<Container>
			<Card className={cx('card-form')} elevation={2} size="sm">
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<Typography variant="h5">
							방명록 로그인
						</Typography>
					</Grid>
					<Grid item>
						<TextField label="이메일" onChange={e=>setEmail(e.target.value)}/>
					</Grid>
					<Grid item>
						<TextField label="비밀번호" type="password" onChange={e=>setPassword(e.target.value)}/>
					</Grid>
					<Grid item>
						<Button className={cx('login-button')} variant="contained" color="primary" onClick={handleLogin}>
							로그인
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

export default Login;