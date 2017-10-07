import React, { Component } from 'react';

class Card extends Component {

	nestedString(nestedData) {
		if (nestedData) {
			let resultString = ''
			nestedData.map(data => resultString = resultString + data.name + ', ')
			resultString = resultString.trim().substring(0, resultString.length - 2)
			return resultString
		}
	}

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
			original_title,
			vote_averages } = this.props.data

			const genre = this.nestedString(genres)
			const productionCompanies = this.nestedString(production_companies)
			const productionCountries = this.nestedString(production_countries)

    // const noData = '-'
  //   const backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path

		return (
			<div className="col-xs-12 col-lg-10 offset-lg-1">
				<div className="col-xs-12 cardcont nopadding">
		      <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
		        <h1>{original_title}</h1>
		        <span className="tagline">{tagline}</span>
		        <p>{overview}</p>
		        <div className="additional-details">
		          <span className="genre-list">{genre}</span><br />
		          <span className="production-list">{productionCompanies}, {productionCountries}</span>
		          <div className="row nopadding release-details">
		            <div className="col-xs-6"> Original Release: <span className="meta-data">{release_date}</span></div>
		            <div className="col-xs-6"> Running Time: <span className="meta-data">{runtime} mins</span> </div>
		            <div className="col-xs-6"> Box Office: <span className="meta-data">{revenue}</span></div>
		            <div className="col-xs-6"> Vote Average: <span className="meta-data">{vote_averages}</span></div>
		          </div>
		        </div>
		      </div>
		      <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
		        <img className='poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} />
		      </div>
		    </div>
			</div>
		);
	}
}

export default Card
