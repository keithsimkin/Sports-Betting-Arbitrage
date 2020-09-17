import React from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = ({ arbGames }) => {
	return(
		<section className="cardholder">
			<table>
				<thead>
					<tr>
						<th>Arb</th>
						<th>Game</th>
						<th>Market</th>
						<th>Bet1</th>
						<th>Bet2</th>
						<th>Bet3</th>				
					</tr>
				</thead>
			</table>
			<div id="arbs_list_separator"></div>
			<Card />
		</section>
	)
}; 

export default CardHolder;