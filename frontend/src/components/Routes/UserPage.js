import React from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
//import CardHolder from "../CardHolder/CardHolder";
import MobiCardHolder from "../MobiCard/MobiCardHolder";
import Footer from "../Footer/Footer";

const UserPage = () => {
	return(
		<div>
           <Header/>
            <Banner />
                    {//<CardHolder/>
                    }
            <MobiCardHolder />
            <Footer/> 
         </div>
	)
}

export default UserPage;