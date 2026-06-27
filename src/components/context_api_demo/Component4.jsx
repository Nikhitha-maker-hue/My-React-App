import Component5 from "./Component5";

function Component4(props){
    return(
        <div>
            <h3> Component 4</h3>
            <Component5  count={props.count}> </Component5>
        </div>
    )

}
export default Component4;