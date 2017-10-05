import React, { Component } from 'react'

class NavContainer extends Component {

	render() {
		return (
			<div className="navContainer">
				<ul className="navbar">
					<li>TMDB-APP</li>
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
