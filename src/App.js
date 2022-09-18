import Contacts from "./components/contacts";
import "./App.css";
import { useState } from "react";
import { BsLightbulb} from "react-icons/bs";



function App() {
  const [isMod,setIsMod]=useState(false)
  const ModChange=()=>{
    setIsMod((item)=>{if(item == true){return false}else{return true}})
  }

  

  return (
    <div className={`App ${isMod ? "dark": ""}`}>
      <button className="mod-button" onClick={ModChange}><BsLightbulb/></button>
     <Contacts/>
    </div>
  );
}

export default App;
