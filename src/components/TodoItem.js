import React from "react";
import "../styling/Todo.css";

export default function TodoItem({ todo, onComplete }) {
  return (
    <div className="todo">
      <h1>Task : {todo.title}</h1>
      <h2>Description : {todo.desc}</h2>
      <h2>Due Date : {todo.time}</h2>
      <div className="completed" onClick={() => onComplete(todo)}>
        Complete
      </div>
    </div>
  );
}
