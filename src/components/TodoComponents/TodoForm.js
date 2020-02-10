import React from 'react';

const ToDoForm = props => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="newItem"
                value={props.newItem}
                onChange={props.handleChanges}
                />
                <button>Add</button>
        </form>
    );
};


export default ToDoForm;