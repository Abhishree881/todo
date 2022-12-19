import React from "react";
import TodoItem from "./TodoItem";
import "../styling/Todos.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";

export default function Todos(props) {
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
                  {`${props.name}`}{" "}
                </div>
                <div className="mobilehover">Click to Signout</div>
              </>
            ) : (
              ""
            )}
          </div>
          {props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onComplete={props.onComplete}
                />
              </>
            );
          })}
          <Link onClick={() => props.onUpdateActiveLink("create")} to="create">
            <button className="button">Create</button>
          </Link>
        </div>
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
