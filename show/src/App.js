import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        {/* Define your routes using Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />

          {/* Add other routes here */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;