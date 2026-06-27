import { useState } from 'react';
import './box.css'
function TogglerApp() {
    const [toggler, setToggler] = useState(true);
    return(
        <div>
            <h3>Toggler App</h3>
            {
                toggler &&
                <div className=" box"></div>
            }
            
            <div>
                <button onClick={()=>setToggler(false)}>Hide</button>
                <button onClick={()=>setToggler(true)}>Show</button>
            </div>
        </div>
    )
}
export default TogglerApp;