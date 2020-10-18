import React, { Component } from 'react';
import { SelectionProvider } from "./context/AutoArbSelectionContext";
import Header from "./components/Header/Header";
import HomePage from "./components/Routes/HomePage";
import SignIn from "./components/Routes/SignIn";
import SignUp from "./components/Routes/SignUp";
import AutoArbRegister from "./components/Routes/AutoArbRegister"
import Banner from "./components/Banner/Banner";
//import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import ComingSoonx from "./components/ComingSoon/ComingSoonx";
import "./App.css";


class App extends Component {

  constructor(){
    super() 
    this.state = {
      // route: 'index',
      route: 'signup',
      bookieselection:[]
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  selectedBookies = (value) => {
    this.setState({
      bookieselection: value
    })
  }
 
  render() {
    const { route, bookieselection } = this.state;
    const renderSwitch = (param) => {
      switch(param) {
        case "index":
          return (<HomePage onRouteChange={route => this.onRouteChange(route)}/>)
        case "signin":
          return (<SignIn onRouteChange={route => this.onRouteChange(route)}/>)
        case "signup":
          return (<SignUp onRouteChange={route => this.onRouteChange(route)}/>)
        case "comingsoon":
          return (<ComingSoon onRouteChange={route => this.onRouteChange(route)}/>)
        case "comingsoonx":
          return (<ComingSoonx onRouteChange={route => this.onRouteChange(route)}/>)
        case "autoarb":
          return (<AutoArbRegister bookieList={this.selectedBookies} onRouteChange={route => this.onRouteChange(route)}/>)
        case "home":
          return (<div>
                    <Header onRouteChange={route => this.onRouteChange(route)}/>
                    <Banner />
                    {//<CardHolder/>
                    }
                    <MobiCardHolder />
                    <Footer onRouteChange={route => this.onRouteChange(route)}/> 
                  </div>)
          default :
            return null
      }
    }

     return (
        <SelectionProvider value={bookieselection}>
          <div className="container">
            { renderSwitch(route) }
          </div>
        </SelectionProvider>
    );
  } 

}

export default App; 
