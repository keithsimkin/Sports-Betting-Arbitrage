import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<header class="box">
		        <nav>
		          <a href="#" className="logo">Logo</a>
		          <div className="searchbar">
		          	<SearchBar />
		          </div>
		          <a href="#">Our Team</a>
		        </nav>
	      </header>
			{//
						//<UserProfile />
					}
		</div>
	)
}

export default Header;