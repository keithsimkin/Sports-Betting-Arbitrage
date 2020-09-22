import React from "react";
import CardLet from "./CardLet/CardLet";
import "./card.css";

// const extractGames = (str) => {
// 	let strArr;
// 	if (str.includes(" - ")) {
// 		strArr = str.split(" - ")
// 		return strArr;
// 	} else if (str.includes(" vs ")) {
// 		strArr = str.split(" vs ")
// 		return strArr;
// 	} else if (str.includes(" v ")){ 
// 		strArr = str.split(" v ") 
// 		return strArr; 
// 	}
// }

const Card = () => {
	return(
		<div className="card">
			<table className="card_table"> 
				<tbody>
					<tr className="top_row">
						<td className="profit title">
							<div><span>7.69%</span></div>
						</td>
						<td className="game title">
							<span>Alcorcon vs Tenerife</span>
						</td>
						<td className="market_name">
							<span>1 X 2</span>
						</td>
						<td className="bet1 title">
							<span>10Bet @ 2.23</span>
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
			<CardLet />
			<CardLet />
			<CardLet />
		</div>
	)
};

export default Card;

