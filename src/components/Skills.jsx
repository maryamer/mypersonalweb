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
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
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
                  JavaScript <i className="val">75%</i>
                  <ProgressBarExample valueOfProgressBar="75" />
                </span>
              </div>
            </div>

            <div className="col-lg-6" data-aos-delay="100%">
              <div className="progress">
                <span className="skill">
                  PHP <i className="val">80%</i>
                  <ProgressBarExample valueOfProgressBar="80" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress/CMS <i className="val">90%</i>
                  <ProgressBarExample valueOfProgressBar="90" />
                </span>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">55%</i>
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
