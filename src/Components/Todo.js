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
            setTodos([...todos, {list: todo, id: Date.now()}]);
            //converted todo into {list:todo,id} for deletion purpose
            console.log(todos);
            // to clear search bar
            setTodo('');
            
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

        const onDelete = (id)=>{
            setTodos(todos.filter((to)=> to.id !== id))
        }

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
                    {todos.map((to)=>(
                            
                            <li className='list-items'>
                                <div className='list-items-names'>{to.list}</div>
                                <span>
                                    <IoMdDoneAll className='list-items-icons' id='complete' title='Complete'/>
                                    <FiEdit  className='list-items-icons' id='edit' title='Edit'/>
                                    <MdDelete  className='list-items-icons' id='delete' title='Delete'
                                        onClick={()=>onDelete(to.id)}
                                    />
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