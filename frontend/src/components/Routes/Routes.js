import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";

import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ComingSoon from "../ComingSoon/ComingSoon";
import ComingSoonx from "../ComingSoon/ComingSoonx";
import AutoArbRegister from "./AutoArbRegister";
import UserPage from "./UserPage";
import ProtectedRoute from "./ProtectedRoute";
 
const Routes = () => {
	return(
		<Router history={history}>
			<Switch>
				<Route path="/" exact component={HomePage}/>
				<Route path="/signin" component={SignIn}/>
				<Route path="/signup" component={SignUp}/>
				<Route path="/comingsoon" component={ComingSoon}/>
				<Route path="/forgot" component={ComingSoonx}/>
				<Route path="/autoarb" component={AutoArbRegister}/>
				<Route path="/user" component={UserPage}/>
			</Switch>
		</Router>
	)
}

export default Routes;