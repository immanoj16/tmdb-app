import React, { Component } from 'react'

const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class NavContainer extends Component {

	render() {
		return (
			<div className="col-xs-12 search-container nopadding">
        <div className="row">

          <div className="col-xs-12 col-sm-6 col-lg-5">
            <a href="./" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-7">
            <form onSubmit={this.props.submitQuery}>
							<input type="text" placeholder="search by movie name..." onChange={this.props.changeText} />
						</form>
          </div>
        </div>
      </div>
		);
	}
}

export default NavContainer
