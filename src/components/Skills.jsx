import React from "react";
import "./../assets/css/style.css";

import ProgressBarExample from "./ProgressBarExample";

export default function Skills() {
  return (
    <>
      {" "}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p></p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                  <ProgressBarExample valueOfProgressBar="100" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                  <ProgressBarExample valueOfProgressBar="90" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">85%</i>
                  <ProgressBarExample valueOfProgressBar="85" />
                </span>
              </div>
            </div>

            <div className="col-lg-6" data-aos-delay="100%">
              <div className="progress">
                <span className="skill">
                  React js <i className="val">85%</i>
                  <ProgressBarExample valueOfProgressBar="85" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  bootstrap <i className="val">90%</i>
                  <ProgressBarExample valueOfProgressBar="90" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  Tailwind CSS <i className="val">55%</i>
                  <ProgressBarExample valueOfProgressBar="55" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
