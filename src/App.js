import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Layout from './components/layout';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import GuestBookForm from './components/GuestBookForm';
import GuestBookTable from './components/GuestBookTable';

import styles from './App.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function App() {
	const [user, setUser] = useState();
	
	const firebaseInit = async () => {
		const firebaseConfig = {
			apiKey: 'AIzaSyDdnQTyWcnyxEmbpr83PqSHa6Ltt_ao7ts',
			authDomain: 'coronaguestbook.firebaseapp.com',
			databaseURL: 'https://coronaguestbook.firebaseio.com',
			projectId: 'coronaguestbook',
			storageBucket: 'coronaguestbook.appspot.com',
			messagingSenderId: '324592839188',
			appId: '1:324592839188:web:c3deceb146dbb6f2475501',
			measurementId: 'G-X1W6C207LY'
		};
		if (!firebase.apps.length)
			firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user)=> {
			setUser(user);
		});
	};
	firebaseInit();

	return (
		<div className={cx('App')}>
			<Layout user={user}>
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/login" render={() => <Login setUser={setUser}/>} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/form" user={user} component={GuestBookForm} />
					<PrivateRoute path="/table" user={user} component={GuestBookTable} />
					<Redirect to={{pathname: "/about"}} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
