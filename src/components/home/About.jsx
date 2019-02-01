import React, { Component } from 'react';
import { Button, Icon, Typography, CardContent, CardActions, Card, withStyles, Grid } from '@material-ui/core';

const styles = {
	root: {
		flexGrow: 1,
		paddingTop: '15px',
		paddingBottom: '30px',
		paddingRight: 15,
		paddingLeft: 15,
		marginRight: 'auto',
		marginLeft: 'auto',
		justifyContent: 'center',
		textAlign: 'center',
	},
	card: {
		maxWidth: 970,
		margin: 'auto',
		backgroundColor: '#e8eff7',
	},
	button: {
		color: 'white',
		backgroundColor: '#191a1f',
		transitionDuration: '0.4s',
		'&:hover': {
			backgroundColor: '#FC3A51',
		},
	},
	cardActions: {
		borderTop: '1px solid rgba(160, 160, 160, 0.2)',
		padding: 20,
		height: 'auto',
		marginRight: 'auto',
		marginLeft: 'auto',
		animationDelay: '1s',
	},
	rightIcon: {
		paddingLeft: 10,
	},
	cardContent: {
		margin: 20,
		marginBottom: 10,
	},
};

class About extends Component {
	render() {
		const { classes } = this.props;

		return (
			<section id="about" className={classes.root}>
				<Grid container>
					<Grid item md={12}>
						<Card id="about-card" className={classes.card}>
							<CardContent className={classes.cardContent}>
								<Typography component="p" align="center">
									Welcome to my personal/portfolio website. I am a creative enthusiast with over 15
									years experience in developing my skills. Possessing strong technical,
									interpersonal, and planning skills has allowed me to grow into various management
									roles where I have proven to be very effective. I am the founder of Aberdeen parkour
									and the Co-Founder of Ukemi and SquareGo.
								</Typography>
								<br />
								<Typography component="p" align="center">
									Currently I am pursuing my passion for programming and have been enjoying working
									with Node.js, React.js, Express.js, and MongoDB. This page will be updated to show
									my design and programming projects. For now please feel free to download my resume
									or send me and email!
								</Typography>
							</CardContent>
							<CardActions id="about-button" className={classes.cardActions}>
								<Grid container spacing={24} style={{ justifyContent: 'center' }}>
									<Grid item xxs={12} sm={6}>
										<Button
											className={classes.button}
											variant="contained"
											size="large"
											href="./Daniel_Smith_Resume.pdf"
										>
											Download CV <Icon className={classes.rightIcon}>save_alt</Icon>
										</Button>
									</Grid>
									<Grid item xxs={12} sm={6}>
										<Button
											className={classes.button}
											variant="contained"
											size="large"
											href="mailto:daniel.smith@ukemi.ninja"
										>
											Contact Me <Icon className={classes.rightIcon}>send</Icon>
										</Button>
									</Grid>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</section>
		);
	}
}

export default withStyles(styles)(About);
