import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Resume from "./Images/DurgaPrasad_Resume(Final).pdf";
import img from "./Images/20MH1A04C3.jpg";
import { BsDownload } from "react-icons/bs";
import Navbar_ from "./Navbar";
export default function About() {
  let data = ["Full Stack Developer", "Programmer", "Designer"];
  // let [ind, changeInd] = useState(0);
  // setInterval(() => {
  //   if (ind >= 2) changeInd(0);
  //   else changeInd(ind + 1);
  // }, 3000);

  return (
    <>
      {/* <Navbar_ /> */}
      <div className="AboutContainer">
        <div className="row1">
          <div className="r1Ele1">
            <div className="container-fluid">
              <div className="row img-card">
                <div className="col-md-6">
                  <img id="img" src={img} />
                </div>
                <div className="col-md-6">
                  <h3>Durga Prasad Thota</h3>
                  <h6>Full Stack Developer</h6>
                  <h6>
                    Helping with:
                    <br />
                    <br />
                    <span>React Js</span>
                    <span>Node Js</span>
                    <span>MongoDB</span>
                  </h6>
                  <button>Contact me</button>
                </div>
              </div>
            </div>
          </div>
          <div className="r1Ele2">
            <p>
              Hi, I'm <span>Durga Prasad</span>, a{" "}
              <span
                style={{
                  minWidth: "300px",
                  fontWeight: "400",
                }}
              >
                {data[0]}
              </span>{" "}
              and design enthusiast. I have been working as a web developer for
              the past 1 year, mainly focused on <span>web technologies</span>.
              <br />
              <br />
              I feel comfortable working with technologies like JavaScript,
              React, Node.js, Spring Boot, MongoDB, MySql and many other
              technologies in the web ecosystem.
              <br />
              <br />I love <span>programming</span>, design, user interfaces,
              and open-source, and that's what I'm passionate about.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <h2 className="title-edu">Education</h2>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div id="edu-card">
                <h4>B.Tech</h4>
                <h5>Electronics and Communication Engineering</h5>
                <h6>
                  2020 - 2024 <span>7.33 CGPA</span>
                </h6>
                <h6>Aditya College Of Engineering, Surampalem</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div id="edu-card">
                <h4>Intermediate</h4>
                <h5>M.P.C</h5>
                <h6>
                  2018 - 2020 <span>9.55 CGPA</span>
                </h6>
                <h6>Aditya Junior College, Mandapeta</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div id="edu-card">
                <h4>Secondary School</h4>

                <h6>
                  2017 - 2018 <span>9.30 CGPA</span>
                </h6>
                <h6>C.A.M.P School, Ramachandrapuram</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <span class="background">
//                 <a href={Resume} class="button">
//                   <svg>
//                     <rect x="0" y="0" fill="none" width="100%" height="100%" />
//                   </svg>
//                   Download CV
//                 </a>
//               </span>
