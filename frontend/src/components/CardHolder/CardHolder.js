import React from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = ({ arbGames }) => {
	return(
		<section className="cardholder">
			<table>
				<thead> 
					<tr className="header">
						<th className="arb">
							<span>Arb</span>
						</th>
						<th className="game">
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
			<div id="arbs_list_separator"></div>
			<Card />
		</section>
	)
}; 

export default CardHolder;