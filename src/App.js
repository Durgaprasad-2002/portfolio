import "./App.css";

import Loader from "./Loader";

import { AiOutlineArrowUp } from "react-icons/ai";
import { Suspense, useState } from "react";
import { lazy } from "react";

const Navbar_ = lazy(() => import("./Modules/Navbar"));
const About = lazy(() => import("./Modules/About"));
const Project = lazy(() => import("./Modules/Project"));
const Coding = lazy(() => import("./Modules/Coding"));
const Contact = lazy(() => import("./Modules/Contact"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App" id="#">
        <Navbar_ />
        <About />
        <Coding />
        <br />
        <Project />
        <Contact />
        {/* <a href="#">
          <AiOutlineArrowUp style={{ display: pos }} id="indi" />
        </a> */}
      </div>
    </Suspense>
  );
}
export default App;
