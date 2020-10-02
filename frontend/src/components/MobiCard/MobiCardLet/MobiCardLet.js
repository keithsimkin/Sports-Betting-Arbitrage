import React, { Component } from "react";
import MobiCardFullData from "../DisplayMobiCardFullData/MobiCardFullData";
import "./mobicardlet.css";

class MobiCard extends Component {

	render() {
		const { games, clickCard } = this.props
		return(
				games.map(game => (
					<div key={game.id}>
						<div className="mobile_card" onClick={id => clickCard(game.id)}>
							<p className="mobi_roi">{ game.roi }</p>
							<p className="mobi_game">{ game.game }</p>
						</div>
						{ game.showFullData === false ? "" : <MobiCardFullData game={game.game} roi={game.roi}/> }
					</div>
				))
		)
	}
	
};

export default MobiCard;