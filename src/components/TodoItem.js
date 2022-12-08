import React from "react";
import "../styling/Todo.css";

export default function TodoItem({ todo, onComplete }) {
  return (
    <div className="todo">
      <h4>{todo.title}</h4>
      <h5>{todo.desc}</h5>
      <div className="completed" onClick={() => onComplete(todo)}>
        Complete
      </div>
    </div>
  );
}
