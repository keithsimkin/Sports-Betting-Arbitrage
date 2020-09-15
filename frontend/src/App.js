import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { arbGames } from "./components/utils/arbs";

class App extends Component {
  constructor() {
    super()
    this.state = {
      arbGames: arbGames
    }
  }

  render() {
    const { arbGames } = this.state;
     return (
        <div className="container">
          <Header />
          <Banner />
          <CardHolder arbs={arbGames}/>  
          <Footer />
          {
            //     <SideNav />
              }
        </div>
    );
  }

}

export default App; 
