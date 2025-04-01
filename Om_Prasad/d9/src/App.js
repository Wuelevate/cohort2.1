import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css"; // Import CSS

function Navigation() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="navbar">
      <button onClick={() => navigate("/")} className="nav-button">Home</button>
      <button onClick={() => navigate("/about")} className="nav-button">About</button>
      <button onClick={() => navigate("/contact")} className="nav-button">Contact</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation /> {/* Navigation buttons */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
