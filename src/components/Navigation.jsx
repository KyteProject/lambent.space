import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from '@reach/router';

export class Navigation extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<Link to="/">Home</Link> <Link to="/projects">Projects</Link>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Navigation;
