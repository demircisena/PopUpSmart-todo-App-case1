import React, { useEffect, useState } from "react";
import Form  from "./Form"
import List from "./List";
import "./styles.css";
import { BsPatchCheck} from "react-icons/bs";
import axios from "axios";


// https://632258fffd698dfa290ab5b4.mockapi.io/

// const mocApi=(method,id,data)=>{
//    axios({
//       method: 'get',
//       url:`https://632258fffd698dfa290ab5b4.mockapi.io/todos`,
//       data: data,
//    }).then (res=> setTodos(res.data))
//    .catch((e)=>{console.log(e)})
// }




// import User from "./Form/user";
function Contacts() {
   const [contacts,setContacts]=useState([]);
   const [todos,setTodos]=useState([]);

   
   useEffect(()=>{
      getLocalTodos()
      
   },[])

   useEffect(()=>{
      console.log(contacts);
      saveLocalStorage();

      
   },[contacts]);

   // localStorage işlemleri

   const saveLocalStorage=()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
   }
   // eğer boşsa localStorage kısmına boş bir array atadım
   // ekleme yapıldığında storage kısmına da ekledim
   const getLocalTodos=()=>{
      if(localStorage.getItem("todos" === null)){
         localStorage.setItem(("todos",JSON.stringify([])))
      }else{
         setTodos(JSON.parse(localStorage.getItem("todos")))
      }
         
      
      }

      
      // useEffect(()=>{
      //    getLocalUser();
      // },[])
   
      // useEffect(()=>{
      //    console.log(user)
      //    userLocalStorage()
      // },[]) 

      

      
       const [user,setUser]=useState([])
       const handleClassChange = (e)=>{
        e.preventDefault();
         setUser([...user,{user:e.target.value}])
         console.log(user);
         setUserClass(true); 

      }



    

      //  const handleUserChange=(e)=>{
      //    e.preventDefault();
      //  setUser([...user,{user:e.target.value}])
      //   }
       
     
      // onSubmit={handleUserChange}

   


      const userLocalStorage=()=>{
         localStorage.setItem("user",JSON.stringify(user))
      }
      const getLocalUser=()=>{
         if(localStorage.getItem("user" === null)){
            localStorage.setItem(("user",JSON.stringify([])))
         }else{
            setUser(JSON.parse(localStorage.getItem("user")))
         }
            
         
         }




       
       const [userClass,setUserClass]=useState(false);
      //   const [isMod,setIsMod]=useState({ismod: "false"});
      //   const changeClassHandler=(mod)=>setIsMod(()=>{if({...isMod,isMod:!mod.isMod})=>return mod})
        
     return(
        <div id="container">
         {/* <h1>
         {`${user}`}
         </h1> */}
         
         <div className={`username ${userClass ? "usercheck" : ""}`}>
         <form >
            <input className="username-input" name="users" type="text"  placeholder="Adınızı giriniz" value={user.users}  ></input>
            </form>
         <button className="username-button"onClick={handleClassChange}><BsPatchCheck/></button>
         {/* <button className={`light-mod ${isMod ? "dark-mod": ""}`} onClick={changeClassHandler}>dark mod</button> */}
         </div>
         
         <Form addcontact={setContacts} contact={contacts} todos={todos} setTodos={setTodos} />
         <List contact={contacts} todos={todos} setContacts={setContacts} setTodos={setTodos} />
         
         </div>
     )
}
export default Contacts;