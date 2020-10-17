import React, { Component } from "react";
import "./bookielogin.css"

class BookieLoginModal extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bookieusername:"",
			bookiepassword:""
		}
	}

	getBookieUsername = e => {
		this.setState({
			bookieusername: e.target.value
		})
	}

	getBookiePassword = e => {
		this.setState({
			bookiepassword: e.target.value
		})
	}

	getBookieDetails = () => {
		const { bookieusername, bookiepassword } = this.state 
		let bookieDetails = [bookieusername, bookiepassword]
		if (bookieDetails.includes("")) {
			alert("Please enter the bookie username and password, or click the cancel button")
		} else {
			console.log(bookieDetails)
		}
	}


	render() {
		const { bookiename, isSelected, noSelection } = this.props
		if (!isSelected) {
			return null
		}
		return (
			<div className="bookie-login-modal-container">
				<div className="bookie-login-modal-content">
					<div className="bookie-login-modal">
						<input onChange={this.getBookieUsername} type="password" name={`${bookiename}-username`} placeholder={`${bookiename} Username`}/>
						<input onChange={this.getBookiePassword} type="password" name={`${bookiename}-password`} placeholder={`${bookiename} Password`}/>
						<div className="bookie-login-modal-buttons">
							<button className="b1" onClick={this.getBookieDetails}>OK</button> 
							<button className="b2" onClick={noSelection}>Cancel</button>
						</div>
					</div>
				</div>
			</div> 
		)
	}
	
}

export default BookieLoginModal;