import React from "react";
import text from "../../constants/text";
import "./style.css";

const welcomeMessage = () => {
  let aboutMeText = text.about_me.split('\n').map(i => {
    return <p>{i}</p>
  });
  return (
    <section className="about section-padding" data-scroll-index="1" id='about'>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="intro mb-md-50  wow zoomIn">
              <h3>"I thrive in fast-paced environments, love a good challenge, and appreciate opportunities to see the big picture while working collaboratively within a team."</h3>
              <ul>
                <li>
                  - Brian Woodward
                </li>
              </ul>
            </div>          
          </div>
          <div className="col-lg-1"></div> 
        </div> 
         
      </div>
    </section>
  );
};

export default welcomeMessage;
