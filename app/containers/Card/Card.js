import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { data } = this.props

		console.log(data)

		const {
			backdrop_path,
			budget,
			genres,
			homepage,
			overview,
			poster_path,
			production_companies,
			production_countries,
			release_date,
			revenue,
			runtime,
			spoken_languages,
			tagline,
			title,
			vote_averages } = this.props.data

		// const posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path
  //   const productionCompanies = data.production_companies
  //   const productionCountries = data.production_countries
  //   const genres = data.genre
  //   const totalRevenue = data.revenue
  //   const productionList = nestedDataToString(productionCompanies)
  //   const productionCountriesList = nestedDataToString(productionCountries)
  //   const noData = '-'
  //   const genresList = nestedDataToString(genres)
  //   const backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path

		return (
			<div className="container">
				<div className="image">
					<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
				</div>
				<div className="dataContainer">

				</div>
			</div>
		);
	}
}

function nestedDataToString(nestedData) {
  let nestedArray = [],
      resultString;
  nestedArray.forEach(function(item, i){
    nestedArray.push(item.name);
  });
  resultString = nestedArray.join(', '); // array to string
  return resultString;
}

export default Card
