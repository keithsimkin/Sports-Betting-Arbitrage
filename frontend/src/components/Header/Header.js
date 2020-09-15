import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<header class="box">
		        <nav>
		          <div className="logo">
		          	<Logo />
		          </div>
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