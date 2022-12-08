import Todos from "./Todos";
import React from "react";

export default function Home(props) {
  return (
    <div>
      <Todos todos={props.todos} onComplete={props.onComplete} />;
    </div>
  );
}
