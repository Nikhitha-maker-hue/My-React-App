import { useState } from "react";

function CounterAppv4(){
    let[count,setcount]=useState(0);
    function Increment(){
        setcount(count+1);
        console.log("count",count);
    }
        function Decrement(){
       setcount(count-1);
        console.log("count",count);
    }
        function Reset(){
        setcount(count=0);
        console.log("count",count);
    }
    return(
        <div>
            <h3>counter App-componet re-rending demo</h3>
            <h3>current count is:{count}</h3>
            <div>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}
export default CounterAppv4;