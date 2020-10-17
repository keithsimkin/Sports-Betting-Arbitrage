import React from "react";
//import { FaUserCircle } from "react-icons/fa";
import "./userprofile.css"

const UserProfile = ({ onRouteChange }) => {
	return (
		<div onClick={() => onRouteChange('signin')} className="user-profile">
			{//<FaUserCircle className="profile-icon"/> 
		}
			Sign out
		</div>
	)
}

export default UserProfile;