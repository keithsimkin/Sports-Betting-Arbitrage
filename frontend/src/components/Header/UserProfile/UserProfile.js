import React from "react";
//import { FaUserCircle } from "react-icons/fa";
import history from "../../Routes/History";
import "./userprofile.css"

const UserProfile = () => {
	const logout = () => {
		history.push('/signin')
		sessionStorage.removeItem("userid")
	}
	return (
		<div onClick={logout} className="user-profile">
			{//<FaUserCircle className="profile-icon"/> 
		}
			Sign out
		</div>
	)
}

export default UserProfile;