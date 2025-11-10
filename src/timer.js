import { useState,useEffect } from "react";
function Timer() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Component rendered or updated");
    },[count]);
    return(
        <div>
            <h2>Timer: {count} seconds</h2>
            <button onClick={()=>setCount(count+1)}>Increase Timer</button>
        </div>
    );
}
export default Timer;