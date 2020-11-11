import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, yellow } from '@material-ui/core/colors';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	btn: {
		background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
		border: 0,
		marginBottom: 15,
		borderRadius: 15,
		color: 'white',
		padding: '5px 30px'
	}
});

const theme = createMuiTheme({
	typography: {
		h2: {
			fontSize: 36,
			marginBottom: 5,
		},
		subtitle1: {
			marginBottom: 20,
		}
	},
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: yellow[500],
		}
	}
})

function ButtonStyled()  {
	const classes = useStyles();
	return <Button className={classes.btn}>Test Styled Button</Button>
}


function CheckboxExample() {
	const [checked, setChecked] = useState(true);

	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					onChange={e=>setChecked(e.target.checked)}
				/>}
			label="Testing Checkbox"
		/>
	);
}

function App() {
  return (
		<ThemeProvider theme={theme}>
			<AppBar>
				<ToolBar>
					<IconButton>
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6">
						MUI Themeing
					</Typography>
					<Button>
						Login
					</Button>
				</ToolBar>
			</AppBar>
			<Container maxWidth="sm" >
				<div className="App">
					<header className="App-header">
						<Typography variant="h2">
							Welcome to MUI
						</Typography>
						<Typography variant="subtitle1">
							Learn how to use Material UI
						</Typography>
						<ButtonStyled/>

						<Grid container spacing={2} justify="center">
							<Grid item xs={3} sm={6}>
								<Paper style={{ height:75, width:'100%' }}/>
							</Grid>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height:75, width:'100%' }}/>
							</Grid>
							<Grid item xs={3} lg={12}>
								<Paper style={{ height:75, width:'100%' }}/>
							</Grid>
						</Grid>
						<CheckboxExample/>
						<ButtonGroup>
							<Button
								startIcon={<SaveIcon/>}
								size="large"
								variant="contained" 
								color="primary">
								Save
							</Button>
							<Button
								startIcon={<DeleteIcon/>}
								size="large"
								variant="contained" 
								color="secondary">
								Discard
							</Button>
						</ButtonGroup>
						<img src={logo} className="App-logo" alt="logo" />
					</header>
				</div>
			</Container>
		</ThemeProvider>
  );
}

export default App;
