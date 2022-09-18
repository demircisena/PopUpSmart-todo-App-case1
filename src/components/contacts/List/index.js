import React from "react";

import Todo from "../todo";

 function List({todos,setTodos}){

    return ( 

    <div className="list-container">
        
        <ul className="list">
            {todos.map((todo)=>
                 <Todo
                 text={todo.content} 
                 key={todo.id}
                 setTodos={setTodos}
                 todos={todos}
                 todo={todo}
                 />
                
                 
                )
            }
                
                
         </ul>
       
    </div>
    )
 };


 export default List;