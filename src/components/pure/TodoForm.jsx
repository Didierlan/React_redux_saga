import React, { useRef} from 'react';
import PropTypes from 'prop-types';


const TodoForm = ({submit}) => {

    const newTask = useRef()

    return (
        <div>
        <h2>Create your TODOs</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            submit(newTask.current.value);
            newTask.current.value = '';
        }}>

        <input type='text' ref={newTask}></input>
        <button type='submit'> Create TODOs </button>

        </form>
            
        </div>
    );
};


TodoForm.propTypes = {
    submit: PropTypes.func.isRequired,

};


export default TodoForm;
