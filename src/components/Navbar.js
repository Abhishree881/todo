import React from "react";
import "../styling/Navbar.css";
// import logo from "./logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";

export default function Navbar({
  name,
  activeLink,
  onUpdateActiveLink,
  todos,
}) {
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
                      swal("Signed Out", "Sign Out Successful", "success");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                  todos.length = 0;
                  console.log(todos);
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
