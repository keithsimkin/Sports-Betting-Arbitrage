import React, { Component } from "react";
import "./searchbar.css"

class SearchBar extends Component {

	searchChange = e => {
		console.log(e.target.value)
	}

	render() {
		return (
			<div className="searchbox">
				<input onChange={this.searchChange} className="search" type="search" name="" placeholder="Search arbs"/>
			</div>
		)
	}
}

export default SearchBar; 