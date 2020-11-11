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

function App() {
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
			if (user) {
	
			}
			else {
	
			}
		});
	};
	firebaseInit();

	const [user, setUser] = useState(firebase.auth().currentUser);

	return (
		<Layout user={user}>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/login" render={() => <Login setUser={setUser}/>} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/form" component={GuestBookForm} />
				<PrivateRoute path="/table" component={GuestBookTable} />
				<Redirect to={{pathname: "/about"}} />
			</Switch>
		</Layout>
	);
}

export default App;
