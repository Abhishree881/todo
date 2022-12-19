import React from "react";
import "../styling/Todo.css";

export default function TodoItem({ todo, onComplete }) {
  return (
    <div className="todo">
      <h1>{todo.title}</h1>
      <h2>{todo.desc}</h2>
      <div className="completed" onClick={() => onComplete(todo)}>
        Complete
      </div>
    </div>
  );
}
