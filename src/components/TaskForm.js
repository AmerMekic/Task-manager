import React, { useState } from 'react'

function TaskForm(props) {
    const [input, setInput] = useState((props.edit ? props.edit.text : ''))

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    if(props.edit){
        return (
            <form onSubmit={handleSubmit}
            className='task-form'>
            <input
            className='task-edit-input' 
            type='text' 
            placeholder='What is your task?'
            value={input} 
            onChange={handleChange}/>
            <button className='task-btn-update'>Update</button>
        </form>)
    }
    else {
        return (
            <form className='task-form' onSubmit={handleSubmit}>
                <input
                className='task-input'
                type='text' 
                placeholder='What is your task?'
                value={input} 
                onChange={handleChange}/>
                <button className='task-btn'>Add a task</button>
            </form>
        )
    }
}

export default TaskForm
