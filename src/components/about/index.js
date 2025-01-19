import React from "react";
import text from "../../constants/text";
import "./style.css";

const About = () => {
  let aboutMeText = text.about_me.split('\n').map(i => {
    return <p>{i}</p>
  });
  return (
    <section className="about section-padding" data-scroll-index="1" id='about'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
          <div className="section-head wow zoomIn" data-wow-offset="200"> 
              <h3>Strengths:</h3>
              <ul>
                <li>I'm a Logical thinker,</li>
                <li>Quick learner,</li>
                <li>Well organized,</li>
                <li>Detail oriented,</li>
                <li>Self-motivated,</li>
                <li>and fun to work with!</li>
              </ul>
          </div>
          </div>
          <div className="col-lg-9">
              <div className="section-head wow zoomIn" data-wow-offset="200"> 
                <p></p>
                <p>A list of some of the things I've been working on lately..</p>
                <p>Designed and implemented RESTful APIs using Java and Spring Boot, using microservices architecture</p>
                <p>Developed reusable Angular UI components in Typescript and then transpiled to JavaScript</p>
                <p>Enhanced user experience by integrating US Web Design System (USWDS) into Angular front-end, utilizing SASS for theming</p>
                <p>Utilized Typescript for infrastructure as code to provision and manage AWS environments</p>
                <p>Deployed services to AWS Elastic Container Service (ECS) using Docker containers and automated CI/CD pipelines in GitLab.</p>
                <p>Utilized Node Package Manager (NPM) to install and manage front-end project dependencies efficiently.</p>
                <p>Designed and implemented automated test scripts for end-to-end browser testing and API endpoint validation using Selenium for web automation and Cucumber for behavior-driven testing.</p>
              </div>
          </div>
          
        </div>

        {/* <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9"><div className="intro mb-md-50 wow fadeInLeft">{aboutMeText}</div></div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
