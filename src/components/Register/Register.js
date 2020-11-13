import firebase from "firebase/app";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
	Container, Typography, Card, Grid, TextField, Button
} from "@material-ui/core";

import styles from './Register.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Register() {
	const history = useHistory();
	
	const [form, setForm] = useState({
		email: '',
		password: '',
		name: '',
		phone: '',
		address: '',
	})

	const handleFormChange = (e) => {
		setForm({...form, [e.target.name] : e.target.value});
	}

	const handleRegister = async () => {
		firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
		.catch(error=>alert(error.message));

		firebase.firestore().collection('place').add({
			userId: firebase.auth().currentUser.uid,
			email: form.email,
			name: form.name,
			phone: form.phone,
			address: form.address
		})
		.catch(error=>alert(error.message));
		
		history.push('/login');
	};


	return (
		<Container>
			<Card className={cx('card-form')} elevation={2} size="sm">
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<Typography variant="h5">
							방명록 회원가입
						</Typography>
					</Grid>
					<Grid item>
						<TextField name="email" label="이메일" onChange={handleFormChange}/>
					</Grid>
					<Grid item>
						<TextField name="password" label="비밀번호" type="password" onChange={handleFormChange}/>
					</Grid>
					<Grid item>
						<TextField name="name" label="사업장 이름" type="text" onChange={handleFormChange}/>
					</Grid>
					<Grid item>
						<TextField name="phone" label="사업장 전화번호" type="text" onChange={handleFormChange}/>
					</Grid>
					<Grid item>
						<TextField name="address" label="사업장 주소" type="text" onChange={handleFormChange}/>
					</Grid>
					<Grid item>
						<Button className={cx('register-button')} variant="contained" color="primary" onClick={handleRegister}>
							회원가입
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

export default Register;