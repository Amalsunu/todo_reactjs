import React from 'react'
import './Todo.css'

function Todo(){
    return(
        <div className='container'>
            <h2>Todo App</h2>
            <form className='form-group'>
                <input type="text" placeholder='Enter your Todo' className='form-control'></input>
                <button>ADD</button>
            </form>
            <div className='list'>
                <ul>
                    <li className='form-control'>First</li>
                    <li className='form-control'>Second</li>
                    <li className='form-control'>Third</li>
                </ul>
            </div>
        </div>
    )
}

export default Todo