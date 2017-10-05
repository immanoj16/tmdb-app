import React, { Component } from 'react';

import { apiKey } from '../utils/api'
import NavContainer from './Nav/NavContainer'

class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			movieName: '',
			movieId: 343611,
			data: {}
		}

		this.changeText = this.changeText.bind(this)
		this.renderData = this.renderData.bind(this)
		this.renderMovieName = this.renderMovieName.bind(this)
	}

	changeText (e) {
		this.setState({
			movieName: e.target.value
		})

		this.renderMovieName(this.state.movieName)
	}

	renderMovieName (movieName) {
		const newMovieName = movieName.replace(' ', '+')
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`

		fetch(url).then(res => res.json())
			.then(data => this.setState({
				movieId: data.id
			}))
	}

	renderData (movieId) {
		const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

		fetch(url).then(res => res.json())
			.then(data => this.setState({
				data
			}))
	}

	componentDidMount() {
		this.renderData(this.state.movieId)
	}

	render() {
		console.log('data', this.state.data)
		return (
			<NavContainer changeText={this.changeText} />
		);
	}
}

export default App
