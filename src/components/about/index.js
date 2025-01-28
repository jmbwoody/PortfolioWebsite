import React from "react"; 
import "./style.css";

const About = () => { 
  return (
    <section className="about section-padding" data-scroll-index="1" id='about'>
      <div className="container">
        <div className="row g-5">
        <div className="col-lg-8 col-md-8">
              <div className="section-head welcomeContainer wow zoomIn" data-wow-offset="200"> 
                <p></p>
                <h3 className="fst-italic border-bottom">
                    Hello and welcome! Thanks for checking in!
                </h3>
                <hr></hr>
                <article className="blog-post">
                  <h2 className="display-5 link-body-emphasis mb-1">Here are a few things I've been concentrating on lately...</h2>
                  <small className="blog-post-meta">January 27, 2025 by <a href="#">Brian Woodward</a></small>  
                    <p></p>
                      <ul>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Built, Tested, and completed rolling out a new payment and collection application for the Federal Reserve Bank of St. Louis.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Designed and implemented RESTful APIs using Java and Spring Boot, using microservices architecture
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Developed reusable Angular UI components in Typescript and then transpiled to JavaScript
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Enhanced user experience by integrating US Web Design System (USWDS) into Angular front-end, utilizing SASS for theming
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Utilized Typescript for infrastructure as code to provision and manage AWS environments
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Deployed services to AWS Elastic Container Service (ECS) using Docker containers and automated CI/CD pipelines in GitLab.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Utilized Node Package Manager (NPM) to install and manage front-end project dependencies efficiently.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span><i className="ti-settings"></i></span>
                            &nbsp;&nbsp;Designed and implemented automated test scripts for end-to-end browser testing and API endpoint validation using Selenium for web automation and Cucumber for behavior-driven testing.
                          </div>
                        </li>
                      </ul> 
                </article>
                

              
              </div>
          </div>
          <div className="col-lg-4 col-md-4">
          
            <div className="section-head welcomeContainer wow zoomIn" data-wow-offset="200">  
                <div className="p-4 mb-3 bg-body-tertiary rounded">
                  <h4 className="fst-italic">Core Strengths:</h4>
                  <hr></hr>
                  <div className="mb-0 listItems"> 
                    <ul>
                      <li><span><i className="ti-check"></i></span>&nbsp;Quick learner</li>
                      <li><span><i className="ti-check"></i></span>&nbsp;Logical thinker</li>
                      <li><span><i className="ti-check"></i></span>&nbsp;Well organized</li>
                      <li><span><i className="ti-check"></i></span>&nbsp;Detail oriented</li>
                      <li><span><i className="ti-check"></i></span>&nbsp;Self-motivated</li>
                      <li><span><i className="ti-check"></i></span>&nbsp;Fun to work with!</li>
 
                    </ul>
                  </div>
                </div> 
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
