import React,  { Component } from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	autoArb = () => {
		console.log("i need a puppet")
	}

	render() {
		const { showAutoArbModal, closeAutoArbModal } = this.props;
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
								<p className="modal-title">6.76% | FC Tver - Chita</p>
							</div>
							<div className="modal-body">
								Lorem ipsum
							</div>
							<div className="modal-footer">
								<button className="modal-button arb" onClick={this.autoArb}>Arb</button>
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