import React from 'react';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import About from "./components/About";
import Hero from './components/Hero';

function App() {
  return (
      <>
          <Navbar />
          <main className="page-content">
              <Hero />
              <About />
              <Experience />
              <Education />
              <Projects />
          </main>
      </>
  );
}

export default App;