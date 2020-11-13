import firebase from "firebase/app";

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button, Typography, Icon }	from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import styles from './Layout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Layout({user: user, children: children}) {
	const titles = (
		<div className={cx('title-container')}>
			<Typography className={cx('title')} variant="h6">
				Corona Guest Book
			</Typography>
			<Typography className={cx('subtitle')} variant="subtitle2">
				2020 SKKU SW Coaching
			</Typography>
		</div>		
	)

	const handleLogout = async () => {
		firebase.auth().signOut().catch(error=>alert(error.message));
	}

	const userUI = (
		<div className={cx('btn-container')}>
			<AccountCircle className={cx('user-icon')} fontSize="large"/>
			<Typography className={cx('user')}>
				{ user && user.email }
			</Typography>
			<Link className={cx('btn')} to={{pathname: "/form"}}>
				<Button variant="contained">방명록 작성</Button>
			</Link>
			<Link className={cx('btn')} to={{pathname: "/table"}}>
				<Button variant="contained">방명록 조회</Button>
			</Link>
			<Link className={cx('btn')}>
				<Button variant="contained" onClick={handleLogout}>로그아웃</Button>
			</Link>
		</div>
	);

	const guestUI = (
		<div>
			<Link className={cx('btn')} to={{pathname: "/login"}}>
				<Button variant="contained">로그인</Button>
			</Link>
			<Link className={cx('btn')} to={{pathname: "/register"}}>
				<Button variant="contained">회원가입</Button>
			</Link>
		</div>
	);

	return (
		<Fragment>
			<AppBar>
				<Toolbar className={cx('toolbar')}>
					{ titles }
					{ user ? userUI : guestUI }
				</Toolbar>
			</AppBar>
			<Container>
				{ children }
			</Container>
		</Fragment>
	);
}

export default Layout;