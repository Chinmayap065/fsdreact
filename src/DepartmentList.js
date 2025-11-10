import React from "react";
function DepartmentList(){
    const departments=["cse",'ise',"ece","mech"];
    return(
        <div>
            <h2>Department List</h2>
            <ul>
                {departments.map((dept,index)=>(
                    <li key={index}>{dept}</li>
                ))}
            </ul>
        </div>
    );
}
export default DepartmentList;