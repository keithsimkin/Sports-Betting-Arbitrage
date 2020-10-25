import React,  { Component } from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import SelectionContext from "../../../../context/AllContexts";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	static contextType = SelectionContext

	constructor(props){ 
		super(props) 
		this.state = {
			odds1: "",
			odds2:"",
			odds3:"", 
			oddsA: this.props.oddsA,
			oddsB: this.props.oddsB,
			oddsC: this.props.oddsC
		}
	} 

	inputChange = e => {
		const re = /^[0-9\b]+$/
		if (e.target.value === "" || re.test(e.target.value)) {
			let stakeAmount = Number(e.target.value) 
			let oddsData = [this.state.oddsA, this.state.oddsB, this.state.oddsC]
			oddsData = oddsData.map(item => item = item.split(" @ ")[1])
			oddsData = oddsData.map(Number)
			let combinedMargin = oddsData.reduce((acc, ci) => {
				return acc + (1 / ci)
			}, 0)
			combinedMargin = Number(combinedMargin.toFixed(4))
			let stakeAmountSplit = oddsData.map(odd => (stakeAmount * (1 / odd))/combinedMargin)
			stakeAmountSplit = stakeAmountSplit.map(item => item.toFixed(1)) 
			this.setState({
				odds1: stakeAmountSplit[0],
				odds2: stakeAmountSplit[1],
				odds3: stakeAmountSplit[2]
			})
			
		}
	}

	autoArb = () => {
		const { oddsA, oddsB, oddsC, odds1, odds2, odds3 } = this.state
		let oddsData = [oddsA, oddsB, oddsC]
		let odds = [odds1, odds2, odds3]
		console.log(oddsData, odds)
	}

	render() {
		const bookieselection = this.context
		const { showAutoArbModal, closeAutoArbModal, oddsA, oddsB, oddsC, gameName, roi } = this.props;
		return ReactDOM.createPortal(
				<CSSTransition
					in={showAutoArbModal}
					unmountOnExit
					timeout={{
						enter: 0,
						exit: 300
					}}
				>
					<div className={`modal ${showAutoArbModal ? "show": ""}`} onClick={closeAutoArbModal}>
						<div className="modal-content" onClick={e => e.stopPropagation()}>
							<div className="modal-header">
								<p className="modal-title">{ `${roi} | ${gameName}` }</p>
							</div>
							<div className="modal-body">
								<div className="arb-form">
									<div className="row">
										<div className="form-data">
											<label htmlFor="stake" className="label">Stake Amount </label> 
										</div>
										<div className="form-input">
											<input onChange={this.inputChange} type="text" name="stake" id="stake" placeholder="Your stake..." maxLength="10" size="5"/>
										</div>
									</div>
									<div className="row">
										<div className="form-data">
											<label htmlFor="odds1" className="label">{ oddsA }</label>
										</div>
										<div className="form-input">
											<input readOnly value={this.state.odds1} type="text" name="odds1" id="odds1" maxLength="10" size="5"/>
										</div>
									</div>
									<div className="row">
										<div className="form-data">
											<label htmlFor="odds2" className="label">{ oddsB }</label>
										</div>
										<div className="form-input">
											<input readOnly value={this.state.odds2} type="text" name="odds2" id="odds2" maxLength="10" size="5"/>
										</div>
									</div>
									<div className="row">
										<div className="form-data">
											<label htmlFor="odds3" className="label">{ oddsC }</label>
										</div>
										<div className="form-input">
											<input readOnly value={this.state.odds3} type="text" name="odds3" id="odds3" maxLength="10" size="5"/>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								{ bookieselection.length === 0 ? "" : <button onClick={this.autoArb} className="modal-button arb">auto-arb</button> }
								<button className="modal-button close" onClick={closeAutoArbModal}>Close</button>
							</div>
						</div>
					</div>
				</CSSTransition>,
				document.getElementById("root") 
		)
	}
	 
};

export default AutoArbModal;