import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

const Navbar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [style, setStyle] = useState({ display: "none" });
  const [fullMenu, setFullMenu] = useState(true);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/projects")) {
      setFullMenu(false);
    } else {
      setFullMenu(true);
    }
  }, [location.pathname]);

  const toggleNavbarInMobile = () => {
    if (isMenuOpen) {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "block" });
    }
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setStyle({ display: "none" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <button className="navbar-toggler" type="button">
          <span
            className="menu-icon"
            onClick={toggleNavbarInMobile}
            style={fullMenu ? null : { color: "#212121" }}
          >
            <i className="fas fa-bars"></i>&nbsp; Brian Woodward
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={style}>
          {fullMenu ? (
            <ul className="navbar-nav ml-auto">
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>
                  <li className="nav-item active">
                    <HashLink className="nav-link" smooth to="#home" onClick={closeMenu}>
                      Home <span className="sr-only">(current)</span>
                    </HashLink>
                  </li>
                </Button>
                <Button>
                  <li className="nav-item">
                    <HashLink className="nav-link" smooth to="#about" onClick={closeMenu}>
                      About
                    </HashLink>
                  </li>
                </Button>
                <Button>
                  <li className="nav-item">
                    <HashLink className="nav-link" smooth to="#workCategories" onClick={closeMenu}>
                      Background
                    </HashLink>
                  </li>
                </Button>
                <Button>
                  <li className="nav-item">
                    <HashLink className="nav-link" smooth to="#portfolio" onClick={closeMenu}>
                      Portfolio
                    </HashLink>
                  </li>
                </Button>
              </ButtonGroup>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <ButtonGroup>
                <Button>
                <li className="nav-item active">
                  <Link to={{
                    pathname: "/",
                    search: "",
                    hash: "#portfolio",
                  }}>Return to Portfolio</Link>
                </li>
                </Button>
              </ButtonGroup>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
