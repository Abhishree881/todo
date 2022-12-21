import React from "react";
import "../styling/Navbar.css";
// import logo from "./logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Navbar({
  name,
  activeLink,
  onUpdateActiveLink,
  todos,
  userId,
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
                  try {
                    const Ref = doc(db, "users", userId);
                    setDoc(Ref, { todos: todos }, { merge: true });
                    console.log("updated");
                  } catch (e) {
                    console.log(e);
                  }
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
              <div className="hover">Save and Signout</div>
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
