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

	commafy(num) {
		num = num + ''
		let str = num.split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return '$' + str.join('.');
	}

	componentDidUpdate() {
		const backdropIMG = 'https://image.tmdb.org/t/p/original' + this.props.data.backdrop_path

	  document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
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
			vote_average } = this.props.data

		const genre = this.nestedString(genres)
		const productionCompanies = this.nestedString(production_companies)
		const productionCountries = this.nestedString(production_countries)
		const boxOffice = this.commafy(revenue)

		return (
				<div className='container'>
					<div className='image'>
						<img className='poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} />
					</div>
					<div className='dataContainer'>
						<h1 className='title'>{original_title}</h1>
						<span className="data">{tagline}</span>
		        <p>{overview}</p>
		        <div className="details">
							<span>{genre}</span><br />
		          <div> Production Companies: <span className='data'>{productionCompanies}</span></div>
		          <div> Production Countries: <span className='data'>{productionCountries}</span></div>
		          <div className='movDetails'>
		            <div>
		            	<div> Original Release: <span className='data'>{release_date}</span></div>
		            	<div> Running Time: <span className='data'>{runtime} mins</span> </div>
		            </div>
		            <div>
		            	<div> Box Office: <span className='data'>{boxOffice}</span></div>
		            	<div> Vote Average: <span className='data'>{vote_average} / 10</span></div>
		            </div>
		          </div>
		        </div>
					</div>
				</div>
		);
	}
}

export default Card
