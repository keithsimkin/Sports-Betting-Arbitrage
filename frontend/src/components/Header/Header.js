import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import UserProfile from "./UserProfile/UserProfile";

const Header = () => {
	return (
		<div>
			<SearchBar />
			<UserProfile />
		</div>
	)
}

export default Header;