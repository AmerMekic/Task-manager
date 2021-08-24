import React, { useState } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import TaskForm from './TaskForm';

function Task({tasks, removeTask, editTask, completeTask}) {
    const [edit, setEdit] = useState({
        id: null,
        text: ''
    })

    const handleEdit = value => {
        editTask(edit.id, value);
        setEdit({
            id: null,
            text: ''
        })
    }
    if(edit.id){
        return <TaskForm edit={edit} onSubmit={handleEdit}/>
    }

    return tasks.map( (task, index) => 
    <div key={index} className={(task.isComplete ? 'task-row complete' : 'task-row')}>
        <div className='task-text' 
            key={task.id}
            onClick ={() => completeTask(task.id)}>
            {task.text}
        </div>
        <div className='icons'>
        <AiOutlineCloseSquare title='Delete task' className='delete-icon' onClick={() => removeTask(task.id)} />
        <FiEdit title='Edit task' className='edit-icon' onClick={() => setEdit({id: task.id, text: task.text})}/>
        </div>
    </div>
    )
}

export default Task
