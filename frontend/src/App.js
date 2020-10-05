import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import "./App.css";
//import { arbGames } from "./components/utils/arbs";

class App extends Component {

  render() {
    // const { arbGames } = this.state;
     return (
        <div className="container">
          <Header />
          <Banner />
          <CardHolder/>
          <MobiCardHolder />
          <Footer />
        </div>
    );
  }

}

export default App; 
