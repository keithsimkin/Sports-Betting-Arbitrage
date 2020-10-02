import React, { Component } from "react";
import MobiCard from "./MobiCardLet/MobiCardLet";
//import MobiCardFullData from "./DisplayMobiCardFullData/MobiCardFullData";
import "./mobicard.css";

class MobiCardHolder extends Component {

	constructor() {
		super()
		this.state = {
			games: [
				{id:1, roi:"2.95%", game:"FH Hafnarfjordur - Dac 1904 Dunajska Streda", showFullData: false},
				{id:2, roi:"5.45%", game:"Ts Sporting - Moroka Swallows FC", showFullData: false},
				{id:3, roi:"6.34%", game:"FC Tver - Chita", showFullData: false},
				{id:4, roi:"13%", game:"ES Metlaoui - CS Chebba", showFullData: false},
				{id:5, roi:"6.76%", game:"Malmo FF - Orebro", showFullData: false}
			]
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