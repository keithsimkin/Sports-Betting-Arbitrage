import React from "react";
import MobiCardFullData from "../DisplayMobiCardFullData/MobiCardFullData";
import "./mobicardlet.css";

const MobiCard = ({ clickCard, game }) => {
	return(
		<div className="mobicard_parent">
			<div className="mobile_card" onClick={id => clickCard(game.id)}>
				<p className="mobi_roi">{ game.arb_combination.roi }</p>
				<p className="mobi_game">{ game.game }</p>
			</div>
			{ game.showfulldata === false ? "" : <MobiCardFullData game={game}/> }
		</div>
	)
}

export default MobiCard;