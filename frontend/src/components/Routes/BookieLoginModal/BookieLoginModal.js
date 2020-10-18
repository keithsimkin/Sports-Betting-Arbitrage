import React, { Component } from "react";
import "./bookielogin.css"

class BookieLoginModal extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bookie:"",
			bookieusername:"",
			bookiepassword:"",
			bookieList:[]
		}
	}

	getBookieUsername = e => {
		this.setState({
			bookie: e.target.name.split("-")[0],
			bookieusername: e.target.value
		})
	}

	getBookiePassword = e => {
		this.setState({
			bookiepassword: e.target.value
		})
	}

	getBookieDetails = () => {
		const { bookie, bookieusername, bookiepassword } = this.state 
		const { withSelection, noSelection } = this.props
		let bookieDetails = [bookie, bookieusername, bookiepassword]
		withSelection()
		this.setState({
			bookieList:[...this.state.bookieList, bookieDetails]
		}, () => {
			const { bookieList } = this.state
			let oldState = bookieList[bookieList["length"] - 1]
			let newState = bookieList[bookieList["length"] - 2]
			if ((bookieList.length >= 2) && (oldState[0] === newState[0])) {
				alert('Please enter details for the bookie before clicking the OK button, or click the cancel button')
				noSelection()
			} else if ((bookieList.length === 1) && (bookieList[0].includes(""))) {
				alert('Please enter details for the bookie before clicking the OK button, or click the cancel button')
				noSelection()
			} else {
				let onlySelected = bookieList.filter(arr => !(arr.includes("")))
				this.props.userSelectedBookies(onlySelected)
			}
		})
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