import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import MobiCardHolder from "./components/MobiCard/MobiCardHolder";
import Footer from "./components/Footer/Footer";
import "./App.css";


class App extends Component {

  getAllArbs = () => {
    
    // axios.get("http://localhost:4000/api/v0/arbs")
    //   .then(res => {
    //     const games = res.data
    //     this.setState({ games })
    //   })
    //   .catch(err => {
    //     console.log("an error occurred in the componentDidMount API call", err)
    //   })
  }


  render() {
     return (
        <div className="container">
          <Header />
          <Banner />
          <CardHolder/>
          <MobiCardHolder/>
          <Footer />
        </div>
    );
  }

}

export default App; 
