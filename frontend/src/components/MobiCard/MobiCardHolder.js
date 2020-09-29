import React, { Component } from "react";
import MobiCard from "./MobiCardLet/MobiCardLet"
import "./mobicard.css";

class MobiCardHolder extends Component {

	clickMobiCard = () => {
		console.log('the mobicard was clicked')
	}

	render() {
		return(
			<section className="mobile_card_holder">
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
				<MobiCard clickCard={this.clickMobiCard}/>
			</section>
		)
	}
}

export default MobiCardHolder;