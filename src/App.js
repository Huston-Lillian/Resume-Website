import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
      <Router>
          <Navbar />
          <main className="page-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
      </Router>
  );
}

export default App;