import React, { useState } from 'react'
import Task from './Task';



const Todo = ()=>{
    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event)=>{
        setNewTask(event.target.value);
        console.log(newTask);
    }

    const addTask = ()=>{
        if (newTask === "") {
            alert("Please enter a task to continue.")
        } else {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        }
        setTodoList([...todoList, task]);
        setNewTask("")
    }
    }


    const delTask = (id)=>{
        setTodoList(todoList.filter((task)=>task.id !== id));
    } 


    const taskCompleted = (id)=>{
        setTodoList(
            todoList.map((task)=>{
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }

                else {
                    return task;
                }
            })

            );

    }
    
    
    

    return(
        <>
        <div className='the-main'>

        <div className='text-center d-flex flex-column justify-content-center py-4'>
        <h3 className='fw-bold fs-1 text-white p-0 m-0'>Track your TASKS.</h3>
        <p className='fs-6 fw-regular text-white p-0'>Write, Track, & Manage your goals to skyrocket your productivity.</p>
        <div className='py-3 d-flex align-items-center justify-content-center'>
         <input type="name" className="form-control-lg px-3 mx-2 add-task-input" placeholder='Enter the Task...' onChange={handleChange} style={{"width":"500px"}} value={newTask}/>
         <button className='btn btn-add btn-color' onClick={addTask}><i class="fa-solid fa-plus"></i></button>
        </div>
        </div>
        <div className='todolist my-3'>
            {todoList.map((task)=>{
                return(
                    <Task taskName={task.taskName} id={task.id} delTask={delTask} completed={task.completed} taskCompleted={taskCompleted}/>

                )
            })}
        </div>
        </div>
        </>
    )
}

export default Todo;
