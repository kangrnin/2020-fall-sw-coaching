import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button, Typography, Icon }	from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import styles from './Layout.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Layout(props) {
	console.log(styles);

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

	const userUI = (
		<div className={cx('btn-container')}>
			<AccountCircle className={cx('user-icon')} fontSize="large"/>
			<Typography className={cx('user')}>
				{ props.user && props.user.email }
			</Typography>
			<Link className={cx('btn')} to={{pathname: "/form"}} style={{textDecoration: 'none'}}>
				<Button variant="contained">방명록 작성</Button>
			</Link>
			<Link className={cx('btn')} to={{pathname: "/table"}} style={{textDecoration: 'none'}}>
				<Button variant="contained">방명록 조회</Button>
			</Link>
		</div>
	);

	const guestUI = (
		<div>
			<Link className={cx('btn')} to={{pathname: "/login"}} style={{textDecoration: 'none'}}>
				<Button variant="contained">로그인</Button>
			</Link>
			<Link className={cx('btn')} to={{pathname: "/register"}} style={{textDecoration: 'none'}}>
				<Button variant="contained">회원가입</Button>
			</Link>
		</div>
	);

	return (
		<Fragment>
			<AppBar>
				<Toolbar className={cx('toolbar')}>
					{ titles }
					{ props.user ? userUI : guestUI }
				</Toolbar>
			</AppBar>
			<Container>
				{props.children}
			</Container>
		</Fragment>
	);
}

export default Layout;