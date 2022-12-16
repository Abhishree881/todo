import React, { useState } from "react";
import { useCallback } from "react";
import "../styling/create.css";
import { useNavigate } from "react-router-dom";

export default function AddTodo(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can not be blank");
    } else {
      props.addTodo(title, desc);
      handleOnClick();
    }
  };
  let navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  return (
    <div className="form">
      <div className="create">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title of your task"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Briefly describe your task"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}
