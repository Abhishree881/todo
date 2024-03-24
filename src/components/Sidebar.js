import React, { useState } from "react";
import Calendar from "react-calendar";
import "../assets/styling/sidebar.css";

export default function Sidebar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="sidebar">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
