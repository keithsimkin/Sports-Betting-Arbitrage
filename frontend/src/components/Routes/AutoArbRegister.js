import React, { Component } from "react";
import { FaSnowflake } from "react-icons/fa";
import "./routes.css"


class AutoArbRegister extends Component {

	constructor() {
		super()
		this.state = {
			bookieSelection: []
		}
	}

	getSelectedBookie = e => {
		const { bookieSelection } = this.state
		if (e.target.checked === true) {
			this.setState({
				bookieSelection: [...bookieSelection, e.target.name]
			})
		} else {
			bookieSelection.forEach(item => {
				if (item === e.target.name) {
					bookieSelection.splice(bookieSelection.indexOf(e.target.name), 1)
				}
			})
		}
	}

	bookieLoginModal = () => {
		console.log('working')
	}

	render() {
		console.log(this.state.bookieSelection)
		const { onRouteChange } = this.props
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
					<div className="bookmakers">
						<div>
							<input onClick={this.bookieLoginModal} onChange={this.getSelectedBookie} type="checkbox" name="bet9ja" id="bet9ja" value="Bet9ja"/>
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
							<input onChange={this.getSelectedBookie} type="checkbox" name="22bet" id="22bet" value="22Bet"/>
							<label htmlFor="22bet">22bet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="1xbet" id="1xbet" value="1xBet"/>
							<label htmlFor="1xbet">1XBet</label>
						</div>
						<div>
							<input onChange={this.getSelectedBookie} type="checkbox" name="sportybet" id="sportybet" value="Sportybet"/>
							<label htmlFor="sportybet">Sportybet</label>
						</div>
					</div>
				</div>
				<div className="autoarb-buttons">
					<div className="autoarb-signin-button" onClick={() => onRouteChange('home')}>Sign in</div>
					<div className="autoarb-cancel-button" onClick={() => onRouteChange('home')}>Cancel</div>
				</div>
			</div>
		)
	}
}

export default AutoArbRegister;