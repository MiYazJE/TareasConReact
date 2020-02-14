import React, { useRef } from 'react';

function Form({ handleForm }) {

    const inputTitle = useRef(null);
    const inputDescription = useRef(null);

    function handleFormSend() {
        const task = {
            title: inputTitle.current.value,
            description: inputDescription.current.value
        }
        handleForm(task);
    }

    return (
        <div className="form-wrap">
            <div className="form">
                <h3>Create Task</h3>
                <input ref={inputTitle} type="text" placeholder="Title..." />
                <textarea ref={inputDescription} type="text" placeholder="Description..." />
                <button onClick={handleFormSend} >Create Task</button>
            </div>
        </div>
    );
}

export default Form;
