import React from "react";
import "./../assets/css/style.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Sidebar({ toggleClass }) {
  return (
    <>
      <header
        id="header"
        className={toggleClass ? "toggledHeader" : "notToggledHeader"}
      >
        <div className="d-flex flex-column">
          <div className="profile mt-5">
            <h1 className="text-light">
              <a href="index.html">Maryam Ebrahimi </a>
            </h1>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul className="row">
              <li>
                <a
                  href="#hero"
                  className="nav-link scrollto active d-block col-12"
                >
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto d-block col-12">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto d-block col-12">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto d-block col-12">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter">
            <TwitterIcon />
          </a>
          <a href="#" className="instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="linkedin">
            <LinkedInIcon />
          </a>
        </div>
      </header>
    </>
  );
}
