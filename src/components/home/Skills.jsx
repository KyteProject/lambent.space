import React, { Component } from 'react';
import { Typography, Tooltip, CardContent, Card, withStyles, Grid, Zoom } from '@material-ui/core';

import Html from '../../icons/Html.png';
import Css from '../../icons/Css.png';
import Javascript from '../../icons/Javascript.png';
import Material from '../../icons/MaterialUi.png';
import Reactjs from '../../icons/React.png';
import Wordpress from '../../icons/Wordpress.png';

import Express from '../../icons/Express.png';
import Graphql from '../../icons/Graphql.png';
import Mongo from '../../icons/Mongo.png';
import Mysql from '../../icons/Mysql.png';
import Nodejs from '../../icons/Nodejs.png';
import Sqlite from '../../icons/Sqlite.png';

import AE from '../../icons/AE.png';
import AI from '../../icons/AI.png';
import ID from '../../icons/ID.png';
import PS from '../../icons/PS.png';
import XD from '../../icons/XD.png';

import Git from '../../icons/Git.png';
import Eslint from '../../icons/Eslint.png';
import Linux from '../../icons/Linux.png';
import Office from '../../icons/Office.png';
import Vscode from '../../icons/Vscode.png';
import Windows from '../../icons/Windows.png';

const styles = {
	root: {
		flexGrow: 1,
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 15,
		marginRight: 'auto',
		marginLeft: 'auto',
		justifyContent: 'center',
		textAlign: 'center',
	},
	title: {
		marginBottom: 18,
	},
	titleText: {
		textTransform: 'uppercase',
		textAlign: 'center',
		fontWeight: 600,
		fontSize: '2.18rem',
		lineHeight: '110%',
		margin: '1.14rem 0 0.912rem 0',
		display: 'block',
		color: '#fff',
	},
	card: {
		maxWidth: 970,
		margin: 'auto',
		backgroundColor: '#e8eff7',
	},
	contentTitle: {
		textTransform: 'uppercase',
		fontSize: '1.4em',
		fontWeight: 500,
	},
	icon: {
		height: 50,
		padding: 5,
		webkitFilter: 'drop-shadow(1px 1px 1px #333)',
		filter: 'drop-shadow(1px 1px 1px #333)',
		'&:hover': {
			webkitFilter: 'drop-shadow(2px 2px 2px #333)',
			filter: 'drop-shadow(2px 2px 2px #333)',
		},
	},
	grid: {
		border: '0.5px solid #ccc',
		height: 200,
		position: 'relative',
	},
	iconContainer: {
		margin: 0,
		position: 'absolute',
		top: '60%',
		left: '50%',
		width: '95%',
		transform: 'translate(-50%, -50%)',
	},
};

class Skills extends Component {
	render() {
		const { classes } = this.props;

		return (
			<section id="skills" className={classes.root}>
				<Grid container>
					<Grid xs={12}>
						<div className={classes.title}>
							<Typography content="h4" variant="h4" className={classes.titleText}>
								Tools & Technologies
							</Typography>
						</div>
						<Card id="skills-card" className={classes.card}>
							<Grid container xs={12}>
								<Grid item xs={12} sm={6} className={classes.grid}>
									<CardContent>
										<Typography content="h6" className={classes.contentTitle}>
											Front-End
										</Typography>
										<div className={classes.iconContainer} style={{ width: '80%' }}>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="HTML">
												<img src={Html} className={classes.icon} alt="HTML" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="CSS">
												<img src={Css} className={classes.icon} alt="CSS" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Javascript">
												<img src={Javascript} className={classes.icon} alt="Javascript" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Material UI">
												<img src={Material} className={classes.icon} alt="Material UI" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="React.js">
												<img src={Reactjs} className={classes.icon} alt="React.js" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Wordpress CMS"
											>
												<img src={Wordpress} className={classes.icon} alt="Wordpress CMS" />
											</Tooltip>
										</div>
									</CardContent>
								</Grid>
								<Grid item xs={12} sm={6} className={classes.grid}>
									<CardContent>
										<Typography content="h6" className={classes.contentTitle}>
											Back-End
										</Typography>
										<div className={classes.iconContainer} style={{ width: '80%' }}>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Express.js">
												<img src={Express} className={classes.icon} alt="Express.js" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="GraphQL">
												<img src={Graphql} className={classes.icon} alt="GraphQL" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Mongo DB">
												<img src={Mongo} className={classes.icon} alt="Mongo DB" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="MySQL">
												<img src={Mysql} l className={classes.icon} alt="MySQL" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Node.js">
												<img src={Nodejs} className={classes.icon} alt="Node js" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="SQLite">
												<img src={Sqlite} className={classes.icon} alt="SQLite" />
											</Tooltip>
										</div>
									</CardContent>
								</Grid>
							</Grid>
							<Grid container xs={12}>
								<Grid item xs={12} sm={6} className={classes.grid}>
									<CardContent>
										<Typography content="h6" className={classes.contentTitle}>
											Design
										</Typography>
										<div className={classes.iconContainer} style={{ width: '100%' }}>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Adobe After Effects"
											>
												<img src={AE} className={classes.icon} alt="Adobe After Effects" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Adobe Illustrator"
											>
												<img src={AI} className={classes.icon} alt="Adobe Illustrator" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Adobe InDesign"
											>
												<img src={ID} className={classes.icon} alt="Adobe InDesign" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Adobe Photoshop"
											>
												<img src={PS} className={classes.icon} alt="Adobe Photoshop" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Adobe Experience Design"
											>
												<img src={XD} className={classes.icon} alt="Adobe Experience Design" />
											</Tooltip>
										</div>
									</CardContent>
								</Grid>
								<Grid item xs={12} sm={6} className={classes.grid}>
									<CardContent>
										<Typography content="h6" className={classes.contentTitle}>
											Other
										</Typography>
										<div className={classes.iconContainer} style={{ width: '80%' }}>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Git">
												<img src={Git} className={classes.icon} alt="Git" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="ES Lint">
												<img src={Eslint} className={classes.icon} alt="ES Lint" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Linux OS">
												<img src={Linux} className={classes.icon} alt="Linux OS" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Microsoft Office"
											>
												<img src={Office} className={classes.icon} alt="Microsoft Office" />
											</Tooltip>
											<Tooltip
												enterTouchDelay={0}
												TransitionComponent={Zoom}
												title="Visual Studio Code"
											>
												<img src={Vscode} className={classes.icon} alt="Visual Studio Code" />
											</Tooltip>
											<Tooltip enterTouchDelay={0} TransitionComponent={Zoom} title="Windows OS">
												<img src={Windows} className={classes.icon} alt="Windows OS" />
											</Tooltip>
										</div>
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</section>
		);
	}
}

export default withStyles(styles)(Skills);
