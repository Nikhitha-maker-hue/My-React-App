import { memo } from "react";
function ChildFive(props) {
    console.log("ChildFive");
    console.log(props);
    return(
        <div>

            <h3>Increment by 5 Result is : {props.countByFive}</h3>
          </div>
    )
}
export default memo(ChildFive);