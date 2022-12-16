import React from "react";
import "../styling/Navbar.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar({ name }) {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="nav">
        <Link className="a" to="/">
          Home
        </Link>
      </div>
      <div className="nav">
        <Link className="a" to="create">
          Create
        </Link>
      </div>
      <div className="nav">
        <Link className="a" to="about">
          About
        </Link>
      </div>
      <div className="login">
        {name ? (
          `Welcome -  ${name}`
        ) : (
          <Link className="a" to="signup">
            Login | SignUp
          </Link>
        )}
      </div>
    </div>
  );
}
