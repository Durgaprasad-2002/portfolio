import React from "react";
import "./Contact.css";
import Navbar_ from "./Navbar";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      {/* <Navbar_ /> */}
      <div className="ProjectContainer" id="cont" style={{ marginTop: "50px" }}>
        <div className="Prow1">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="Contact">
        <div className="ContactMain">
          <div className="ContactR1">
            <div className="ELE1">
              <div className="contactcard">
                <h2>Durga Prasad Thota</h2>
                <br />
                <p>
                  <b>Mobile Number : </b> 9177943677
                  <br />
                  <b>Email : </b> prasaddurga2031@gmail.com
                  <br />
                  <b>Address : </b>Pasalapudi, E.G.Dist , Andhra Pradesh ,
                  533261
                </p>
              </div>
            </div>
            <div className="ELE2">
              <div className="contactcard">
                <h2>Contact Us</h2>
                <p>
                  Send your Email to Communicate With Me <b>: )</b>
                </p>
                <form>
                  <input type="email" className="email" required />
                  <input type="submit" className="submit" value="send" />
                </form>
              </div>
            </div>
            <div className="ELE3">
              <iframe
                className="Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7604.705726067081!2d82.00472780866559!3d16.848534189452067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUxJzAxLjUiTiA4MsKwMDAnMzUuNCJF!5e0!3m2!1sen!2sin!4v1690255729161!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="digiAccounts">
            <a
              href="https://www.linkedin.com/in/veera-venkata-sai-durga-prasad-thota-60653020a/"
              target="new"
            >
              {" "}
              <BsLinkedin className="accs" />
            </a>

            <a href="https://github.com/Durgaprasad-2002" target="new">
              {" "}
              <BsGithub className="accs" />
            </a>

            <a target="new">
              {" "}
              <BsFacebook className="accs" />
            </a>

            <a target="new">
              {" "}
              <BsTwitter className="accs" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
