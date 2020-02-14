import React, { useState, useEffect } from "react";
import Tasks from './components/Tasks';
import Form from './components/Form';
import './App.css';


function App() {

    const API = 'http://localhost:3000';
    const [tasks, setTasks] = useState(null);

    async function fetchTasks() {
        const res = await fetch(`${API}/api`);
        const tasks = await res.json();
        setTasks(tasks);
    }

    async function deleteTask(_id) {
        const url = `${API}/api/deleteTask`;
        const init = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(_id)
        }
        const request = new Request(url, init);
        await fetch(request);
    }

    function handleDeleteTask(id) {
        deleteTask(id);
        fetchTasks();
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    async function createTask(task) {
        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        }
        const request = new Request(`${API}/api/createTask`, init);
        const res = await fetch(request);
        const data = await res.json();
        setTasks(tasks.concat(data));
    }

    function handleForm(task) {
        createTask(task);
    }

    return (
        <React.Fragment>
            <Form handleForm={handleForm} />
            <Tasks deleteTask={handleDeleteTask} tasks={tasks} />
        </React.Fragment>
    )
}

export default App;