import React from "react";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import propic from "../assets/propicbng.png";
import Aboutme from "./AboutMe/Aboutme";
import Service from "./Services/Service";
import Contact from "./ContactMe/Contact";
import Newsletter from "./Newsletter/Newsletter";
import Newsletterfooter from "./Newsletter/Newsletterfooter";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
const Main = () => {
  return (
    <div className="bg-black h-[100%] ">
      <Navbar />
      <Intro />
      <Aboutme />
      <Experience />
      <Projects />
      <Service />
      <Contact />
      <Newsletterfooter />
    </div>
  );
};

export default Main;
