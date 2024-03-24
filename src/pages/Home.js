// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import Todos from "../components/Todos";
import React from "react";

export default function Home(props) {
  return (
    <div className="main">
      <Todos
        todos={props.todos}
        name={props.name}
        onComplete={props.onComplete}
        activeLink={props.activeLink}
        onUpdateActiveLink={props.onUpdateActiveLink}
        userId={props.userId}
      />
    </div>
  );
}
