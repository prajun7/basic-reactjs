import React, { useState } from 'react';
import { v4 } from 'uuid';

function Todo(){
    const [task, setTask] = useState("");
    const [allTask,setAllTask] = useState([]);

    function addTask(e){
       // e.preventDefault(); No need
        setAllTask([...allTask,taskInput]);
        setTask("");
    }l

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
                    <>{taskItem.name}</>
                </div>
            ))} 
        </>
    )
}

export default Todo;