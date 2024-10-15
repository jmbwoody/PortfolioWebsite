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
              <p>A list of some clients and projects I've worked on. <br />Click a Logo to view details about the projects I worked on for each company.</p>
            </div>
          </div>
        </div>
        <ProjectsGallery />        
        </div>      
    </section>
  );
};

export default Portfolio;
