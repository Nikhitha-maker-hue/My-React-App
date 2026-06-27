import Component3 from "./Component3";

function Component2({count}){
    console.log(count);
    return(
        <div>
            <h3> Component 2</h3>
            <Component3  count={count}> </Component3>
        </div>
    )   

}
export default Component2;