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
			
		</div>
	)
};

export default Card;

