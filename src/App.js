import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Profile/Home';
import About from './Profile/About';
import Contact from './Profile/Contact';
import Projects from './Profile/Projects';
import ProjectSivina from './Profile/ProjectSivina';
import ProjectLSP from './Profile/ProjectLSP';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-keterlambatan" element={<Projects />} />
            <Route path="/project-sivina" element={<ProjectSivina />} />
            <Route path="/project-lsp" element={<ProjectLSP />} />
        </Routes>
    );
}

export default App;
