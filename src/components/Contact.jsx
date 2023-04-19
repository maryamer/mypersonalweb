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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
