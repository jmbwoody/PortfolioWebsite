import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonTop from "../buttonTop";
import Project from "../../views/project";
import Home from "../../views/home";
import Contact from "../contact";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "../../styles/bootstrap.min.css";
import "../../styles/magnific-popup.css";
import "../../styles/all.min.css";
import "../../styles/themify-icons.css";
import "../../styles/animate.min.css";
import "../../styles/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/PortfolioWebsite">
        <Fragment>
         
          <ButtonTop scrollStepInPx="50" delayInMs="16.66" />
 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />          
          </Routes>

          <Contact />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
