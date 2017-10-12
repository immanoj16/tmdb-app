import React, { Component } from 'react';

import { apiKey } from '../utils/api'
import NavContainer from './Nav/NavContainer'
import Card from './Card/Card'

class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			movieName: '',
			movieId: 343611,
			data: {},
			movieData: {}
		}

		this.changeText = this.changeText.bind(this)
		this.submitQuery = this.submitQuery.bind(this)
		this.renderMovieName = this.renderMovieName.bind(this)
		this.renderData = this.renderData.bind(this)
	}

	changeText (e) {
		this.setState({
			movieName: e.target.value
		})
	}

	submitQuery (e) {
		e.preventDefault()

		this.renderMovieName(this.state.movieName)
		console.log('mov', this.state.movieId)
		this.renderData(this.state.movieId)
	}

	renderMovieName (movieName) {
		const newMovieName = movieName.split(' ').join('+')
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${newMovieName}`

		fetch(url).then(res => res.json())
			.then(data => this.setState({
					movieId: data.results[0].id
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
		return (
			<div>
				<NavContainer changeText={this.changeText} submitQuery={this.submitQuery} />
				<Card data={this.state.data} />
			</div>
		);
	}
}

export default App
