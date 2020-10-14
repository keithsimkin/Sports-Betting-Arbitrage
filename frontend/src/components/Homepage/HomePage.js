import React from "react";
import { FaSnowflake } from "react-icons/fa";

const HomePage = ({ onRouteChange }) => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p>Make money from sports, like the stock market</p>
			</div>
			<div>
				<p>Join Playbook today.</p>
				<div>	
					<div>Sign up</div>
					<div onClick={() => onRouteChange('home')}>Log in</div>
				</div>
			</div>
			<div>
				image
			</div>
		</div>
	)
}

export default HomePage;