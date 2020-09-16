import React from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = ({ arbGames }) => {
	return(
		<section className="cardholder">
			<Card />
		</section>
	)
};

export default CardHolder;