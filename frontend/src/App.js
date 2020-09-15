import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardHolder from "./components/CardHolder/CardHolder";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <CardHolder />  
      {
        //     <SideNav />
          }
    </div>
  );
}

export default App; 
