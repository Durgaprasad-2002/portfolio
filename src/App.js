import "./App.css";
import Navbar_ from "./Modules/Navbar";
import About from "./Modules/About";
import Project from "./Modules/Project";
import Coding from "./Modules/Coding";
import Contact from "./Modules/Contact";
import Loader from "./Modules/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  let [pos, changepos] = useState("none");
  let mybutton = document.getElementById("indi");

  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    )
      changepos("block");
    else changepos("none");
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App" id="#">
      <Navbar_ />
      <br />
      <About />
      <Project />
      <Coding />
      {/* <Contact /> */}
      <br />
      <br />
      <a href="#">
        <BsFillArrowUpCircleFill style={{ display: pos }} id="indi" />
      </a>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" index element={<About />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/Coding" element={<Coding />}></Route>
          <Route path="" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
