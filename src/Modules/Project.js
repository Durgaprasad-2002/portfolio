import React from "react";
import "./Project.css";
import Navbar_ from "./Navbar";
import { useState } from "react";
import Loader from "./Loader";
export default function Project() {
  let [time, setTime] = useState(0);
  const Content = (
    <>
      {/* <Navbar_ /> */}
      <div className="ProjectContainer" id="pro">
        <div className="Prow1">
          <h2>Projects</h2>
          <p>
            This page contains some of my projects. If you have a project in
            mind or you want more details on any of the projects below, please
            send me a DM on my
            <a
              href="https://www.linkedin.com/in/veera-venkata-sai-durga-prasad-thota-60653020a/"
              target="new"
            >
              <b> LinkedIn </b>
            </a>{" "}
            so we can discuss.
          </p>
        </div>
        <div className="Prow3">
          <div class="card">
            <img src="https://img.freepik.com/free-vector/tiny-doctors-patients-near-hospital-flat-vector-illustration-therapist-face-mask-saying-goodbye-cured-people-near-medical-building-ambulance-emergency-clinic-concept_74855-25338.jpg" />
            <div class="card__content">
              <p class="card__title">Hospital Management System</p>
              <p class="card__description">
                Aim of the project is to digiatalize the manual work in
                Hospitals. In this Web Application we added fileds to generate
                OP,Patient details,Medical Stock Availability and more.
                <br />
                <span id="label">Tech Stack :</span> HTML, CSS , Bootstarp, Java
                Script, React Js, Node Js, Express Js, MongoDB Cluster
              </p>
              <a
                href="https://github.com/Durgaprasad-2002/ApolloShineProject"
                target="new"
              >
                <button id="demoButton">Source Code</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img src="https://uploads-ssl.webflow.com/615723192f6aa231573d2391/621762f0c54e9f846915b3c3_illustration_simplify-removebg-preview.png" />
            <div class="card__content">
              <p class="card__title">Car Rental Management System</p>
              <p class="card__description">
                It's a Car Reantal Application ,here we created two Logins
                dashboards User, Owner based on the tyoe of login the
                Application is changes.
                <br />
                <span id="label">Tech Stack :</span> HTML, CSS , Bootstarp, Java
                Script, React Js, Node Js, Express Js, MongoDB Cluster
              </p>
              <a
                href="https://github.com/Durgaprasad-2002/ApolloShineProject"
                target="new"
              >
                <button id="demoButton">Source Code</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img src="https://www.hotstats.com/hubfs/hotel_restaurant_waiter-1.jpeg" />
            <div class="card__content">
              <p class="card__title">Restaurant Management System</p>
              <p class="card__description">
                A Console based Java Application to Order Food. In This
                Application the Owner can get status of Food Orders.
                <br />
                <span id="label">Tech Stack :</span> Java, Ms Excel ,Vs Code
              </p>
              <a
                href="https://github.com/Durgaprasad-2002/HeroViredTask3"
                target="new"
              >
                <button id="demoButton">Source Code</button>
              </a>
            </div>
          </div>
          <div class="card">
            <img src="https://www.designer-daily.com/wp-content/uploads/2020/03/web-dev-business.jpg" />
            <div class="card__content">
              <p class="card__title">Minor Projects</p>
              <p class="card__description">
                I developed so many basic web Applications using HTML, CSS ,Java
                Script, React Js and also Along with that I do programming also,
                visit my github to view sources codes.
              </p>
              <a href="https://github.com/Durgaprasad-2002" target="new">
                <button id="demoButton">Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  setTimeout(() => setTime(2), 0);
  return <>{time == 2 ? Content : <Loader />}</>;
}
