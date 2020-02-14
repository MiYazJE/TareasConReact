import React, { useRef } from 'react';
import { MdCreate } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';

function Task({ task, deleteTask }) {

    const { title, description, _id } = task;

    return (
        <div key={_id} className="task">
            <p className="title">
                {title}
            </p>
            <p className="description">
                {description}
            </p>
            <button className="btnEdit">
                <MdCreate />
            </button>
            <button onClick={() => deleteTask({ _id })} className="btnRemove">
                <TiDeleteOutline />
            </button>
        </div>
    );
}

export default Task;