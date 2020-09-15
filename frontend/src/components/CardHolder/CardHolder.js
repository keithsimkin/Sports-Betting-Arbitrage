import React from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = ({ arbGames }) => {
	return(
		<div className="cardholder">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			 {
			 	//arbGames.map(obj => <Card />)
			 }
		</div>
	)
};

export default CardHolder;