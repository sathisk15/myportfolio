import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ExpEduTimeline from "./components/ExpEduTimeline/ExpEduTimeline";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import FloatMenu from "./components/FloatMenu";
// Css
import "./App.css";

// React
import Fade from "react-reveal/Fade";
function App() {
  const [floatMenu, setFloatMenu] = useState(false);

  const showFloatMenu = () => {
    if (window.scrollY >= 80) {
      setFloatMenu(true);
    } else {
      setFloatMenu(false);
    }
  };
  window.addEventListener("scroll", showFloatMenu);
  return (
    <Router>
      <Fragment>
        {floatMenu ? <FloatMenu /> : ""}

        <Fade top delay={8500}>
          <Navbar />
        </Fade>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <ExpEduTimeline />
        <Contact />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
