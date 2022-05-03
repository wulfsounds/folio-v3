import '../src/main2.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FolioPage from "./pages/Folio";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <header className='header'>
        <h2 id='title-main'>WulfSounds</h2>
        <h2 id='title-fourth'>WulfSounds</h2>
      </header>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/folio" element={<FolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;