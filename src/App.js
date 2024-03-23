import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const [loading, setLoading] = useState(true);
  const onComplete = (todo) => {
    SetTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    const updated = todos.filter((e) => {
      return e !== todo;
    });
    try {
      const Ref = doc(db, "users", userId);
      setDoc(Ref, { todos: updated }, { merge: true });
      console.log("updated");
    } catch (e) {
      console.log(e);
    }
  };
  const comp = (todos) => {
    const Ref = doc(db, "users", userId);
    setDoc(Ref, { todos: todos }, { merge: true });
    console.log("updated");
  };
  const addTodo = (title, desc, time) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = { sno, title, desc, time };
    // console.log(sno, " ", myTodo);
    SetTodo((todos) => {
      return [...todos, myTodo];
    });
    const updated = [...todos, myTodo];
    try {
      const Ref = doc(db, "users", userId);
      setDoc(Ref, { todos: updated }, { merge: true });
    } catch (e) {
      console.log(e);
    }
  };

  const [todos, SetTodo] = useState([]);

  const [userName, SetUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fixUserId(user.uid);
        SetUserName(user.displayName);
        const Ref = doc(db, "users", user.uid);
        getDoc(Ref).then((doc) => {
          if (doc.exists()) {
            const data = doc.data();
            SetTodo(data.todos);
            setLoading(false);
          } else {
            console.log("No such document!");
            setLoading(false);
          }
        });

        // window.location.reload();
      } else {
        SetUserName("");
        setLoading(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     return "Are you sure you want to leave?";
  //   };
  // }, []);

  const [activeLink, setActiveLink] = useState("home");
  const [userId, setUserId] = useState("");

  const fixUserId = (value) => {
    setUserId(value);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // window.location.reload();
  };
  const onSign = (value) => {
    SetUserName(value);
  };

  return loading ? (
    <div className="loader">::Loading</div>
  ) : (
    <div className="App">
      <Navbar
        name={userName}
        activeLink={activeLink}
        onUpdateActiveLink={onUpdateActiveLink}
        todos={todos}
        userId={userId}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              todos={todos}
              name={userName}
              onComplete={onComplete}
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
              userId={userId}
              comp={comp}
            />
          }
        />
        <Route
          path="signup"
          element={
            <Signup
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
              todos={todos}
              onSign={onSign}
              setUserId={fixUserId}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
              setUserId={fixUserId}
              addTodo={addTodo}
            />
          }
        />
        <Route
          path="create"
          element={
            <AddTodo
              addTodo={addTodo}
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
              userId={userId}
              todos={todos}
            />
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
