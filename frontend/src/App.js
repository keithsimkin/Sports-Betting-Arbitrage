import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
//import { arbGames } from "./components/utils/arbs";
import "./App.css";


class App extends Component {

  constructor(){
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/api/v0/arbs")
      .then(response => {
          console.log(response)
      })
      .catch(err => {
        console.log("an error occurred in the componentDidMount API call", err)
      })
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
