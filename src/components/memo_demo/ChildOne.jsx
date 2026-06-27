import { memo } from "react";
function ChildOne(props) {
    console.log("ChildOne");
    console.log(props);
    return(
        <div>

            <h3>Increment by 1 Result is : {props.countByOne}</h3>
          </div>
    )
}
export default memo(ChildOne);