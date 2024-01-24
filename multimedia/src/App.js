import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Renting from "./Renting";
import About from "./About";
import {Login} from './Login';
import Payment from "./Payment";
import "./App.css";

function Navbar() {
  
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Renting">Renting</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/About">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Renting" element={<Renting />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  ); 
}

export default App;
