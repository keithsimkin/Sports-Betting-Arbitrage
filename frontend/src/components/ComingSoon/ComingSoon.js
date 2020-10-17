import React from 'react';
import { FaSnowflake } from "react-icons/fa";

const ComingSoon = ({ onRouteChange }) => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<h3>This page is under construction</h3>
				<button onClick={() => onRouteChange("home")}>Go Back</button>
			</div>
		</div>
	)
}

export default ComingSoon;