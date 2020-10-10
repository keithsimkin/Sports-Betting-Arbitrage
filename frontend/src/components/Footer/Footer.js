import React, { Component } from "react";
import { FaHome, FaBars, FaEnvelope } from "react-icons/fa";

import "./footer.css"

class Footer extends Component {

	constructor() {
		super()
		this.state = {
			iconstate: [{id:1, active: true},{id:2, active: false},{id:3, active: false}]
		}
	}

	changeIconClass = (id) => {
		const { iconstate } = this.state
		let activeIcon = iconstate.map(item => {
			if((item.id === id) && (item.active !== true)) {
				return { ...item, active:!item.active }
			}
			return item;
		})
		this.setState({
			iconstate: activeIcon
		})
		return activeIcon;
	}

	updateIcons = (id) => {
		let currentIconState = this.changeIconClass(id)
		let trueStates = currentIconState.filter(obj => obj.active === true)
		if(trueStates.length > 1) {
			let deactivatetrueState = trueStates.filter(obj => obj.id !== id)
			deactivatetrueState.forEach(obj => obj.active = false)
		}
	}

	handleIconStates = (id) => {
		this.changeIconClass(id)
		this.updateIcons(id)
	}

	handleHomeButton = (id) => {
		this.changeIconClass(id)
		this.updateIcons(id)
		window.scrollTo(0, 0)
	}

	render() {
		const { iconstate } = this.state;
		return(
			<footer className="footer">
				<FaHome onClick={() => this.handleHomeButton(1)} className={iconstate[0].active ? "icon" : "icon-new"}/>
				<FaBars onClick={() => this.handleIconStates(2)} className={iconstate[1].active ? "icon" : "icon-new"}/>
				<FaEnvelope onClick={() => this.handleIconStates(3)} className={iconstate[2].active ? "icon" : "icon-new"}/>
			</footer>
		)
	}
}; 

export default Footer;