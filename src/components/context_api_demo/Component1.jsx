import { useState } from "react";
import Component2 from "./Component2";

function Component1(){
    const [count, setCounter] = useState(0);
    return (
        <div>
            <h3>Component1</h3>
            <div style={{backgroundColor: 'cyan'}}>
                <h3>Counter App</h3>
                <h3>Current Count is: {count}</h3>
                <div>
                    <button onClick={()=>setCounter(count + 1)}>Increase</button>
                    <button onClick={()=>setCounter(count - 1)}>Decrease</button>
                    <button onClick={()=>setCounter(0)}>Reset</button>
                </div>

                <div>
                    <button onClick={()=>setCounter(count + 1)}>+</button>
                    <span>{count}</span>
                    <button onClick={()=>setCounter(count - 1)}>-</button>
                </div>
            </div>
            <Component2 count={count}></Component2>
        </div>
    )
}
export default Component1;