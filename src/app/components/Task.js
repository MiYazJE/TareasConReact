import React from 'react';

function Task({ tasks }) {

    console.log(tasks)
    return (
        <div className="wrap-tasks">
            {!tasks || Object.keys(tasks).length == 0 ? 
                <div>
                    <h1>No tasks to show</h1>
                </div>
                : tasks.map(task => (
                    <div className="task" key={task._id}>
                        <p className="title">{task.title}</p>
                        <p className="description">{task.description}</p>
                    </div>
                ))}
        </div>
    );
}

export default Task;
