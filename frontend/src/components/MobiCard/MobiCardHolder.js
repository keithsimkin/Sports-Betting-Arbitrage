import React, { Component } from "react";
import axios from 'axios';
import MobiCard from "./MobiCardLet/MobiCardLet";
import "./mobicard.css";
// import { arbGames } from "../utils/arbs";

class MobiCardHolder extends Component {

	constructor() {
		super()
		this.state = {
			games: [],
			limit: 4
		}
	}

	getArbsList = () => {
		const { limit } = this.state
		axios.get(`http://localhost:4000/api/v0/arbs?limit=${limit}`)
			.then(res => {
				if (res.status === 200) {
					let games = res.data
					this.setState({ games })
				}
			})
			.catch(err => {
				console.log("an error occurred in the componentDidMount API call in MobiCardHolder", err)
		})
	}

	componentDidMount() {
		this.getArbsList()
	}

	clickCard = (idx) => {
		const { games } = this.state;
		let clickedCard = games.map(game => {
			if (game.id === idx) {
				return { ...game, showfulldata: !game.showfulldata }
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
		const currentActiveCards = newCardState.filter(obj => obj.showfulldata === true)
		if (currentActiveCards.length > 1) {
			let deactivateCard = currentActiveCards.filter(gameObj => gameObj.id !== id)
			deactivateCard.forEach(item => item.showfulldata = false)
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