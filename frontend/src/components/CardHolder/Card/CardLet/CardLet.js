import React from "react";
import "./cardlet.css";

const CardLet = () => {
	return(
		<div className="cardlet">
			<table className="cardlet_table">
				<tbody>
					<tr className="full_game_bookie_data">
						<td className="bookie_data1">
							<div className="bookie_name">
								<span>Bet9ja</span>
							</div>
							<div className="bookie_game_date">11 Aug 2020</div>
							<div className="bookie_game_time">17:00</div>
						</td>
						<td className="bookie_data2">
							<div className="bookie_game">
								<span className="bookie_game_title">Drita - Linfield</span>
							</div>
							<p className="bookie_league">
								Soccer >> International Clubs >> UEFA Champions League, Preliminary Round
							</p>
						</td>
					</tr> 
				</tbody>
			</table>
		</div>
	)
}

export default CardLet;