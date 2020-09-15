import React from "react";
import "./card.css";

const Card = ({ id, game, game_date, game_time, arb_combination, arb_received }) => {
	return(
		<div className="card">
			<h2>Ts Galaxy - Steenberg Utd</h2>
		</div>
	)
};

export default Card;

// {
//         "id": 1,
//         "game": "Ts Galaxy - Steenberg Utd",
//         "game_date": "12 August 2020",
//         "game_time": "14:30",
//         "arb_combination": {
//             "naijabet_home": 3.4,
//             "bet9ja_draw": 2.96,
//             "bet9ja_away": 2.87,
//             "roi": "1.96%"
//         },
//         "arb_received": "2020-09-13T11:28:17.580Z"
//     }