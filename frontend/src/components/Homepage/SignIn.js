import React from "react";
import { FaSnowflake } from "react-icons/fa";

const SignIn = () => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p>Log in to Playbook</p>
			</div>
			<div>
				<input type="text" name="username" placeholder="email"/>
				<input type="password" name="password" placeholder="password"/>
			</div>
			<div>
				<div>Log in</div>
			</div>
			<div>
				<p>Forgot password?</p>
				<p>Sign up for Playbook</p>
			</div>
		</div>
	)
}

export default SignIn;