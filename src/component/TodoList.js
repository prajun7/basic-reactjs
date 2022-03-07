import React from 'react'
import Todo from './Todo'

// This component is getting the todos' array and toggleTodo's function as a
// props from the TodoApp component

// This component uses map and returns each of the todo and passes it to
// another compnent called Todo

//This compnent takes array or Todos and passes each todo to the Todo Compnent
export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}