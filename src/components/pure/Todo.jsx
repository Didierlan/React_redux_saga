import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ Click, completed, text, id }) => {
    return (
        <li onClick={Click} style={
            { 
                textDecoration: completed ? 'line-through' : 'none',
                textDecorationColor: completed ? 'green' : 'black',
                color: completed ? 'green' : 'black'

            }
        }>

        { id } - { text }

        </li>
    );
}

Todo.protoType =  {
    click: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Todo;
