import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/main";
import Intro from "./Components/Intro/Intro";
import Aboutme from "./Components/AboutMe/Aboutme";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/ContactMe/Contact";
import Newsletterfooter from "./Components/Newsletter/Newsletterfooter";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/AboutMe" element={<Aboutme />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<Contact />} />
        <Route path="/Subscribe" element={<Newsletterfooter />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
