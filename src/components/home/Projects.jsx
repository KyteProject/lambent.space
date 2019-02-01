import React, { Component } from 'react';
import {
	Button,
	Icon,
	Paper,
	Typography,
	CardContent,
	CardActions,
	Card,
	withStyles,
	Grid,
	CardActionArea,
	CardMedia,
} from '@material-ui/core';

import Project1 from '../../images/project1.png';

const styles = {
	root: {
		flexGrow: 1,
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
		position: 'relative',
	},
	cardContent: {
		margin: 20,
		marginBottom: 10,
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
	projectRight: {
		lastChild: 'margin-bottom: 0',
		position: 'relative',
		height: '21em',
		'&:after': {
			clear: 'both',
			content: '',
			display: 'block',
		},
		'&:before': {
			background: 'blue',
			content: '',
			display: 'inline-block',
			height: '100%',
			verticleAlign: 'middle',
		},
		textAlign: 'left',
	},
	media: {
		overflow: 'hidden',
		position: 'relative',
		border: 0,
		verticleAlign: 'middle',
		transition: '.5s',
		opacity: 1,
		'&:hover': {
			opacity: 1,
			zIndex: 22,
			transform: 'scale(1.05)',
			webkitTransform: 'scale(1.05)',
		},
	},
	content: {
		display: 'inline-block',
		padding: '40',
		verticalAlign: 'middle',
		width: '49.3%',
	},
	contentTitle: {
		marginBottom: '0.5em',
		marginTop: '1em',
		textTransform: 'uppercase',
		fontSize: '1.4em',
		fontWeight: 500,
	},
};

class Projects extends Component {
	render() {
		const { classes } = this.props;

		return (
			<section id="Projects" className={classes.root}>
				<Grid container>
					<Grid md={12}>
						<div className={classes.title}>
							<Typography content="h4" variant="h4" className={classes.titleText}>
								Projects
							</Typography>
						</div>
						<Card id="v-card" className={classes.card}>
							<Grid container xs={12} className={classes.projectRight}>
								<Grid item xs={6}>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Project 1"
											title="Project 1"
											image={Project1}
											className={classes.media}
										/>
									</CardActionArea>
								</Grid>
								<Grid item xs={6}>
									<CardContent className={classes.content}>
										<Typography content="h6" className={classes.contentTitle}>
											Project 1
										</Typography>
									</CardContent>
								</Grid>
							</Grid>
							<CardContent className={classes.content} align="center" />
						</Card>
					</Grid>
				</Grid>
			</section>
		);
	}
}

export default withStyles(styles)(Projects);
