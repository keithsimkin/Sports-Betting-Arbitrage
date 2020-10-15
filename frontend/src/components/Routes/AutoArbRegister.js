import React from "react";
import { FaSnowflake } from "react-icons/fa";


const AutoArbRegister = ({ onRouteChange }) => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p><i>Auto-arb</i>: an autopilot feature</p>
				<p>Simply enter the bet amount. the auto-arb feature automatically logs into your betting accounts and places the bets</p>
			</div>
			<div>
				<h3>Select bookmakers where you have an account</h3>
				<div>
					<div>
						<input type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
						<label htmlFor="bet9ja">Bet9ja</label>
					</div>
					<div>
						<input type="checkbox" name="naijabet" id="naijabet" value="Naijabet"/>
						<label htmlFor="naijabet">Naijabet</label>
					</div>
				</div>
			</div>
			<div>
				<div className="autoarb-signin-button" onClick={() => onRouteChange('home')}>Sign in</div>
				<div className="autoarb-cancel-button" onClick={() => onRouteChange('home')}>Cancel</div>
			</div>
		</div>
	)
}

export default AutoArbRegister;