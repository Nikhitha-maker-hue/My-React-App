import Component4 from "./Component4";

function Component3(props){
    return(
        <div>
            <h3> Component 3</h3>
            <Component4 count={props.count}> </Component4>
        </div>
    )

}
export default Component3;