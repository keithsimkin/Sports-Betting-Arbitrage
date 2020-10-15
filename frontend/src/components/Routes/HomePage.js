import React from "react";
import { FaSnowflake } from "react-icons/fa";

const HomePage = ({ onRouteChange }) => {
	return(
		<div className="homepage-uppersection">
			<div>
				<div>
					<FaSnowflake className="arb_logo"/>
				</div>
				<div>
					<p>Make money from sports, like the stock market</p>
				</div>
				<div>
					<p>Join Mockbe today.</p>
					<div>	
						<div onClick={() => onRouteChange('signup')}>Sign up</div>
						<div onClick={() => onRouteChange('signin')}>Log in</div>
					</div>
				</div>
			</div>
			<div>
				image
			</div>
		</div>
	)
}

export default HomePage;