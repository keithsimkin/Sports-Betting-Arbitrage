import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./userprofile.css"

const UserProfile = () => {
	return (
		<div className="user-profile">
			<FaUserCircle className="profile-icon"/>
		</div>
	)
}

export default UserProfile;