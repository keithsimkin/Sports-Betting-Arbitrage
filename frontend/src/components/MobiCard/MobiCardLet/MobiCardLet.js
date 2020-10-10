import React, { Component } from "react";
import MobiCardFullData from "../DisplayMobiCardFullData/MobiCardFullData";
import "./mobicardlet.css";

class MobiCard extends Component {  

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		arbsList: this.props.games
	// 	}
	// }

	render() {

		const { clickCard, games } = this.props
		const showItems = gamesList => {
			let items = []
			gamesList.forEach(game => {
				items.push(
					<div key={game.id}>
						<div className="mobile_card" onClick={id => clickCard(game.id)}>
							<p className="mobi_roi">{ game.arb_combination.roi }</p>
							<p className="mobi_game">{ game.game }</p>
						</div>
						{ game.showFullData === false ? "" : <MobiCardFullData game={game}/> }
					</div>
				)
			})
			return items;
		}

		return(
			<div className="mobicard_parent">
				{ showItems(games) }
			</div>
		)
		// return(
		// 		games.map(game => ( 
		// 			<div key={game.id} className="mobicard_parent">
		// 				<div className="mobile_card" onClick={id => clickCard(game.id)}>
		// 					<p className="mobi_roi">{ game.arb_combination.roi }</p>
		// 					<p className="mobi_game">{ game.game }</p>
		// 				</div>
		// 				{ game.showFullData === false ? "" : <MobiCardFullData game={game}/> }
		// 			</div>
		// 		))
		// )
	}
};

export default MobiCard;