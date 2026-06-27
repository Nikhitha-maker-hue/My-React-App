import Component6 from "./Component6";

function Component5(props){
    return(
        <div>
            <h3> Component 5</h3>
            <Component6  count={props.count}> </Component6>
        </div>
    )

}
export default Component5;