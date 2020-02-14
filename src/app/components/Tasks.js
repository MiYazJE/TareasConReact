import React from 'react';
import Task from './Task';

function Tasks({ tasks }) {
    return (
        <div className="wrap-tasks">
            {!tasks || Object.keys(tasks).length == 0 ?
                <div>
                    <h1>No tasks to show</h1>
                </div>
                : tasks.map(task => {
                    return (
                        <React.Fragment key={task._id}>
                            <Task task={task} />
                            <hr />
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}

export default Tasks;
