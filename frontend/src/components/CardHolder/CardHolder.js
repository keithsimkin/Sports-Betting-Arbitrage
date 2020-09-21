import React, { Component } from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = () => {
	return(
		<section id="parent_holder">
			<table id="cardholder" className="arb_scroll">
				<thead> 
					<tr className="header"> 
						<th className="arb">
							<span>Arb</span>
						</th>
						<th className="game_head">
							<span>Game</span>
						</th>
						<th className="market">
							<span>Market</span>
						</th>
						<th className="bet1">
							<span>Bet1</span>
						</th>
						<th className="bet2">
							<span>Bet2</span>
						</th>
						<th className="bet3">
							<span>Bet3</span>
						</th>				
					</tr>
				</thead>
			</table>
			<Card />
			<Card />
			<Card />
			<Card />
		</section>
	)
}; 

export default CardHolder;