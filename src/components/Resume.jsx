import React, { Component, useState } from "react";
import "./../assets/css/style.css";

export default function Resume({ myEmail, myLocation, myPhoneNum }) {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <span>
              As an front-end developer, I have a strong foundation in HTML,
              CSS, and JavaScript. My skills in these three core technologies
              have allowed me to develop professional-looking and responsive
              websites that are optimized for both desktop and mobile devices.
              <br />
              <br />
              I have a solid understanding of HTML tags and attributes, allowing
              me to structure my websites in a way that is both visually
              appealing and SEO-friendly. I am also proficient in CSS and am
              able to use both vanilla and CSS libraries such as Bootstrap to
              style my elements and create complex layouts. With my knowledge of
              JavaScript, I can add interactivity and dynamic elements to my
              websites, allowing me to create engaging user experiences.
              <br />
              <br />
              My skills in React have allowed me to create single-page
              applications that are easy to maintain and scale. I am comfortable
              with using JSX syntax and can build components that are highly
              customizable and reusable.
              <br />
              Overall, my skills in front-end development have allowed me to
              create a variety of websites, from simple static pages to complex
              applications. I am always eager to learn and improve my skills and
              stay up-to-date with the latest technologies and tools in the
              industry.
            </span>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Maryam Ebrahimi</h4>
                <ul>
                  <li>{myLocation}</li>
                  <li>{myPhoneNum}</li>
                  <li>{myEmail}</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>computer student</h4>
              </div>
            </div>
            <div className="col-lg-6" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">HTML</div>
              <div className="resume-item">CSS</div>
              <div className="resume-item">React.js</div>
              <div className="resume-item">JavaScript</div>
              <div className="resume-item">Bootstrap</div>
              <div className="resume-item">Basic jQuery</div>
              <div className="resume-item">Scss</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
