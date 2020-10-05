import React, { Component } from "react";
import "./mobicardfulldata.css";

class MobiCardFullData extends Component {

	render() {
		const { game, roi } = this.props
		return(
				<div className="mobicard_fulldata">
					<h3>{ roi }</h3>
					<p>{ game }</p>
					<div className="">
						<button>Auto-arb</button>
					</div>
				</div>
		)
	}
}

export default MobiCardFullData;