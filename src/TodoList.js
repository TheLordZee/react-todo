import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css"

const TodoList = () => {
    const INITIAL_STATE = {
        todoText: ""
    }
    const [list, setList] = useState([]);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const addTodo = (todoData) => {
        const todo = {...todoData, id:uuid()}
        setList(td => [...td, todo])
    }

    const removeTodo = (id) => {
        let newList = [...list]
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id){
                newList.splice(i,1)
            }
        }
        setList(newList)
    }

    const onChange = e => {
        let {value} = e.target;
        setFormData({todoText: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(formData);
        
        setFormData(INITIAL_STATE);
    }

    return(
        <div className="TodoList">
            <TodoForm 
                handleSubmit={handleSubmit} 
                onChange={onChange} 
                formData={formData}
            />
            <ul className="TodoList-todos">
                {list.map(td =>
                    <Todo key={td.id} text={td.todoText} removeTodo={() => removeTodo(td.id)}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList;