import React from "react";
import { FaSnowflake } from "react-icons/fa";
import logo from "../../media/images/invest.png";
import history from "./History";
import "./routes.css";

const HomePage = () => {
	return( 
		<div className="homepage-container">
			<div className="homepage-uppersection">
				<div>
					<FaSnowflake className="arb_logo_routes"/>
				</div>
				<div className="homepage-text">
					<p>Make money from sports like the stock market</p>
				</div>
				<div>
					<p className="homepage-smalltext">Join Mockbe today.</p>
					<div className="homepage-buttons">	
						<div className="homepage-signup-button" onClick={() => history.push('/signup')}>Sign up</div>
						<div className="homepage-login-button" onClick={() => history.push('/signin')}>Log in</div>
					</div>
					<div className="homepage-image">
						<img src={logo} alt=""/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage;