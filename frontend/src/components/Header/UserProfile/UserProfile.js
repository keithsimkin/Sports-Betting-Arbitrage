import React from "react";
//import { FaUserCircle } from "react-icons/fa";
import history from "../../Routes/History";
import "./userprofile.css"

const UserProfile = () => {
	return (
		<div onClick={() => history.push('/signin')} className="user-profile">
			{//<FaUserCircle className="profile-icon"/> 
		}
			Sign out
		</div>
	)
}

export default UserProfile;