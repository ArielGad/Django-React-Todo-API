import React from 'react';
import axios from 'axios';


const Todos = ({todos}) => {

    const deleteTodo = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/${id}`)
    }

    const noTodos = <p className="center">Nothing left :)</p>
    const showTodos = () => {
        return todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.id} </span><span title={todo.description}>{todo.title}</span>
                    <i style={{margin: '10px'}} onClick={() =>
                    {deleteTodo(todo.id)}} className="tiny material-icons">delete</i>

                </div>
            )
        })
    }

    const todoList = todos.length ? (showTodos()): (noTodos);

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;