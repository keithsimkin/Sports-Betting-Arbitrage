import React, { Component } from 'react';
import Header from "./components/Header/Header";
import HomePage from "./components/Homepage/HomePage";
import SignIn from "./components/Homepage/SignIn";
//import SignUp from "./components/Homepage/SignUp";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import "./App.css";


class App extends Component {

  constructor(){
    super()
    this.state = {
      route: 'index'
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  render() {
    const { route } = this.state;
    const renderSwitch = (param) => {
      switch(param) {
        case "index":
          return (<HomePage onRouteChange={route => this.onRouteChange(route)}/>)
        case "signin":
          return (<SignIn onRouteChange={route => this.onRouteChange(route)}/>)
        case "home":
          return (<div>
                    <Header />
                    <Banner />
                    <CardHolder/>
                    <MobiCardHolder/>
                    <Footer /> 
                  </div>)
          default :
            return null
      }
    }

     return (
        <div className="container">
          { renderSwitch(route) }
        </div>
    );
  } 

}

export default App; 
