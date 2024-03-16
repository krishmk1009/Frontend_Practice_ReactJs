import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(-1)

    const handleDelete=(index)=>{
        const udpatedTodos  = todos.filter((todo,id)=>id!=index);
        setTodos(udpatedTodos)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setTodos( [...todos , task]);
        setTask("");
    }
    return (
        <div>Todo
            <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}  />
            <button onClick={handleSubmit}>Add task</button>
            {todos.map((todo, index) => {
                return(

                <>
                    <h3> {todo}</h3>
                    <button onClick={()=>handleDelete(index)} >Delete</button>
                </>
                )
            })}

        </div>
    )
}

export default Todo
