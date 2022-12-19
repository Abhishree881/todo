import React, { useState } from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "../styling/signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Any field can not be blank");
    } else {
      // props.addUser(name, email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          //console.log(res);
          const user = res.user;
          updateProfile(user, { displayName: name });
          handleOnClick();
          window.location.reload();
        })
        .catch((err) => {
          //console.log(err);
          alert(err.message);
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
        <h1>SignUp</h1>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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
          Already have an account{" "}
          <Link classname="user" to="/login">
            Login
          </Link>
          <input type="submit" value="SignUp" />
        </form>
      </div>
    </div>
  );
}
