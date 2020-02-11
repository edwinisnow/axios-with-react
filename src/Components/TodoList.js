import React from 'react'
import PropTypes from 'prop-types'

const TodoList = (props) => {
    const todoList = props.todos;
    return (<ul>
        {todoList && todoList.length && todoList.map(({ id, title, completed }) => {
            const style = completed ? 'active' : ''
            return (<li key={id} className={`todo-item ${style}`} onClick={() => props.toggleTask(id)} >{title}</li>)
        })}
    </ul>)

}

TodoList.propTypes = {
    className: PropTypes.string.isRequired,
    todo: PropTypes.array.isRequired,
    toggleTask: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
    className: 'todo-item'
}
export default TodoList;