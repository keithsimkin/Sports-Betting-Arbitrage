import React from 'react';
import { FaSnowflake } from "react-icons/fa";
import history from "../Routes/History";
import "./coming.css"

const ComingSoonx = () => {
	return(
		<div className="comingsoon-container">
			<div>
				<FaSnowflake className="arb_logo_routes"/>
			</div>
			<div>
				<h3>This page is coming soon</h3>
				<button onClick={() => history.push("/signin")}>Back</button>
			</div>
		</div>
	)
} 

export default ComingSoonx;