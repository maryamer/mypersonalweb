import React, { Component, useState } from "react";
import "./../assets/css/style.css";
import DehazeIcon from "@mui/icons-material/Dehaze";

import Sidebar from "./Sidebar";
import Skills from "./Skills";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

const Home = () => {
  let myLocation = "Tabriz,Iran";
  let myPhoneNum = "(+98)9937705670";
  let myEmail = "meryemebrahimi@gmail.com";

  const [toggleClass, setToggleClass] = useState(false);

  const handleToggleClick = () => {
    setToggleClass(toggleClass ? false : true);
  };

  return (
    <>
      <DehazeIcon
        onClick={handleToggleClick}
        className="mobile-nav-toggle d-xl p-2"
        sx={{ fontSize: "30px" }}
      />

      <Sidebar toggleClass={toggleClass} />

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container ">
          <h1>Maryam ebrahimi </h1>
          <p>I'm Web Developer</p>
        </div>
      </section>

      <main
        id="main"
        className={toggleClass ? "toggledMain" : "notToggledMain"}
      >
        <About
          myEmail={myEmail}
          myLocation={myLocation}
          myPhoneNum={myPhoneNum}
        />

        <Skills />

        <Resume
          myEmail={myEmail}
          myLocation={myLocation}
          myPhoneNum={myPhoneNum}
        />

        <Contact
          myEmail={myEmail}
          myLocation={myLocation}
          myPhoneNum={myPhoneNum}
        />
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright"></div>
          <div className="credits"></div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Home;
