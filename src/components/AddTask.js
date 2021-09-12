import React from 'react'
import { useState } from 'react'

const AddTask = (props) => {
    const [todo, setTodo] = useState({ title: '', description: '' })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        // data.addTodo(todo)
        // setTodos(data.getTodos())

        setTodo({ title: '', description: '' })
    }
    return (
    <div className='row'>
        <pre>{JSON.stringify(todo)}</pre>
        <form className="col s12" onSubmit={onSubmitHandler}>
        <div className="row">
        <div className="input-field col s6">
            <i className="material-icons prefix">title</i>
            <input id="icon_prefix" value={todo.title} type="text" onChange={e=>{setTodo({...todo,title:e.target.value})}} className="validate" />
            <label htmlFor="icon_prefix">Title</label>
        </div>
        <div className="input-field col s6">
            <i className="material-icons prefix">description</i>
            <input id="icon_telephone" value={todo.description} type="text" onChange={e => { setTodo({ ...todo, description
                : e.target.value }) }} className="validate" />
            <label htmlFor="icon_telephone">Description</label>
        </div>
        </div>
        <div className="row right-align">
            <button className="waves-effect waves-light btn">Add Task</button>
        </div>
        </form>
    </div>
    )
}

export default AddTask
