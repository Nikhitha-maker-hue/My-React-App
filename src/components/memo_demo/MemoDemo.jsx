import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildFive from "./ChildFive";
function MemoDemo() {
    const [countByOne,setCountByOne]=useState(0);
    const [countByTwo,setCountByTwo]=useState(0);
    const [countByFive,setCountByFive]=useState(0);
    return(
        <div>
            <h3>Re-rendering of child components Issue fixing with memo()</h3>
            <ChildOne countByOne={countByOne}></ChildOne>
            <ChildTwo countByTwo={countByTwo}></ChildTwo>
            <ChildFive countByFive={countByFive}></ChildFive>
            <div>
                <button onClick={()=>setCountByOne(countByOne+1)}>Increment by 1</button>
                <button onClick={()=>setCountByTwo(countByTwo+2)}>Increment by 2</button>
                <button onClick={()=>setCountByFive(countByFive+5)}>Increment by 5</button>
            </div>
        </div>
    )
}
export default MemoDemo;