import React from "react";
import Card from "./Card/Card";
import "./cardholder.css";

const CardHolder = () => {
	return(
		<div className="cardholder">
			 <Card />
			 <Card />
			 <Card />
			 <Card />
			 <Card />
			 <Card />
		</div>
	)
};

export default CardHolder;