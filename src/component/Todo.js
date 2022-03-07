import React from 'react'

// This component is getting the single todo and toggleTodo function as a
// props from the TodoList component

// This compnent represents the single todo, not the array

export default function Todo({ todo, toggleTodo }) {

//We are calling the toggleTodo function with the id of the todo
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}