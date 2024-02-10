// hook
import { useState } from "react";

function App() {
  
const[count,setCount]= useState(0)

  return (
   <div>
    <CustomButtoon count={count} setCount={setCount}></CustomButtoon>
    <CustomButtoon count={count*10} setCount={setCount}></CustomButtoon>
    <CustomButtoon count={count+1} setCount={setCount}></CustomButtoon>
   </div>
  )
  }

  function CustomButtoon(props){

    function onClickhandler(){
      props.setCount(props.count+1);
    }

    return(
<button onClick={onClickhandler}>Count {props.count}</button>
    )
  }
export default App
