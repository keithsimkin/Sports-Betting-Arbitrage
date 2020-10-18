import React, { Component } from "react";
import { FaSnowflake } from "react-icons/fa";

class SignUp extends Component {

	constructor(props) {
		super(props)
		this.state = {
			signUpEmail:"",
			signUpFirstName:"",
			signUpLastName:"",
			signUpUsername:"",
			signUpPassword:""
		}
	}

	getSignupEmail = e => {
		this.setState({
			signUpEmail: e.target.value
		})
	}

	getSignupFirstName = e => {
		this.setState({
			signUpFirstName: e.target.value
		})
	}

	getSignupLastName = e => {
		this.setState({
			signUpLastName: e.target.value
		})
	}

	getSignupUserName = e => {
		this.setState({
			signUpUsername: e.target.value
		})
	}

	getSignupPassword = e => {
		this.setState({
			signUpPassword: e.target.value
		})
	}

	onSubmitSignup = () => {
		this.props.onRouteChange('autoarb')
		//console.log(this.state) send with JSON.stringify in a post request
	}

	render() {
		return(
			<div className="signup-container">
				<div>
					<FaSnowflake className="arb_logo_routes"/>
				</div>
				<div className="signup-text">
					<p>Sign up to invest in sports like the stock market</p>
				</div>
				<div className="signup-input">
					<input onChange={this.getSignupEmail} type="email" name="email" placeholder="Email"/>
					<input onChange={this.getSignupFirstName} type="text" name="first-name" placeholder="First Name"/>
					<input onChange={this.getSignupLastName} type="text" name="last-name" placeholder="Last Name"/>
					<input onChange={this.getSignupUserName} type="text" name="username" placeholder="Username"/>
					<input onChange={this.getSignupPassword} type="password" name="password" placeholder="Password"/>
				</div>
				<div>
					<div className="signup-button" onClick={this.onSubmitSignup}>Sign up</div>
				</div>
			</div>
		)
	}
}

export default SignUp;