import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FolioPage from "./pages/Folio";
import NotFoundPage from "./pages/NotFound";

import '../src/main2.css'
import Header from "./components/Header";
import Nav from './components/Nav'

function App() {
  return (
    <>
    {/* <Header className="header" />
    <Nav className="nav" /> */}
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