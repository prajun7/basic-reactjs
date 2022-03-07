import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 } from 'uuid';

// To store the todos in the browser local storage
// We are defining the key
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function TodoApp() {
    const [todos, setTodos] = useState([])

    //Using ref to get the user input, we can also use the use State hook instead
    const todoNameRef = useRef()

    // UseEffect with empty square brackets []
    // This code is used to mimic the properties of componentDidMount() in class based components. 
    // That is, it will only get invoked when the component is mounted.
    // Using useEffect to get the todo's from the local storage and adding them to todos array
    useEffect(() => {
        //gettting todos from local storage
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))  

      //if found any, setting those todos or adding them to todos array
      if (storedTodos) setTodos(storedTodos)
    }, []) 

    // UseEffect with values inside the square brackets
    // The UseEffect hook will exhibit the behaviour of an componentDidUpdate. 
    // It means every time some prop's value changes, the useEffect hook will be triggered.
    // Here everytime todos array value changes this below useEffect is triggeres
    // Using this useEffect to add inside the loacal storage each time the todos array changes
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
  
    // Fuction to check if the todo is completed or not
    // We are passing this function as a prop to TodoList component
    // We are also passing the arrays of todos as a prop to TodoList component
    function toggleTodo(id) {
      const newTodos = [...todos]   //Copying the original todos. Never modify the useState's vatiables
      const todo = newTodos.find(todo => todo.id === id)   //Finding the completed todo using id
      todo.complete = !todo.complete  //Toggling the complete state of todos
      setTodos(newTodos)  //Finally setting the todos
    }
  
    // Function to add Todo, when we press that "Add Todo" button
    function handleAddTodo(e) {
      const name = todoNameRef.current.value  //Getting the user's input
      if (name === '') return  //If the input is empty just return out of the function, do noting

      //We will get previous all the todo and set it again to the todos array
      //We need to get the previous value also, else it will replace all the previous todos 
      setTodos(prevTodos => {  //Use the setTodos method to add the todo
        return [...prevTodos, { id: v4(), name: name, complete: false}]
      })

      //Clearing the field
      //We can do this user input using the useState hook as well
      todoNameRef.current.value = null
    }
  
    //This function deletes the todos which are completed
    //Using the filer to do so
    function handleClearTodos() {
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
    }
  
    return (
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Complete</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </>
    )
  }
  
  export default TodoApp;