import React, { Component } from 'react'

const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class NavContainer extends Component {

	render() {
		return (
			<div className="navContainer">
				<ul className="navbar">
					<li>
						<a href="./" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
					</li>
					<li>
						<form onSubmit={this.props.submitQuery}>
							<input type="text" placeholder="search by movie name..." onChange={this.props.changeText} />
						</form>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavContainer
