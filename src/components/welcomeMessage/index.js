import React from "react";
 import "./style.css";
import meImage from "../../assets/img/brian-portfolio-image.png";

const welcomeMessage = () => { 
  return ( 
      <>
      <div className="jumbotron jumbotron-fluid aboutMeJumbotron">  
        <div className="container"> 
          
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 px-0">
                  <div id="aboutmeImage" className="wow zoomIn">
                    <img className="img-thumbnail rounded-image" src={meImage} alt='Brian Woodward' />
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 px-0">
                  <div className="bubble wow zoomIn">
                    <h3 className="fst-italic">"I excel in dynamic settings, enjoy challenges, and value teamwork with a focus on the big picture."</h3>
                    <small className="lead my-3">- Brian Woodward</small> 
                  </div> 
                </div>
            </div>
          </div>
         
      </div> 
      </> 
  );
};

export default welcomeMessage;
