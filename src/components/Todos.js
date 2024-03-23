import React from "react";
import TodoItem from "./TodoItem";
import "../styling/Todos.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";

export default function Todos(props) {
  const nameArray = props.name.split(" ");
  let renderedName;
  if (nameArray[0].length > 5) {
    renderedName = <span>{nameArray[0]}</span>;
  } else {
    renderedName = (
      <span>
        {nameArray[0]} {nameArray[1]}
      </span>
    );
  }
  return (
    <div className="container">
      {props.todos.length !== 0 ? (
        <div className="mobile">
          <h1 className="head">Your Tasks</h1>
          <div className="mobilesign">
            {props.name ? (
              <>
                <div
                  className="mobilename"
                  onClick={() => {
                    const auth = getAuth();
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                        swal("Signed Out", "Sign Out Successful", "success");
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                    props.todos.length = 0;
                    // console.log(todos);
                  }}
                >
                  {renderedName} {" (Signout)"}
                </div>
                <div className="mobilehover">Click to Save and Signout</div>
              </>
            ) : (
              ""
            )}
          </div>
          {props.todos.map((todo) => {
            // console.log("hello", todo)
            return (
              <div key={todo.sno}>
                <TodoItem todo={todo} onComplete={props.onComplete} />
              </div>
            );
          })}

          <Link onClick={() => props.onUpdateActiveLink("create")} to="create">
            <button className="button">Create new task</button>
          </Link>
        </div>
      ) : (
        <div className="noTodo">
          <div className="noTodoBody">
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
              <Link
                to="signup"
                onClick={() => props.onUpdateActiveLink("login")}
              >
                <button className="button">SignUp</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
