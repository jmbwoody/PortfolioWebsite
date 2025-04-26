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
              <img className="img-thumbnail rounded-image" src={meImage} alt='Brian Woodward' />
                <h1>Resume</h1>
                <h2>View my resume</h2>
            <div id="resumeLink" className="social-media">            
              <button onClick={() => openLinkInNewWindow(urls.resume)}>
                <span>
                  <i className="ti-write"></i>
                </span>
              </button>              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
