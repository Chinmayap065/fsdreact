import React from "react";
function ArrayComponent(){
    const arr=[10,20,30];
    const index=1;
    if (index >=arr.length){
        throw new Error("Index out of bounds");
    }
    return(
        <div style={{textAlign:"center"}}>
            <h3>Element at index {index}: {arr[index]}</h3>
        </div>
    );
}
export default ArrayComponent;