import { validateYupSchema } from "formik";
import React, { useState,useEffect } from "react";
import { BsPatchPlus} from "react-icons/bs";
import * as yup from 'yup';
import axios from "axios";




function Form({addcontact,contact,todos,setTodos}){
    const [form, setForm]= useState({todo:''});
   const onChangeInput = (e)=>setForm({...form,[e.target.name]:e.target.value})
   
//    let schema = yup.object().shape({
//     todo: yup.string().min(3).required()
//   });

    const onSubmit = (e) => {
      e.preventDefault();
    
     
      
     


     if( form.todo === ''|| form.todo.length < 3){
        return false;
     }
     
     axios.post(`https://632258fffd698dfa290ab5b4.mockapi.io/todos`,{isCompleted:false,content:form.todo}).then((res)=>console.log(res.data))
  
     
     addcontact([...contact,form]);

     setTodos([...todos,{ content: form.todo, completed: false, id: Math.random()}]);
     console.log(todos);
     
     setForm({todo:""});
    
    };
    
    useEffect(()=>{
        axios.get(`https://632258fffd698dfa290ab5b4.mockapi.io/todos`).then((res)=>setTodos(res.data))
     },[])
  
return(
    <form onSubmit={onSubmit}>
        <div className="search">
           <input  name="todo"  placeholder="ADD..." type="text" onChange={onChangeInput} value={form.todo} ></input>
           <button  name="button" type="submit" > <BsPatchPlus/></button>
        </div>
    </form>

    )
    
};


export default Form;