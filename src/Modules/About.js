import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Resume from "./Images/SaiDurgaPrasad__Resume.pdf";
import img from "./Images/20MH1A04C3.jpg";
import { BsDownload } from "react-icons/bs";
import Navbar_ from "./Navbar";

const About = () => {
  const roles = ["Full Stack Developer", "Programmer", "Designer"];

  return (
    <>
      <div className="about-container">
        <div className="about-row">
          <div className="profile-container">
            <Suspense fallback="Loading...">
              <div className="img-card">
                <div className="img-card-inner">
                  <img
                    id="profile-img"
                    src={img}
                    alt="Durga Prasad"
                    loading="lazy"
                  />
                </div>
                <div className="img-card-inner">
                  <h3>Durga Prasad</h3>
                  <h6>MERN Stack Developer</h6>
                  <h6>
                    Helping with:
                    <br />
                    <br />
                    <span>React.Js</span>
                    <span>Node.Js</span>
                    <span>MongoDB</span>
                  </h6>
                  <a href="tel:+91-9177943677">
                    <button>Contact me</button>
                  </a>
                  <a href={Resume} download="SaiDurgaPrasad_Resume.pdf">
                    <button>Download Resume</button>
                  </a>
                </div>
              </div>
            </Suspense>
          </div>
          <div className="bio-container">
            <p>
              Hi, I'm <span>Durga Prasad</span>, a{" "}
              <span className="role">{roles[0]}</span> and design enthusiast. I
              have been working as a web developer for the past year, mainly
              focused on <span>web technologies</span>.
              <br />
              <br />
              I feel comfortable working with technologies like Java,
              JavaScript, React, Node.js, MongoDB, MySql and many other
              technologies in the web ecosystem.
              <br />
              <br />I love <span>programming</span>, design, user interfaces,
              and open-source, and that's what I'm passionate about.
            </p>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <h2 className="section-title">Education</h2>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="edu-card">
                <h4>B.Tech</h4>
                <h5>Electronics and Communication Engineering</h5>
                <h6>
                  2020 - 2024 <span>7.33 CGPA</span>
                </h6>
                <h6>Aditya College Of Engineering, Surampalem</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>Intermediate</h4>
                <h5>M.P.C</h5>
                <h6>
                  2018 - 2020 <span>9.55 CGPA</span>
                </h6>
                <h6>Aditya Junior College, Mandapeta</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="edu-card">
                <h4>Secondary School</h4>
                <h6>
                  2017 - 2018 <span>9.30 CGPA</span>
                </h6>
                <h6>C.A.M.P School, Ramachandrapuram</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid" id="skill">
          <h2 className="section-title">Skills</h2>
          <br />
          <div className="SkillCardItems">
            <div className="skill-card">
              <h4>Frontend Technologies</h4>
              <div className="skill-wrapper">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Bootstrap</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skill-wrapper">
                <h5>MongoDB</h5>
                <h5>MySql</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Frontend Frameworks</h4>
              <div className="skill-wrapper">
                <h5>ReactJs</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Backend Frameworks</h4>
              <div className="skill-wrapper">
                <h5>ExpressJs</h5>
                <h5>NodeJs</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Programming Languages</h4>
              <div className="skill-wrapper">
                <h5>JavaScript</h5>
                <h5>Java</h5>
                <h5>C++</h5>
              </div>
            </div>

            <div className="skill-card">
              <h4>Productivity Software</h4>
              <div className="skill-wrapper">
                <h5>Microsoft Office (Word, Excel, PowerPoint)</h5>
              </div>
            </div>
            <div className="skill-card">
              <h4>Tools & Utilities</h4>
              <div className="skill-wrapper">
                <h5>Git</h5>
                <h5>Postman</h5>
                <h5>Redux Toolkit</h5>
                <h5>Embedded JavaScript Template (SSR)</h5>
                <h5>Docker</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
