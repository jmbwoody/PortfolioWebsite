import React, { Component } from "react";
import Header from "../../components/header";
import About from "../../components/about";
import WelcomeMessage from "../../components/welcomeMessage";
import Carousel from "../../components/carousel";
import WorkCategories from "../../components/workCategories";
import Navbar from "../../components/navbar";
import Portfolio from "../../components/portfolio";
import Resume from "../../components/resume";



class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Navbar />

        <Header />

        <WelcomeMessage />

        <Carousel />

        <About /> 

        <WorkCategories />

        <Portfolio />

        <Resume />
      </div>
    );
  }
}

export default Home;
