import { memo } from "react";
function ChildTwo(props) {
    console.log("ChildTwo");
    console.log(props);
    return(
        <div>

            <h3>Increment by 2 Result is : {props.countByTwo}</h3>
          </div>
    )
}
export default memo(ChildTwo);