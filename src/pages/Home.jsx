import React, { Component } from 'react';
import About from '../components/home/About.jsx';
import Vcard from '../components/home/Vcard.jsx';
// import Animation from '../components/Animation.jsx';
import Projects from '../components/home/Projects.jsx';
import Skills from '../components/home/Skills.jsx';

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Vcard />
				<About />
				{/* <Projects /> */}
				<Skills />
			</React.Fragment>
		);
	}
}

export default Home;
