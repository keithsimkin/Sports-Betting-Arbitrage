import React from "react";
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
	const Component = component
	const isAuthenticated = sessionStorage.getItem("userid");
	if (isAuthenticated) {
		return <Component />
	}
	return <Redirect to={{ pathname: '/signin' }}/>
}

export default ProtectedRoute;