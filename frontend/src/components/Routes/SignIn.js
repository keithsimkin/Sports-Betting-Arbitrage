import React from "react";
import { FaSnowflake } from "react-icons/fa";
import "./routes.css"

const SignIn = ({ onRouteChange }) => {
	return(
		<div className="siginin-container">
			<div>
				<FaSnowflake className="arb_logo_routes"/>
			</div>
			<div className="signin-text">
				<p>Log in to Mockbe</p>
			</div>
			<div className="siginin-input">
				<input type="text" name="username" placeholder="email"/>
				<input type="password" name="password" placeholder="password"/>
			</div>
			<div>
				<div className="signin-login-button" onClick={() => onRouteChange('home')}>Log in</div>
			</div>
			<div>
				<p>Forgot password?</p>
				<p onClick={() => onRouteChange('signup')}>Sign up for Mockbe</p>
			</div>
		</div>
	)
}

export default SignIn;