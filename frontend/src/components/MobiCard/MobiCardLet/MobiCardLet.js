import React from "react";
import "./mobicardlet.css";

const MobiCard = ({ clickCard }) => {
	return(
		<div className="mobile_card" onClick={clickCard}>
			<p className="mobi_roi">2.95%</p>
			<p className="mobi_game">FH Hafnarfjordur vs Dac 1904 Dunajska Streda</p>
		</div>
	)
};

export default MobiCard;