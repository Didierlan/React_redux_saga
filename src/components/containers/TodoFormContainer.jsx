import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForm from '../pure/TodoForm'


//Aca no es nesesario ya que solo envimos datos y despachamos un evento
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }

}


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer; 