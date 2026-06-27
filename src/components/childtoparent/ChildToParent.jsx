import { useState } from "react";
import Child from "./Child";
function ChildToParent() {
    const[pcount,setPCount]=useState(0);
    const getIncrement = (count)=> {
        setPCount(count);

    }
    return(
        <div style={{backgroundColor:'lightblue',padding:'20px',fontFamily:'arial'}}>
            <h3>Child to Parent Communication Demo</h3>
            <div>
                <h3>current count is : {pcount}</h3>
            </div>
            <Child getIncrement={getIncrement}></Child>
        </div>
    )
}
export default ChildToParent;