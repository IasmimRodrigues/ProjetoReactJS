import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Lanches from "./components/Lanches";
import Sobremesas from "./components/Sobremesas";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="App">
                <Header />
          
                <Banner/>
          
                <Lanches/>
                <Sobremesas/>
          
                <Delivery/>
                <Footer/>
          
          
              </div>
    )
}

export default Home;