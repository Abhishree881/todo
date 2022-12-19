// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import Todos from "./Todos";
import React from "react";

export default function Home(props) {
  return (
    <div className="main">
      <Todos
        todos={props.todos}
        name={props.name}
        onComplete={props.onComplete}
      />
    </div>
  );
}
