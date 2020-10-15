import React, { Component } from 'react';
import Header from "./components/Header/Header";
import HomePage from "./components/Routes/HomePage";
import SignIn from "./components/Routes/SignIn";
import SignUp from "./components/Routes/SignUp";
import AutoArbRegister from "./components/Routes/AutoArbRegister"
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import "./App.css";


class App extends Component {

  constructor(){
    super()
    this.state = {
      // route: 'index'
      route: 'autoarb'
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
        case "signup":
          return (<SignUp onRouteChange={route => this.onRouteChange(route)}/>)
        case "autoarb":
          return (<AutoArbRegister onRouteChange={route => this.onRouteChange(route)}/>)
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
