import React, { Component } from "react";
import BookieLoginModal from "./BookieLoginModal/BookieLoginModal";
import { FaSnowflake } from "react-icons/fa";
import "./routes.css"


class AutoArbRegister extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bookieSelection: [],
			isSelected: false,
			bookiename: "",
		}
	} 

	getSelectedBookie = e => {
		const { bookieSelection } = this.state
		if (e.target.checked === true) {
			this.setState({ 
				isSelected: true,
				bookiename: e.target.value,
				bookieSelection: [...bookieSelection, e.target.name],
			})
		} else {
			bookieSelection.forEach(item => {
				if (item === e.target.name) {
					bookieSelection.splice(bookieSelection.indexOf(e.target.name), 1)
				}
			})
		}
	}

	signInWithAutoArb = () => {
		const { bookieSelection } = this.state
		if (bookieSelection.length >= 2) {
			this.props.onRouteChange("home")
			this.props.bookieList(bookieSelection)
			//(bookieSelection) //send this the backend
		} else {
			alert('Please select at least 2 bookmakers, or click the cancel button below.')
		}
		
	}

	closeBookieLoginModalWithoutData = () => {
		const { bookiename } = this.state;
		this.setState({
			isSelected: false
		})
		let currentlySelected = document.querySelector(`input[value=${bookiename}]`)
		currentlySelected.click()
	}

	render() {
		const { onRouteChange } = this.props
		const { isSelected, bookiename } = this.state
		return(
			<div className="autoarb-container">
				<div>
					<FaSnowflake className="arb_logo_routes"/>
				</div>
				<div>
					<h3><i>Auto-arb</i>: an autopilot feature</h3>
					<p>Simply enter the bet amount. The auto-arb feature automatically logs into your betting accounts and places the bets</p>
				</div>
				<div>
					<h5>Select bookmakers where you have an account</h5>
					<BookieLoginModal 
						noSelection={this.closeBookieLoginModalWithoutData} 
						isSelected={isSelected} 
						bookiename={bookiename}
					/>
					<div className="bookmakers">
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
							<label htmlFor="bet9ja">Bet9ja</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="naijabet" id="naijabet" value="Naijabet"/>
							<label htmlFor="naijabet">Naijabet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="betking" id="betking" value="Betking"/>
							<label htmlFor="betking">Betking</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="nairabet" id="nairabet" value="Nairabet"/>
							<label htmlFor="nairabet">Nairabet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="melbet" id="melbet" value="Melbet"/>
							<label htmlFor="melbet">Melbet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="wazobet" id="wazobet" value="Wazobet"/>
							<label htmlFor="wazobet">Wazobet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="betwinner" id="betwinner" value="Betwinner"/>
							<label htmlFor="betwinner">Betwinner</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="22bet" id="22bet" value="TwentyTwoBet"/>
							<label htmlFor="22bet">22bet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="1xbet" id="1xbet" value="OnexBet"/>
							<label htmlFor="1xbet">1XBet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="sportybet" id="sportybet" value="Sportybet"/>
							<label htmlFor="sportybet">Sportybet</label>
						</div>
					</div>
				</div>
				<div className="autoarb-buttons">
					<div className="autoarb-signin-button" onClick={this.signInWithAutoArb}>Sign in</div>
					<div className="autoarb-cancel-button" onClick={() => onRouteChange('home')}>Cancel</div>
				</div>
			</div>
		)
	}
}

export default AutoArbRegister;