import React from "react";
function DivisionComponent({a,b}){
    if(b===0){
        throw new Error("Division by zero is not allowed.");
    }
    const result=a/b;
    return(
        <div style={{textAlign:"center"}}>
            <h3>Division Result:{result}</h3>
        </div>
    );
}
export default DivisionComponent