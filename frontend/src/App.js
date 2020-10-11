import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import { arbGames } from "./components/utils/arbs";
import "./App.css";


class App extends Component {

  constructor(){
    super()
    this.state = {
      games: arbGames,
    }
  }


  render() {
    const { games } = this.state
     return (
        <div className="container">
          <Header />
          <Banner />
          <CardHolder/>
          <MobiCardHolder games={games}/>
          <Footer />
        </div>
    );
  }

}

export default App; 
