import React,  { Component } from "react";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	render() {
		const { showAutoArbModal, closeAutoArbModal } = this.props;
		return(
			<div className={`modal ${showAutoArbModal ? "show": ""}`} onClick={closeAutoArbModal}>
				<div className="modal-content" onClick={e => e.stopPropagation()}>
					<div className="modal-header">
						<p className="modal-title">This is a modal</p>
					</div>
					<div className="modal-body">
						Lorem ipsum
					</div>
					<div className="modal-footer">
						<button onClick={closeAutoArbModal} className="button">Close</button>
					</div>
				</div>
			</div>
		)
	}
	
};

export default AutoArbModal;