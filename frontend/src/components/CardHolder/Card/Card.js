import React from "react";
import "./card.css";

const extractGames = (str) => {
	let strArr;
	if (str.includes(" - ")) {
		strArr = str.split(" - ")
		return strArr;
	} else if (str.includes(" vs ")) {
		strArr = str.split(" vs ")
		return strArr;
	} else if (str.includes(" v ")){
		strArr = str.split(" v ")
		return strArr; 
	}
}

const Card = ({ id, game, game_date, game_time, arb_combination, arb_received }) => {
	const gamesArray = extractGames("Ts Galaxy - Steenberg Utd")
	return(
		<div className="card">
			<table>
				<thead>
					<tr>
						<th>Profit</th>
						<th>Game</th>
						<th>Market</th>
						<th>Bet1</th>
						<th>Bet2</th>
						<th>Bet3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>0.6%</td>
						<td>Stoke City vs Bristol City</td>
						<td>1 X 2</td>
						<td>Bet9ja_Home: 1.84</td>
						<td>Bet9ja_Draw: 3.58</td>
						<td>Naijabet_Away: 5.81</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};

export default Card;

