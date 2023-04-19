import React from "react";
import "./../assets/css/style.css";

export default function About({ myEmail, myLocation, myPhoneNum }) {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Maryam Ebrahimi, front-end developer with a strong background in
              HTML, CSS, JavaScript, React.js, and Bootstrap.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>UI/UX Designer &amp; Front-end Web Developer.</h3>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>1 Septmber 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> <span>{myEmail}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>{myPhoneNum}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>{myLocation}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Junior</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>PhEmailone:</strong> <span>{myEmail}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="fst-italic">
                Passionate and motivated front-end developer with a strong
                background in HTML, CSS, JavaScript, React.js, and Bootstrap.
                Experience using JQuery and proficient in Turkish and Persian
                language. Seeking to gain work experience and develop further as
                a front-end developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
