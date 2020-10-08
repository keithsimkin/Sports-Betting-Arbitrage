import React, { Component } from "react";
import MobiCard from "./MobiCardLet/MobiCardLet";
import { arbGames } from "../utils/arbs";
import "./mobicard.css";

class MobiCardHolder extends Component {

	constructor() {
		super()
		this.state = {
			games: arbGames
		}
	}

	clickCard = (idx) => {
		const { games } = this.state;
		let clickedCard = games.map(game => {
			if (game.id === idx) {
				return { ...game, showFullData: !game.showFullData }
			}
			return game;
		})
		this.setState({
			games: clickedCard
		})
		return clickedCard;
	}

	changeActiveCard = (id) => {
		const newCardState = this.clickCard(id)
		const currentActiveCards = newCardState.filter(obj => obj.showFullData === true)
		if (currentActiveCards.length > 1) {
			let prevActive = currentActiveCards
			let deactivateCard = prevActive.filter(gameObj => gameObj.id !== id)
			deactivateCard.forEach(item => item.showFullData = false)
		}
	}

	clicksHandle = (id) => {
		this.clickCard(id)
		this.changeActiveCard(id)
	}

	render() {
		return(
			<section className="mobile_card_holder"> 
				<MobiCard games={this.state.games} clickCard={id => this.clicksHandle(id)}/>
			</section>
		)
	}
}

export default MobiCardHolder;