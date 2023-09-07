import React from 'react';
import './Todo.css';
import { useState , useRef , useEffect } from 'react';
// icons
import { IoMdDoneAll } from "react-icons/io";
import {FiEdit} from "react-icons/fi";
import { MdDelete} from "react-icons/md";

function Todo(){
        const[todo, setTodo] = useState('') //read data
        const[todos, setTodos] = useState([]) //storing or updating todos
        //to read and output todos 
        const addTodo = ()=>{
            setTodos([...todos, todo])
            console.log(todos)
            // to clear search bar
            setTodo('')
            
        }
        const handleSubmit = (e)=>{
            e.preventDefault()
        }

        // To make it focus .use hook ,direct access DOM
        const inputRef = useRef('null')

        //load application , first call function will be useEffect , then remaining -> USEEFFECT refer hooks tutorial
        //dependency control to avoid loop, initial loading only focus!
        useEffect(()=>{
            inputRef.current.focus()
        })

    return(
        <div className='container'>
            <h2>TODO !</h2>
            <form className='form-group' onSubmit={handleSubmit}>
                <input type="text" value={todo} ref={inputRef} placeholder='Enter your Todo' className='form-control box'  onChange={(event)=>setTodo(event.target.value)}></input>
                {/* button */}
                <button onClick={addTodo} className='box'>ADD</button> 
            </form>
            <div className='list'>
                <ul>
                    {todos.map((todo)=>(
                            
                            <li  className='list-icons'>{todo}
                                    <span>
                                        <IoMdDoneAll/>
                                        <FiEdit />
                                        <MdDelete />
                                    </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Todo