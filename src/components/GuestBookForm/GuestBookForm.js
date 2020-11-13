import firebase from "firebase/app";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
	Container, Typography, Card, Grid, TextField, Button, Checkbox, FormControl, FormControlLabel
} from "@material-ui/core";

import styles from './GuestBookForm.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function GuestBook() {
	const history = useHistory();

	const defaultForm = {
		name: '',
		phone: '',
		temperature: '',
		home: '',
		agree: false
	};
	const [form, setForm] = useState(defaultForm);

	const handleForm = (e) => {
		setForm({...form, [e.target.name] : e.target.value});
	}

	const handleCheckbox = (e) => {
		setForm({...form, [e.target.name] : e.target.checked});
	}

	const handleSubmit = async () => {
		firebase.firestore().collection('guestbook')
		.add({
			...form,
			timestamp: new Date(),
			placeId: firebase.auth().currentUser.uid
		})
		.catch(error=>alert(error.message));

		setForm(defaultForm);
	};

	return (
		<Container>
			<Card className={cx('card-form')} elevation={2} size="sm">
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<Typography variant="h5">
							방역 방명록을 작성하세요
						</Typography>
					</Grid>
					<Grid item>
						<TextField name="name" label="이름" value={form.name} onChange={handleForm}/>
					</Grid>
					<Grid item>
						<TextField name="phone" label="전화번호" type="text" value={form.phone} onChange={handleForm}/>
					</Grid>
					<Grid item>
						<TextField name="temperature" label="체온" type="text" value={form.temperature} onChange={handleForm}/>
					</Grid>
					<Grid item>
						<TextField name="home" label="거주지역" type="text" value={form.home} onChange={handleForm}/>
					</Grid>
					<Grid item>
						<FormControlLabel
							control={
								<Checkbox name="agree" color="primary" checked={form.agree} onChange={handleCheckbox}/>
							}
							label="개인정보 수집 동의"
						/>
					</Grid>
					<Grid item>
						<Button className={cx('submit-button')} variant="contained" color="primary"
								disabled={!form.agree} onClick={handleSubmit}>
							방명록 등록!
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

export default GuestBook;