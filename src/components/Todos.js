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
          <h1 className="noTodoHead">
            {props.name
              ? "There are no tasks to display, start by creating one now :)"
              : "There are no tasks to display, start by logging in now :)"}
          </h1>
          {props.name ? (
            <Link
              onClick={() => props.onUpdateActiveLink("create")}
              to="create"
            >
              <button className="button">Create</button>
            </Link>
          ) : (
            <Link to="signup" onClick={() => props.onUpdateActiveLink("login")}>
              <button className="button">SignUp</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
