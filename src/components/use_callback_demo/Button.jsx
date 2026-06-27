import { memo } from "react";

function Button(props){
    console.log(props);
    
    return <>
        <button onClick={props.incrementBy}> {props.children}-{props.count}</button>
    </>
}

export default  memo(Button);