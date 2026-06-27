import { useState } from "react";

function Child(props) {
    console.log("props : "+props);
    console.log(props);
    
    const[count,setCount]=useState(0);
    const increment=()=> {
        setCount(count+1);
        props.getIncrement(count+1);
    }
    return (
        <div style={{backgroundColor:'lightcoral',padding:'20px',fontFamily:'arial'}}>
            <h3>Child Component</h3>
            <div>
                <h3>Current count is : {count}</h3>
            </div>
            <div>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            </div>
        </div>
    )
}
export default Child;