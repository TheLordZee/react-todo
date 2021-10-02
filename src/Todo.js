import React from "react"
import "./Todo.css"

const Todo = ({id, text, removeTodo}) => (
    <div id={id} className="Todo">
        <p className="Todo-text">{text}</p>
        <button className="Todo-btn" onClick={removeTodo}>X</button>
    </div>
) 

export default Todo;