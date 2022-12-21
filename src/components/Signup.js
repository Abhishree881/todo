import React, { useState } from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "../styling/signup.css";
import swal from "sweetalert";
import { db } from "../firebase";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

export default function Signup({
  activeLink,
  onUpdateActiveLink,
  todos,
  onSign,
  setUserId,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      // alert("Any field can not be blank");
      swal("Blank Error", "Any field can not be blank", "error");
    } else {
      // props.addUser(name, email, password);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          //console.log(res);
          const user = res?.user;
          setUserId(user.uid);
          // const db = getDatabase();
          updateProfile(user, { displayName: name });
          handleOnClick();
          onUpdateActiveLink("home");
          onSign(name);
          // window.location.reload();
          swal("Signed Up", "You are now succesfully Logged In", "success");
          // console.log(user?.uid);
          //
          try {
            setDoc(doc(db, "users", user.uid), {
              name: name,
            });
            console.log(user.uid, " created ");
          } catch (e) {
            console.log(e);
          }
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
          <Link className="user" to="/login">
            Login
          </Link>
          <input type="submit" value="SignUp" />
        </form>
      </div>
    </div>
  );
}
