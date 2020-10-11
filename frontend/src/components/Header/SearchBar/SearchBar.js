import React, { Component } from "react";
import "./searchbar.css"

class SearchBar extends Component {

	render() {
		return (
			<div className="searchbox">
				<input className="search" type="search" name="" placeholder="Search arbs"/>
			</div>
		) 
	}
}

export default SearchBar; 