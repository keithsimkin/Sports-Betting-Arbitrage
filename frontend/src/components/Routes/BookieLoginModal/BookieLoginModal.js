import React from "react";
import "./bookielogin.css"

const BookieLoginModal = ({ bookiename, isSelected, onClose }) => {
	if (!isSelected) {
		return null
	}
	return (
		<div className="bookie-login-modal-container">
			<div className="bookie-login-modal-content">
				<div className="bookie-login-modal">
					<input type="password" name={`${bookiename}-username`} placeholder={`${bookiename} Username`}/>
					<input type="password" name={`${bookiename}-password`} placeholder={`${bookiename} Password`}/>
					<div className="bookie-login-modal-buttons">
						<button className="b1">OK</button> 
						<button className="b2" onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookieLoginModal;