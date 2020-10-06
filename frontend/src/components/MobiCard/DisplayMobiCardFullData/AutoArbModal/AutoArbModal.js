import React,  { Component } from "react";
import "./autoarbmodal.css";

class AutoArbModal extends Component {

	closeArbModal = (e) => {
		this.props.closeArbModal && this.props.closeArbModal(e)
	}

	render() {
		const { showModal } = this.props;
		if (!showModal) {
			return null;
		}
		return(
			<div>
				<p>This is a modal</p>
				<div>
					<button onClick={e => this.closeArbModal(e)}>Close</button>
				</div>
			</div>
		)
	}
	
};

export default AutoArbModal;