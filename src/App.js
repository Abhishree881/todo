import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import Home from "./components/Home";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const onComplete = (todo) => {
    SetTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno = 0;
    if (todos.length == 0) {
      let sno = 1;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    console.log(sno);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    SetTodo([...todos, myTodo]);
    console.log(todos);
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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home todos={todos} onComplete={onComplete} />}
        />
        <Route path="create" element={<AddTodo addTodo={addTodo} />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
