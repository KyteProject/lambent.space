import React, { Component } from 'react';
import posed from 'react-pose';
import { Typography, CardContent, Card, withStyles, Grid } from '@material-ui/core';

const Square = posed.div({
	idle: { scale: 1 },
	hovered: { scale: 1.5 },
});

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
	box: {
		width: 970,
		height: 200,
		background: '#ff1c68',
	},
	card: {
		maxWidth: 970,
		margin: 'auto',
		backgroundColor: '#e8eff7',
	},
	cardContent: {
		margin: 20,
		marginBottom: 10,
	},
};

class Animation extends Component {
	state = { hovering: false };

	render() {
		const { classes } = this.props;
		const { hovering } = this.state;

		return (
			<section id="animation" className={styles.root}>
				<Grid container>
					<Grid item md={12}>
						<Card className={classes.card}>
							<CardContent className={classes.cardContent}>
								{/* <Square
									className={classes.box}
									pose={this.state.hovering ? 'hovered' : 'idle'}
									onMouseEnter={() => this.setState({ hovering: true })}
									onMouseLeave={() => this.setState({ hovering: false })}
								/> */}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</section>
		);
	}
}

export default withStyles(styles)(Animation);
