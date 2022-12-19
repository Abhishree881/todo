import React, { useState } from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styling/signup.css";
import swal from "sweetalert";

export default function Signup({ activeLink, onUpdateActiveLink }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // alert("Any field can not be blank");
      swal("Blank Error", "Any field can not be blank", "error");
    } else {
      //   props.checkUser(email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          //console.log(res);
          const user = res.user;
          console.log(user.displayName);
          handleOnClick();
          onUpdateActiveLink("home");
          // window.location.reload();
          swal("Logged In", "You are now succesfully Logged In", "success");
        })
        .catch((err) => {
          //console.log(err);
          // alert(err.message);
          swal("Oops", err.message, "error");
        });
    }
  };
  let navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  return (
    <div className="formm">
      <div className="create">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="abc@xyz.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          Don't have an acoount?{" "}
          <Link className="user" to="/signup">
            Signup
          </Link>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
