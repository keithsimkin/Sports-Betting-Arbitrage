import React,  { Component } from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	constructor(){
		super() 
		this.state = {
			odds1: "",
			odds2:"",
			odds3:""
		}
	}

	inputChange = e => {
		const re = /^[0-9\b]+$/
		if (e.target.value === "" || re.test(e.target.value)) {
			let stakeAmount = Number(e.target.value) 
			let stakeAmountSplit = stakeAmount/3
			this.setState({
				odds1: stakeAmountSplit,
				odds2: stakeAmountSplit,
				odds3: stakeAmountSplit
			})
		}
	}



	render() {
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
								<button className="modal-button arb">Arb</button>
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