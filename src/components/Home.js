import Todos from "./Todos";
import React, { useState } from "react";

export default function Home() {
  const onComplete = (todo) => {
    console.log("i am todo of ", todo);
    SetTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, SetTodo] = useState([
    {
      sno: 1,
      title: "Complete React",
      desc: "You need to complete react with alteast one project",
    },
    {
      sno: 2,
      title: "Complete node.js",
      desc: "You need to complete node for backend",
    },
    {
      sno: 3,
      title: "Complete mongodb",
      desc: "You need to complete mongodb for background",
    },
  ]);
  return (
    <div>
      hello
      <Todos todos={todos} onComplete={onComplete} />;
    </div>
  );
}
