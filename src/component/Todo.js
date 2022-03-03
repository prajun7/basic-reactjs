import React, { useState } from 'react';
import { v4 } from 'uuid';

function Todo(){
    const [task, setTask] = useState("");
    const [allTask,setAllTask] = useState([]);
    const[completeTask, setCompleteTask] = useState(false);

    function addTask(e){
       // e.preventDefault(); No need
       const taskInput = {
           name : task,
           complete : completeTask
       }
        setAllTask([...allTask,taskInput]);
        setTask("");
    }

    const toggleComplete = () => {
        setCompleteTask(prevStatus => !prevStatus);
    }

    let styleTask = "";
    // completeTask ? styleTask = "line-through" : "";
    if (completeTask){
        styleTask = "line-through"
    }else{
        styleTask = ""
    }

    const style = {
        textDecoration: styleTask
    }



    return(
        <>
            <h1>Todo</h1>
            <form>
                <label>Task Name:</label>
                <input
                required
                value = {task}
                onChange={(e) => setTask(e.target.value)}
                >
                </input>
            </form>
            <button onClick = {addTask}>Add Task</button>

            {allTask.map(taskItem => (
                <div key = {v4()}>
                    <p onClick ={toggleComplete} style={style}>{taskItem.name}</p>
                </div>
            ))} 
        </>
    )
}

export default Todo;