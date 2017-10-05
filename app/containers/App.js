import React, { Component } from 'react';

import { apiKey } from '../utils/api'
import NavContainer from './Nav/NavContainer'

class App extends Component {

	renderData () {
		const url = `https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}`

		fetch(url).then(res => res.json())
			.then(data => console.log(data))
	}

	componentDidMount() {
		this.renderData()
	}

	render() {
		return (
			<NavContainer />
		);
	}
}

export default App
