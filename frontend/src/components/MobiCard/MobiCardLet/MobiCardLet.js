import React, { Component } from "react";
import MobiCardFullData from "../DisplayMobiCardFullData/MobiCardFullData";
import "./mobicardlet.css";

class MobiCard extends Component {

	render() {
		const { games, clickCard } = this.props
		return(
				games.map(game => ( 
					<div key={game.id} className="mobicard_parent">
						<div className="mobile_card" onClick={id => clickCard(game.id)}>
							<p className="mobi_roi">{ game.arb_combination.roi }</p>
							<p className="mobi_game">{ game.game }</p>
						</div>
						{ game.showFullData === false ? "" : <MobiCardFullData game={game}/> }
					</div>
				))
		)
	}
};

export default MobiCard;