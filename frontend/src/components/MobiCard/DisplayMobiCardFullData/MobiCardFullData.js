import React, { Component } from "react";
import AutoArbModal from "./AutoArbModal/AutoArbModal";
import "./mobicardfulldata.css";

class MobiCardFullData extends Component {

	constructor() {
		super()
		this.state = {
			showModal: false
		}
	}

	showAutoArbModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	render() {
		const { game } = this.props
		return(
				<div className="mobicard_fulldata">
						<table>
							<thead>
								<tr className="fulldata_header">
									<th>1 X 2</th>
									<th>Bet9ja @ 2.23</th>
									<th>NaijaBet @ 2.40</th>
									<th>18Bet @ 5.93</th>
								</tr>
							</thead>
						</table>
						<div className="fulldata_body">
							<div className="fulldata_body_head">
								<p className="fulldata_book">NaijaBet</p>
								<p className="fulldata_date">11.08.20</p>
								<p className="fulldata_time">17:00</p>
							</div>
							<div className="fulldata_body_body">
								<p className="fulldata_game">{ game }</p>
								<p className="fulldata_data">Soccer >> International Clubs >> UEFA Champions League, Preliminary Round</p>
							</div>
						</div>
						<div className="fulldata_body">
							<div className="fulldata_body_head">
								<p className="fulldata_book">Bet9ja</p>
								<p className="fulldata_date">11 Aug 2020</p>
								<p className="fulldata_time">17:00</p>
							</div>
							<div className="fulldata_body_body">
								<p className="fulldata_game">{ game }</p>
								<p className="fulldata_data">Soccer >> International Clubs >> UEFA Champions League, Preliminary Round</p>
							</div>
						</div>
						<div className="fulldata_body">
							<div className="fulldata_body_head">
								<p className="fulldata_book">Betking</p>
								<p className="fulldata_date">11 Aug 2020</p>
								<p className="fulldata_time">17:00</p>
							</div>
							<div className="fulldata_body_body">
								<p className="fulldata_game">{ game }</p>
								<p className="fulldata_data">Soccer >> International Clubs >> UEFA Champions League, Preliminary Round</p>
							</div>
						</div>
					
						<div id="auto_arb">
						 	<button onClick={this.showAutoArbModal}>auto-arb</button>
						 	<AutoArbModal closeArbModal={this.showAutoArbModal} showModal={this.state.showModal}/>
						 </div>
									
				</div>
		)
	}
}

export default MobiCardFullData;