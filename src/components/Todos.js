import React from "react";
import TodoItem from "./TodoItem";
import "../styling/Todos.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import swal from "sweetalert";
import { async } from "@firebase/util";

export default function Todos(props) {
  const add = async () => {
    const Ref = doc(db, "users", props.userId);
    await setDoc(Ref, { todos: props.todos }, { merge: true });
    console.log("updated");
  };
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
                    try {
                      const Ref = doc(db, "users", props.userId);
                      setDoc(Ref, { todos: props.todos }, { merge: true });
                      console.log("updated");
                    } catch (e) {
                      console.log(e);
                    }
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
                  {`${props.name} Save and Signout`}{" "}
                </div>
                <div className="mobilehover">Click to Save and Signout</div>
              </>
            ) : (
              ""
            )}
          </div>
          {props.todos.map((todo) => {
            // console.log("hello", todo);
            add();
            return (
              <div key={todo.sno}>
                <TodoItem todo={todo} onComplete={props.onComplete} />
              </div>
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
