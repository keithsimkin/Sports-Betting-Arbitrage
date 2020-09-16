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
			{
				<table>
							<tbody>
								<tr>
									<td>
										{gamesArray[0]}
									</td>
									<td></td>
									<td></td>
									<td className="gameDate">
									 12 August 2020
									</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td>14:30</td>
								</tr>
								<tr>
									<td>
										{gamesArray[1]}
									</td>
								</tr>
								<tr></tr>
								<tr></tr>
								<tr></tr>
								<tr>
									<td>Market</td>
									<td></td>
									<td>Arbs Combination</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>1 X 2</td>
									<td></td>
									<td>NaijaBet-Home: 3.40</td>
									<td>Bet9ja-Draw: 2.96</td>
									<td>Bet9ja-Away: 2.87</td>
									<td>Profit: 1.96%</td>
								</tr>
							</tbody>
						</table>
					}
		</div>
	)
};

export default Card;

