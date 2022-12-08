import React from "react";
import "../styling/Navbar.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="nav">
        <Link to="/">Home</Link>
      </div>
      <div className="nav">
        <Link to="create">Create</Link>
      </div>
      <div className="nav">
        <Link to="about">About</Link>
      </div>
    </div>
  );
}
