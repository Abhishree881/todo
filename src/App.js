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

function App() {
  const onComplete = (todo) => {
    SetTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc, time) => {
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time: time,
    };
    SetTodo([...todos, myTodo]);
    //console.log(todos);
  };

  const [todos, SetTodo] = useState("");
  //   [
  //   {
  //     sno: 1,
  //     title: "Complete React",
  //     desc: "You need to complete react with alteast one project",
  //   },
  //   {
  //     sno: 2,
  //     title: "Complete node.js",
  //     desc: "You need to complete node for backend",
  //   },
  //   {
  //     sno: 3,
  //     title: "Complete mongodb",
  //     desc: "You need to complete mongodb for background",
  //   },
  // ]);

  const [userName, SetUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        SetUserName(user.displayName);
        // window.location.reload();
      } else SetUserName("");
    });
  }, []);

  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // window.location.reload();
  };

  return (
    <div className="App">
      <Navbar
        name={userName}
        activeLink={activeLink}
        onUpdateActiveLink={onUpdateActiveLink}
        todos={todos}
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
            />
          }
        />
        <Route
          path="signup"
          element={
            <Signup
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              activeLink={activeLink}
              onUpdateActiveLink={onUpdateActiveLink}
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
