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
            <h3>Strengths:</h3>
            <ul>
            <li>Logical thinker</li>
            <li>Quick learner</li>
            <li>Organized</li>
            <li>Self-motivated</li>
            <li>Fun to work with</li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="section-head wow zoomIn" data-wow-offset="200">
              {/* <h3>About Me</h3> */}
              {/* <h6>A Front-End Focused Full-Stack DevOps Software Engineer</h6> */}
              <h3>I thrive in fast-paced environments, love a good challenge, and appreciate opportunities to see the big picture while working collaboratively within a team.</h3>
              <p>Designed and implemented RESTful APIs using Java and Spring Boot, using microservices architecture</p>
              <p>Developed reusable Angular UI components in Typescript and then transpiled to JavaScript</p>
              <p>Enhanced user experience by integrating US Web Design System (USWDS) into Angular front-end, utilizing SASS for theming</p>
              <p>Utilized Typescript for infrastructure as code to provision and manage AWS environments</p>
              <p>Deployed services to AWS Elastic Container Service (ECS) using Docker containers and Gitlab pipeline</p>
              <p>Used Node Package Manager to install and manage dependencies on front-end</p>
            </div>
          </div>
          
        </div>

        <div className="row">
          <div className="col-lg-3">
              
          </div>
          <div className="col-lg-9">
            <div className="intro mb-md-50 wow fadeInLeft">
              {aboutMeText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
