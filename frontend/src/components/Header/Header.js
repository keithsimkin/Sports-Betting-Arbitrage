import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<header>
		        <nav class="navbar">
		          <div className="logo">
		          	<Logo />
		          </div>
		          <div className="searchbar">
		          	<SearchBar />
		          </div>
		          <div className="user">
		          	<UserProfile />
		          </div>
		        </nav>
	      	</header>
		</div>
	)
}

export default Header;