import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import logo from "./logo.jpg";
import "../styling/sidebar.css";

export default function Sidebar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="sidebar">
      <Calendar onChange={onChange} value={value} />
      <div className="test">{/* <img src={logo} /> */}</div>
    </div>
  );
}
