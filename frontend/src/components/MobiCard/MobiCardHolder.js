import React, { Component } from "react";
import axios from 'axios';
import MobiCard from "./MobiCardLet/MobiCardLet";
import "./mobicard.css";

class MobiCardHolder extends Component {

	constructor() {
		super()
		this.state = {
			games: [],
			page: 1
		}
	}


	getArbsList = (pageNum) => {
		const { games } = this.state
		axios.get(`http://localhost:4000/api/v0/arbs?page=${pageNum}&limit=6`)
			.then(res => {
				if (res.status === 200) {
					this.setState({
						games: [...games, ...res.data.someArbs]
					})
				}
			})
			.catch(err => {
				console.log("an error occurred in the componentDidMount API call in MobiCardHolder", err)
			})
	}

	infiniteScroll = () => {
		if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
			let newPage = this.state.page;
			newPage++
			this.setState({
				page: newPage
			})
			this.getArbsList(newPage)
		}
	}

	componentDidMount() {
		const { page } = this.state
		window.addEventListener("scroll", this.infiniteScroll)
		this.getArbsList(page)
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
		const { games } = this.state;
		return(
			<section className="mobile_card_holder"> 
			{
				games.map(game => <MobiCard key={game.id} game={game} clickCard={id => this.clicksHandle(id)}/>)
			}
			</section>
		) 
	}
}

export default MobiCardHolder;