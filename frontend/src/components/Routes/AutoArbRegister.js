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
				<h4>Select bookmakers where you have an account</h4>
				<div>
					<div>
						<input type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
						<label htmlFor="bet9ja">Bet9ja</label>
					</div>
					<div>
						<input type="checkbox" name="naijabet" id="naijabet" value="Naijabet"/>
						<label htmlFor="naijabet">Naijabet</label>
					</div>
					<div>
						<input type="checkbox" name="betking" id="betking" value="Betking"/>
						<label htmlFor="betking">Betking</label>
					</div>
					<div>
						<input type="checkbox" name="nairabet" id="nairabet" value="Nairabet"/>
						<label htmlFor="nairabet">Nairabet</label>
					</div>
					<div>
						<input type="checkbox" name="melbet" id="melbet" value="Melbet"/>
						<label htmlFor="melbet">Melbet</label>
					</div>
					<div>
						<input type="checkbox" name="wazobet" id="wazobet" value="Wazobet"/>
						<label htmlFor="wazobet">Wazobet</label>
					</div>
					<div>
						<input type="checkbox" name="betwinner" id="betwinner" value="Betwinner"/>
						<label htmlFor="betwinner">Betwinner</label>
					</div>
					<div>
						<input type="checkbox" name="22bet" id="22bet" value="22Bet"/>
						<label htmlFor="22bet">22bet</label>
					</div>
					<div>
						<input type="checkbox" name="1xbet" id="1xbet" value="1xBet"/>
						<label htmlFor="1xbet">1XBet</label>
					</div>
					<div>
						<input type="checkbox" name="sportybet" id="sportybet" value="Sportybet"/>
						<label htmlFor="sportybet">Sportybet</label>
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