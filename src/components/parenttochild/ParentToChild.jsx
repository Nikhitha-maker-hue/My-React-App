import { useState } from "react";
import Child from "./Child";

function ParentToChild(){
    const [count,setCount]=useState(0);
    return (
        <div style={{backgroundColor:"lightblue",padding:"30px"}}>
            <h3>Parent to Child Demo</h3>
            <h3>Current Count is : {count}</h3>
            <div><button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment</button></div>
            <Child count={count}></Child>
        </div>
    )
}
export default ParentToChild;