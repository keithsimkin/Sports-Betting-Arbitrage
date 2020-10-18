import React, { Component } from "react";
import { FaSnowflake } from "react-icons/fa";
import "./routes.css"

class SignIn extends Component { 

	constructor(props) {
		super(props)
		this.state = {
			signinUsername:"",
			signinPassword:""
		}
	}

	getSigninUsername = e => {
		this.setState({
			signinUsername: e.target.value
		})
	}

	getSigninPassword = e => {
		this.setState({
			signinPassword: e.target.value
		})
	}

	onSubmitSignin = () => {
		//this.props.onRouteChange('home')
		console.log(this.state) //send with JSON.stringify in a post request
	}

	render() {
		const { onRouteChange } = this.props
		return(
			<div className="signin-container">
				<div>
					<FaSnowflake className="arb_logo_routes"/>
				</div>
				<div className="signin-text">
					<p>Log in to Mockbe</p>
				</div>
				<div className="signin-input">
					<input onChange={this.getSigninUsername} type="text" name="username" placeholder="email"/>
					<input onChange={this.getSigninPassword} type="password" name="password" placeholder="password"/>
				</div>
				<div>
					<div className="signin-login-button" onClick={this.onSubmitSignin}>Log in</div>
				</div>
				<div className="signin-footer">
					<p onClick={() => onRouteChange('comingsoonx')}>Forgot password?</p> 
					<p onClick={() => onRouteChange('signup')}>Sign up for Mockbe</p>
				</div>
			</div>
		)
	}
	
}

export default SignIn;