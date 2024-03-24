import React from "react";
import "../assets/styling/Navbar.css";
// import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { TbBuildingStore } from "react-icons/tb";
import { BsInfoCircleFill } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";

export default function Navbar({ name, todos, userId }) {
  let navigate = useNavigate();
  const activeLink = window.location.pathname;
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const nameArray = name.split(" ");
  let renderedName;
  if (nameArray[0].length > 5) {
    renderedName = <span>{nameArray[0]}</span>;
  } else {
    renderedName = (
      <span>
        {nameArray[0]} {nameArray[1]}
      </span>
    );
  }

  const handleSignoutClick = () => {
    const auth = getAuth();
    // try {
    //   const Ref = doc(db, "users", userId);
    //   setDoc(Ref, { todos: todos }, { merge: true });
    //   console.log("updated");
    // } catch (e) {
    //   console.log(e);
    // }
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        swal("Signed Out", "Sign Out Successful", "success");
      })
      .catch((error) => {
        // An error happened.
      });
    todos.length = 0;
    handleOnClick();
    console.log(todos);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-main">
          <div className="img">
            {/* <img src={logo} alt="logo" /> */}
            <LuListTodo />
            Todo App
          </div>
          <div className="login">
            {name ? (
              <div className="nav">
                <div className="name" onClick={() => handleSignoutClick()}>
                  <IoPersonSharp />
                  {renderedName}
                </div>
                <div className="hover">
                  <PiSignOutBold />
                  Signout
                </div>
              </div>
            ) : (
              <Link
                className={
                  activeLink === "/login" || activeLink === "/signup"
                    ? "a active"
                    : "a"
                }
                to="signup"
              >
                Login | SignUp
              </Link>
            )}
          </div>
          <div className="nav">
            <Link className={activeLink === "/" ? "a active" : "a"} to="/">
              <FaHome />
              Home
            </Link>
          </div>
          <div className="nav">
            <Link
              className={activeLink === "/create" ? "a active" : "a"}
              to={name ? "create" : "login"}
            >
              <TbBuildingStore />
              Create
            </Link>
          </div>
          <div className="nav">
            <Link
              className={activeLink === "/about" ? "a active" : "a"}
              to="about"
            >
              <BsInfoCircleFill />
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
