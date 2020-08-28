import React from "react";
import ProjectsGallery from "../projectsGallery";
import "./style.css";

const Portfolio = () => {
  return (
    <section
      className="portfolio section-padding text-center"
      data-scroll-index="3"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head wow zoomIn" data-wow-offset="200">
          <h3>Portfolio</h3>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p>A list of some clients and projects I've worked with using the latest techonolgy stack including React Javascript ES6+. <br />Click each Logo for more information.</p>
            </div>
          </div>
        </div>
        <ProjectsGallery />
        <div className="container">
        <div className="section-head wow zoomIn" data-wow-offset="200">
          <br/>
          <h3>Resume</h3>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
            <a target="_blank" href="https://docs.google.com/document/d/1yhKtGO85roP0jczfSMfXNB4D4w6MgQupEtQYfObnAY8/"><p>A link to my latest resume can be found here.</p></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
