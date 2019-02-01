import React, { Component } from 'react';
import { Typography, CardContent, Card, withStyles, Grid, createMuiTheme } from '@material-ui/core';
import Image from '../../images/bg.jpg';

const theme = createMuiTheme({
	Typography,
});

const styles = theme => ({
	root: {
		flexGrow: 1,
		paddingRight: 15,
		paddingLeft: 15,
		paddingTop: 15,
		marginRight: 'auto',
		marginLeft: 'auto',
		fontFamily: 'Roboto, sans-serif',
	},
	card: {
		maxWidth: 970,
		position: 'relative',
		width: '100%',
		height: 400,
		overflow: 'hidden',
		transition: 'height 1s, color 1s, margin 1s',
		zIndex: 1,
		margin: 'auto',
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	content: {
		padding: 40,
		borderRadius: '0 0 2px 2px',
		marginTop: 73,
	},
	head: {
		letterSpacing: 2,
		fontWeight: 300,
		// fontSize: '4rem',
		marginBottom: 0,
		marginTop: 5,
	},
	subhead: {
		color: '#3f3f3f',
		marginBottom: 5,
		marginTop: -10,
		fontWeight: 100,
		fontStyle: 'italic',
	},
});

class Vcard extends Component {
	render() {
		const { classes } = this.props;
		return (
			<section id="vcard" className={classes.root}>
				<Grid container>
					<Grid container direction="row">
						<Grid item md={12} sm={12} xs={12}>
							<Card id="v-card" className={classes.card}>
								<CardContent className={classes.content} align="center">
									<Typography content="h2" variant="headline" className={classes.head}>
										Daniel Smith
									</Typography>
									<Typography content="h5" variant="subheading" className={classes.subhead}>
										Designer • Developer • Leader
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</section>
		);
	}
}

export default withStyles(styles)(Vcard);
