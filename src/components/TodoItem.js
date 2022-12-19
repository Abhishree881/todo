import React from "react";
import "../styling/Todo.css";
import swal from "sweetalert";

export default function TodoItem({ todo, onComplete }) {
  return (
    <div className="todo">
      <h1>Task : {todo.title}</h1>
      <h2>Description : {todo.desc}</h2>
      <h2>Due Date : {todo.time}</h2>
      <div
        className="completed"
        onClick={() => {
          onComplete(todo);
          swal("Good Work", "You have completed your task", "success");
        }}
      >
        Complete
      </div>
    </div>
  );
}
