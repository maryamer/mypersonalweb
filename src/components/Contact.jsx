import React from "react";
import "./../assets/css/style.css";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact({ myEmail, myLocation, myPhoneNum }) {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              If you have any questions about my services or would like to
              schedule a consultation, please don't hesitate to contact me. You
              can reach me through the contact form on my website or by email at
              meryemebrehimi@gmail.com. I strive to provide personalized and
              professional services to all of my clients and look forward to
              discussing how I can help you achieve your goals.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <PlaceOutlinedIcon
                    className="icon"
                    sx={{ fontSize: "10px" }}
                  />
                  <h4>Location:</h4>
                  <p>{myLocation}</p>
                </div>

                <div className="email">
                  <MailOutlineIcon className="icon" sx={{ fontSize: "10px" }} />
                  <h4>Email:</h4>
                  <p>{myEmail}</p>
                </div>

                <div className="phone">
                  <PhoneOutlinedIcon
                    className="icon"
                    sx={{ fontSize: "10px" }}
                  />
                  <h4>Call:</h4>
                  <p>{myPhoneNum}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
