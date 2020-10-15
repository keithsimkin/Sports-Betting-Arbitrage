import React from "react";
import { FaSnowflake } from "react-icons/fa";

const SignUp = ({ onRouteChange }) => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p>Sign up to invest in sports like the stock market</p>
			</div>
			<div>
				<input type="email" name="email" placeholder="Email"/>
				<input type="text" name="first-name" placeholder="First Name"/>
				<input type="text" name="last-name" placeholder="Last Name"/>
				<input type="text" name="username" placeholder="Username"/>
				<input type="password" name="password" placeholder="Password"/>
			</div>
			<div>
				<div onClick={() => onRouteChange('home')}>Sign up</div>
			</div>
		</div>
	)
}

export default SignUp;