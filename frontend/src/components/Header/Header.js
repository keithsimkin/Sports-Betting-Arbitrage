import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
	return (
			<header className="top_header">
		        <nav className="navbar">
		          <div className="logo">
		          	<Logo />
		          </div> 
		          <div className="searchbar">
		          	<SearchBar />
		          </div>  
		          <div className="user">
		          	<UserProfile/>
		          </div>
		        </nav>
	      	</header>
	)
}

export default Header;