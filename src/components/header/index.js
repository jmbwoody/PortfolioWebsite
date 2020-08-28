import React from "react";
import urls from '../../constants/urls';
import meImage from "../../assets/img/coverImageProfile.jpg";
import './style.css';

const Header = () => {
  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank")
    return
  };

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
            />

            <h1>Brian Woodward</h1>
            <h2>Full Stack Web Engineer</h2>

            <div className="social-media">
            <a onClick={() => openLinkInNewWindow(urls.resume)}>
                <span>
                  <i className="ti-write"></i>
                </span>
              </a>
            <a onClick={() => openLinkInNewWindow(urls.linkedin)}>
                <span>
                  <i className="ti-linkedin"></i>
                </span>
              </a>                         
              <a onClick={() => openLinkInNewWindow(urls.github)}>
                <span>
                  <i className="ti-github"></i>
                </span>
              </a>
              
              <a onClick={() => openLinkInNewWindow(urls.facebook)}>
                <span>
                  <i className="ti-facebook"></i>
                </span>
              </a>   
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
