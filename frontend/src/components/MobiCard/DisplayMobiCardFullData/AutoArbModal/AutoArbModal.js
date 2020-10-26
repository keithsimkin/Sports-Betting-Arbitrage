import React,  { Component } from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	constructor(props){ 
		super(props) 
		this.state = { 
			stake1: "", 
			stake2:"",
			stake3:"", 
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
				stake1: stakeAmountSplit[0],
				stake2: stakeAmountSplit[1],
				stake3: stakeAmountSplit[2]
			})
			
		}
	}

	closeAutoArbModalWithoutPlacingArb = () => {
		this.props.closeAutoArbModal()
		this.setState({
			stake1: "",
			stake2:"",
			stake3:""
		})
	}

	autoArb = () => {
		const { oddsA, oddsB, oddsC, stake1, stake2, stake3 } = this.state
		let bookiesAndOdds = [oddsA, oddsB, oddsC]
		let stakeSplit = [stake1, stake2, stake3]
		console.log('a', bookiesAndOdds, 'b', stakeSplit)
	}

	render() {
		const { showAutoArbModal, oddsA, oddsB, oddsC, gameName, roi, autoarbregister } = this.props;
		const { stake1, stake2, stake3 } = this.state;
		return ReactDOM.createPortal(
				<CSSTransition
					in={showAutoArbModal}
					unmountOnExit
					timeout={{
						enter: 0,
						exit: 300 
					}}
				>
					<div className={`modal ${showAutoArbModal ? "show": ""}`} onClick={this.closeAutoArbModalWithoutPlacingArb}>
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
											<label htmlFor="stake1" className="label">{ oddsA }</label>
										</div>
										<div className="form-input">
											<input readOnly value={stake1} type="text" name="stake1" id="stake1" maxLength="10" size="5"/>
										</div>
									</div>
									<div className="row">
										<div className="form-data">
											<label htmlFor="stake2" className="label">{ oddsB }</label>
										</div>
										<div className="form-input">
											<input readOnly value={stake2} type="text" name="stake2" id="stake2" maxLength="10" size="5"/>
										</div>
									</div>
									<div className="row">
										<div className="form-data">
											<label htmlFor="stake3" className="label">{ oddsC }</label>
										</div>
										<div className="form-input">
											<input readOnly value={stake3} type="text" name="stake3" id="stake3" maxLength="10" size="5"/>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								{ autoarbregister ? <button onClick={this.autoArb} className="modal-button arb">auto-arb</button> : "" }
								<button className="modal-button close" onClick={this.closeAutoArbModalWithoutPlacingArb}>Close</button>
							</div>
						</div>
					</div>
				</CSSTransition>,
				document.getElementById("root") 
		)
	}
	 
};

export default AutoArbModal;