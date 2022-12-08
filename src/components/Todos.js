import React from 'react'
import TodoItem from "./TodoItem";
import '../styling/Todos.css';

export default function Todos(props) {
  return (
      <div className='container'>
          <h3>Todos List</h3>
          {props.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.sno} onComplete={props.onComplete} />
          } )}
          
    </div>
  )
}
