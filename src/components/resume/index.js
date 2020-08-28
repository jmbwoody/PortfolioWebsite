import React from "react";
import urls from '../../constants/urls';
import meImage from "../../assets/img/IMG_7519.JPEG";
import './style.css';

const Header = () => {
  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank")
    return
  };

  return (
    <header
      className="header resume bg-prop section-overlay dark"
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
            <a href="https://docs.google.com/document/d/1PxIZWqFPF_K-2Ut6SwEXEPXegnD-Yrp4se49Keta3y8/" target="_blank">
            <h1>My Resume</h1>
            <h2>Click here for a link to my current updated resume</h2>
            </a>
            <div className="social-media">            
              <a onClick={() => openLinkInNewWindow(urls.resume)}>
                <span>
                  <i className="ti-write"></i>
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
