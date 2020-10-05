import React, { Component } from "react";
import "./mobicardfulldata.css";

class MobiCardFullData extends Component {

	render() {
		const { game, roi } = this.props
		return(
				<div className="mobicard_fulldata">
					<div>
						<table>
							<thead>
								<tr>
									<th>1 X 2</th>
									<th>10Bet @ 2.23</th>
									<th>1XBet @ 2.40</th>
									<th>18Bet @ 5.93</th>
								</tr>
							</thead>
						</table>
					</div>
					<p>{ game }</p>
					<div className="">
						<button>Auto-arb</button>
					</div>
				</div>
		)
	}
}

export default MobiCardFullData;