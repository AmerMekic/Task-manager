import React, { useState, useEffect } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

function TasksList() {
    const [tasks, setTasks] = useState(() =>{
        const savedTasks = localStorage.getItem("tasks")
        
        if(savedTasks){
            return JSON.parse(savedTasks)
        }
        else{
            return [];
        }
    })

    useEffect(() => {

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks])

    const addTask = task =>{
        if(task.text.trim() === ''){
            return alert("Task can't be empty!")
        }
        else{
            setTasks([task, ...tasks])
        }
        
    }

    const removeTask = id => {
        console.log(id);
        setTasks([...tasks].filter(task => task.id !== id));
    }
    
    const editTask = (task, newTask) =>{
        setTasks(prev => prev.map(item => (item.id === task ? newTask : item)))
    }

    const completeTask = (id) => {
        
        const updated = tasks.map(task => {
            if(task.id === id){
                task.isComplete = !task.isComplete         
        }
        return task
        })
        setTasks(updated)
    }

    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <Task tasks={tasks} removeTask={removeTask} editTask={editTask} completeTask={completeTask}/>
        </div>
        
    )

}

export default TasksList
