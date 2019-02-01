import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Navigation from './components/Navigation.jsx';

function pxToRem(value) {
	return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
	breakpoints: {},
	overrides: {
		MuiTypography: {
			headline: {
				fontSize: pxToRem(40),
				[breakpoints.up('sm')]: {
					fontSize: pxToRem(55),
				},
			},
			subheading: {
				fontSize: pxToRem(16),
				[breakpoints.up('sm')]: {
					fontSize: pxToRem(24),
				},
			},
		},
	},
});

const App = () => (
	<MuiThemeProvider theme={theme}>
		{/* <Navigation /> */}
		<Router>
			<Home path="/" />
			<Projects path="projects">{/* <Project path=":projectID" /> */}</Projects>
		</Router>
	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
