import React from "react";
import urls from '../../constants/urls';
import meImage from "../../assets/img/coverImageProfile.jpg";
import './style.css';
import Typed from 'typed.js';



const Header = () => {
  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank")
    return
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hello, friend!</i>', '<i>Welcome to My Portfolio Website.</i>', 'Hope you enjoy it!', 'Please see examples of my work below.', 'My name is...'],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <header
      className="header bg-prop section-overlay dark"
      data-scroll-index="0"
      id='home'
    >
      <div className="v-middle">
        <div className="container">
          <div className="caption text-center wow slideInDown">
            <img
              className="img-thumbnail rounded-image"
              src={meImage}
              alt='Brian Woodward'
            /><h2>
              <span ref={el} /></h2>
              <h1>Brian Woodward</h1>
              <h2>Software Engineer III</h2>
              <h2>Specializing in Front-End (React, AngularJS) web application development</h2>
            <div className="social-media">
                <a href='/' onClick={() => openLinkInNewWindow(urls.resume)}>
                  <span>
                    <i className="ti-write"></i>
                  </span>
                  <p>
                    Resume
                  </p>
                </a>
                <a href='/' onClick={() => openLinkInNewWindow(urls.linkedin)}>
                  <span>
                    <i className="ti-linkedin"></i>
                  </span>
                  <p>
                    LinkedIn
                  </p>
                </a>                         
                <a href='/' onClick={() => openLinkInNewWindow(urls.github)}>
                  <span>
                    <i className="ti-github"></i>
                  </span>
                  <p>
                      GitHub
                  </p>
                </a>                
                <a href='/' onClick={() => openLinkInNewWindow(urls.facebook)}>
                  <span>
                    <i className="ti-facebook"></i>
                  </span>
                  <p>
                      Facebook
                  </p>
                </a>   
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
