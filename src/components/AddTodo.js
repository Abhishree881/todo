import React, { useState } from "react";
import { useCallback } from "react";
import "../styling/create.css";
import { useNavigate } from "react-router-dom";

export default function AddTodo(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [time, settime] = useState("");

  const submit = (e) => {
    e.preventDefault();
    function isInThePast(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    }
    if (!title || !desc || !time) {
      alert("Title or Description or Date can not be blank");
    } else if (isInThePast(new Date(time))) {
      alert("Date can not be in past");
    } else {
      props.onUpdateActiveLink("home");
      props.addTodo(title, desc, time);
      handleOnClick();
    }
  };
  let navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  return (
    <div className="formm">
      <div className="create">
        <h1>Create Task</h1>
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
          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="form-control"
              value={time}
              onChange={(e) => {
                settime(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}
