import React from "react";

const AutoArbRegister = () => {
	return(
		<div>
			<div>
				<FaSnowflake className="arb_logo"/>
			</div>
			<div>
				<p><i>Auto-arb</i>: an autopilot feature</p>
				<p>You only need to enter the bet amount. the auto-arb feature automatically logs into your betting accounts and places the bets</p>
			</div>
			<div>
				<h3>Select bookmakers where you have an account</h3>
				<div>
					<input type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
					<input type="checkbox" name="naijabet" id="naijabet" value="Naijabet"/>
					<input type="checkbox" name="betking" id="betking" value="Betking"/>
					<input type="checkbox" name="nairabet" id="nairabet" value="Nairabet"/>
					<input type="checkbox" name="melbet" id="melbet" value="Melbet"/>
					<input type="checkbox" name="wazobet" id="wazobet" value="Wazobet"/>
					<input type="checkbox" name="betwinner" id="betwinner" value="Betwinner"/>
					<input type="checkbox" name="22bet" id="22bet" value="22Bet"/>
					<input type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
					<input type="checkbox" name="1xbet" id="1xbet" value="1xBet"/>
					<input type="checkbox" name="sportybet" id="sportybet" value="Sportybet"/>
				</div>
			</div>
		</div>
	)
}

export default AutoArbRegister;