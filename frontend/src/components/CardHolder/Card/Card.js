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
			<table className="card_table"> 
				<tbody>
					<tr className="top_row">
						<td className="profit title">
							<div><span>7.69%</span></div>
						</td>
						<td className="game title" colspan="7">
							<span>Alcorcon vs Tenerife</span>
						</td>
						<td className="market title">
							<span>1 X 2</span>
						</td>
						<td className="bet1 title">
							<span>BetInAsia @ 2.23</span>
						</td>
						<td className="bet2 title">
							<span>1XBet @ 2.40</span>
						</td>
						<td className="bet3 title">
							<span>18Bet @ 5.93</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};

export default Card;

