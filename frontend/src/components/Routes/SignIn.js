import React from "react";
import { FaSnowflake } from "react-icons/fa";
import "./routes.css"

const SignIn = ({ onRouteChange }) => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p>Log in to Mockbe</p>
			</div>
			<div>
				<input type="text" name="username" placeholder="email"/>
				<input type="password" name="password" placeholder="password"/>
			</div>
			<div>
				<div onClick={() => onRouteChange('home')}>Log in</div>
			</div>
			<div>
				<p>Forgot password?</p>
				<p onClick={() => onRouteChange('signup')}>Sign up for Mockbe</p>
			</div>
		</div>
	)
}

export default SignIn;