import React from 'react';
import { FaSnowflake } from "react-icons/fa";
import "./coming.css"

const ComingSoonx = ({ onRouteChange }) => {
	return(
		<div className="comingsoon-container">
			<div>
				<FaSnowflake className="arb_logo_routes"/>
			</div>
			<div>
				<h3>This page is under construction</h3>
				<button onClick={() => onRouteChange("signin")}>Back</button>
			</div>
		</div>
	)
} 

export default ComingSoonx;