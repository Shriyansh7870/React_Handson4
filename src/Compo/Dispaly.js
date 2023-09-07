import React from "react";
import Students from "./Students";
import Contact from "./Contact";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
export default function Dispaly() {
  return (
    <div className="Nav">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Link to="/">Home</Link>
      <Link to="/Students">Students</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}
