import React, { useState } from "react";
import { BsPatchCheck ,BsPatchMinus,BsPencilSquare} from "react-icons/bs";
import axios from "axios";


function Todo({text,setTodos,todos,todo}){
    const deleteHandler =(e)=>{
        setTodos(todos.filter((el)=>el.id !== todo.id))
        // console.log(todo.id);
        
        axios.delete(`https://632258fffd698dfa290ab5b4.mockapi.io/todos/${todo.id}`).then(
            res => console.log('deleted',todo.id)
        )
        // useEffect(()=>{
        //     axios.delete(`https://632258fffd698dfa290ab5b4.mockapi.io/todos/${todo.id}`).then((res)=>setTodos(res))
        //     )
        //  },[])
      

    }


    const completeHandler =()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{...item,isCompleted : !item.isCompleted
                }
            } 
            return item;
        }));
        console.log(todo.id);
        axios.put(`https://632258fffd698dfa290ab5b4.mockapi.io/todos/${todo.id}`,{isCompleted:!todo.isCompleted}).then((res)=>console.log(todo.id))
    }   
     const [editable,setEditable]=useState(false);
    const [content,setContent]=useState("")

     const HandlerEdit=(event)=>{
        setContent(event.target.value);
        axios.put(`https://632258fffd698dfa290ab5b4.mockapi.io/todos/${todo.id}`,{content:event.target.value}).then((res)=>console.log(todo.id))
    }
    return( 
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
        <button  className="complete-btn"  onClick={completeHandler}><BsPatchCheck/></button>
        
        <li>{editable ? <input className={`edit-input ${todo.isCompleted ? "completed" : ""}`} value={content} onChange={HandlerEdit}></input> : text}</li>
        <button className="trash-btn" onClick={deleteHandler}><BsPatchMinus/></button>
        <button className="edit-btn" value={todos} onClick={()=> setEditable(true)}><BsPencilSquare/></button>
    </div>)
};
export default Todo;