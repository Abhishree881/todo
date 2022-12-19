import React from "react";
import "../styling/Navbar.css";
// import logo from "./logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar({ name }) {
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div className="navbar">
      <div className="nav-main">
        <div className="img">
          {/* <img src={logo} alt="logo" /> */}
          Todo App
        </div>
        <div className="login">
          {name ? (
            <>
              <div
                className="name"
                onClick={() => {
                  const auth = getAuth();
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                {`${name}`}{" "}
              </div>
              <div className="hover">Click to Signout</div>
            </>
          ) : (
            <Link
              className={activeLink === "login" ? "a active" : "a"}
              onClick={() => onUpdateActiveLink("login")}
              to="signup"
            >
              Login | SignUp
            </Link>
          )}
        </div>
        <div className="nav">
          <Link
            className={activeLink === "home" ? "a active" : "a"}
            to="/"
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Link>
        </div>
        <div className="nav">
          {name ? (
            <Link
              className={activeLink === "create" ? "a active" : "a"}
              onClick={() => onUpdateActiveLink("create")}
              to="create"
            >
              Create
            </Link>
          ) : (
            <Link
              className={activeLink === "create" ? "a active" : "a"}
              onClick={() => onUpdateActiveLink("login")}
              to="signup"
            >
              Create
            </Link>
          )}
        </div>
        <div className="nav">
          <Link
            className={activeLink === "about" ? "a active" : "a"}
            onClick={() => onUpdateActiveLink("about")}
            to="about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
