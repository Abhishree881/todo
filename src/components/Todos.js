import React from "react";
import TodoItem from "./TodoItem";
import "../styling/Todos.css";
import { Link } from "react-router-dom";

export default function Todos(props) {
  return (
    <div className="container">
      {props.todos.length !== 0 ? (
        <>
          <h1 className="head">Your Tasks</h1>
          {props.todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.sno}
                onComplete={props.onComplete}
              />
            );
          })}
        </>
      ) : (
        <div className="noTodo">
          <h1 className="noTodHead">
            There are no tasks to display, start by creating one now :)
          </h1>
          <button>
            <Link to="create">Create</Link>
          </button>
        </div>
      )}
    </div>
  );
}
