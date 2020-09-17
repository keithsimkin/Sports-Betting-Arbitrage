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
				{
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
							}
				<tbody>
					<tr>
						<td data-label="Arb">0.6%</td>
						<td data-label="Game">Stoke City vs Bristol City</td>
						<td data-label="Market">1 X 2</td>
						<td data-label="Bet1">Bet9ja_Home: 1.84</td>
						<td data-label="Bet2">Bet9ja_Draw: 3.58</td>
						<td data-label="Bet3">Naijabet_Away: 5.81</td>
					</tr>
					<tr>
						<td data-label="Arb">4.52%</td>
						<td data-label="Game">Santa Clara vs CS Maritimo</td>
						<td data-label="Market">1 X 2</td>
						<td data-label="Bet1">Bet365_Home: 1.22</td>
						<td data-label="Bet2">BetWin_Draw: 1.89</td>
						<td data-label="Bet3">Smarkets_Away: 2.05</td>
					</tr>
					<tr>
						<td data-label="Arb">2.65%</td>
						<td data-label="Game">Espanyol vs Mallorca</td>
						<td data-label="Market">1 X 2</td>
						<td data-label="Bet1">BetInAsia_Home: 2.23</td>
						<td data-label="Bet2">1XBet_Draw: 2.40</td>
						<td data-label="Bet3">18bet_Away: 5.92</td>
					</tr>
					<tr>
						<td data-label="Arb">10.25%</td>
						<td data-label="Game">Sligo Rovers vs Bohemians</td>
						<td data-label="Market">OU2.5</td>
						<td data-label="Bet1">SBO_Over2.5: 2.23</td>
						<td data-label="Bet2">32Red_Under2.5: 1.58</td>
						{<td data-label="Bet3"></td>
					}
					</tr>
					<tr>
						<td data-label="Arb">7.69%</td>
						<td data-label="Game">Alcorcon vs Tenerife</td>
						<td data-label="Market">AH</td>
						<td data-label="Bet1">188Bet_Over1.5: 2.07</td>
						<td data-label="Bet2">WilliamHill_Under1.5: 1.58</td>
						{<td data-label="Bet3"></td>
					}
					</tr>
				</tbody>
			</table>
		</div>
	)
};

export default Card;

