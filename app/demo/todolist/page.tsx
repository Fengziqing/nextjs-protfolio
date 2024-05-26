'use client'
import React, { ChangeEvent, useState } from 'react'
import { BacktoDemoButtom } from '../BacktoDemoButtom'

interface task {
    name: string,
    id: number,
    isDone: boolean,
    isEditing: boolean
}
const TodoList = () => {
    const [taskName, setTaskName] = useState<string>('');
    const [task, setTask] = useState<task[]>([]);
    const [editValue, setEditValue] = useState<string>('');
    const [wrongMessage, setWrongMessage] = useState<string>('');

    function handleTaskNameChange(e: ChangeEvent<HTMLInputElement>) {
        setTaskName(e.target.value);
    }
    function addTask() {
        if (taskName.length === 0) {
            setWrongMessage('task name cannot be null');
            setTimeout(() => {
                setWrongMessage('');
            }, 5000);
            return;
        }
        const newTask = {
            'name': taskName,
            'id': Math.random(),
            'isDone': false,
            'isEditing': false
        };
        setTask(task.concat(newTask));
        setTaskName('');
    }
    function handleClickDone(targetId: number) {
        const newTask = task.map(item => item.id === targetId ? { ...item, isDone: true } : item);
        setTask(newTask);
    }
    function handleCleanAllDone() {
        const newTask = task.filter(item => item.isDone === false)
        setTask(newTask);
    }
    function handleClickEdit(targetId: number) {
        setTask(task.map(item => item.id === targetId ? { ...item, isEditing: true } : item));
    }
    function handleEditValue(e: ChangeEvent<HTMLInputElement>) {
        setEditValue(e.target.value);

    }
    function saveChange(targetId: number) {
        if (editValue.length === 0) {
            setWrongMessage('task name cannot be null');
            setTimeout(() => {
                setWrongMessage('');
            }, 5000);
            return;
        }
        const newTask = task.map(item => item.id === targetId ? { ...item, name: editValue, isDone: false, isEditing: false } : item);
        setTask(newTask);
    }
    function cancelChange(targetId: number) {
        setTask(task.map(item => item.id === targetId ? { ...item, isEditing: false } : item));
    }

    return (
        <div className=" block mx-12 py-12 px-2 justify-center min-h-[100vh]">
            <BacktoDemoButtom/>
            <div className='flex content-center'>
                <input className='input border-solid border-2 border-gray-300' type='text' value={taskName} onChange={handleTaskNameChange}></input>
                <button className='btn btn-neutral ml-2' onClick={addTask}>ADD</button>
            </div>
            <p className=' text-red-500 italic my-2'>{wrongMessage}</p>
            <p className=' font-bold md:text-2xl text-xl my-6 dark:text-white'>To Do List</p>
            <p className=' text-gray-400 italic md:text-sm text-xs my-5'>*Please notice that this To-Do List will not save any data from you.*</p>
            <ul className=' font-bold text-lg'>
                {
                    task.map(item => {
                        return (
                            <li className=' flex my-3 break-words' key={item.id}>
                                {item.isEditing
                                    ?
                                    <>
                                        <input className=' input input-sm border-2 border-solid border-gray-300 text-sm font-normal' type='text' value={editValue} onChange={handleEditValue}></input>
                                        <button className='btn btn-active ml-3 btn-sm' onClick={() => cancelChange(item.id)}>Cancel</button>
                                        <button className='btn btn-neutral ml-3 btn-sm' onClick={() => saveChange(item.id)}>Save</button>
                                    </>
                                    :
                                    <>
                                        <p style={{ textDecoration: item.isDone ? 'line-through' : 'none' }} className='dark:text-white'>{item.name}</p>
                                        <button className='btn btn-success btn-sm ml-2' onClick={() => handleClickDone(item.id)}>Done</button>
                                        <button className='btn btn-outline btn-sm ml-2' onClick={() => handleClickEdit(item.id)}>Edit</button>
                                    </>}
                            </li>
                        )
                    })
                }
            </ul>
            <button className='btn btn-success my-6' onClick={handleCleanAllDone}>Clean All Done</button>
        </div>
    )
}

export default TodoList