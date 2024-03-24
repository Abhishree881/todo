import React from "react";
import "../assets/styling/Todo.css";
import swal from "sweetalert";

export default function TodoItem({ todo, onComplete }) {
  return (
    <div className="todo">
      <div>
        <h4>Task : {todo.title}</h4>
        <h5>Description : {todo.desc}</h5>
        <h5>Due Date : {todo.time}</h5>
      </div>
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
