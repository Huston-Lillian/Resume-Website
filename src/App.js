import React from 'react';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <>
      <Navbar/>
      <div className="scroll-wrapper">

          <div className="scroll-container">
              <section id="hero">
                  <Hero />
              </section>

              <section id="skills">
                  <Skills />
              </section>

              <section id="experience">
                  <Experience />
              </section>

              <section id="education">
                  <Education />
              </section>

              <section id="projects">
                  <Projects />
              </section>

              <section id="contact">
                  <Contact />
              </section>

              <section id="footer">
                  <Footer />
              </section>
          </div>
      </div>
      </>
  );
}

export default App;