import React from "react";
import "./bookielogin.css"

const BookieLoginModal = ({ bookiename }) => {
	return (
		<div>
			<input type="password" name={`${bookiename}-username`} placeholder={`${bookiename} Username`}/>
			<input type="password" name={`${bookiename}-password`} placeholder={`${bookiename} Password`}/>
			<button>OK</button> <button>Cancel</button>
		</div>
	)
}

export default BookieLoginModal;