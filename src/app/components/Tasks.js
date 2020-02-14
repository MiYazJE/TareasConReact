import React from 'react';
import Task from './Task';

function Tasks({ tasks, deleteTask }) {

    return (
        <div className="wrap-tasks">
            {!tasks || Object.keys(tasks).length == 0 ?
                <div>
                    <h1>No tasks to show</h1>
                </div>
                : tasks.map(task => {
                    return (
                        <Task key={task._id} task={task} deleteTask={deleteTask} />
                    )
                })
            }
        </div>
    );
}

export default Tasks;
