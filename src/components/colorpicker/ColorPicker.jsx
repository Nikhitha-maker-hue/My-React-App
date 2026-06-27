import { useState } from 'react';
import './ColorPicker.css'
function ColorPicker() {
    const [colorChoice,setColorChoice]=useState('');
    return (
        <div>
            <h3>Color picker using useRed() hook</h3>
            <div className="color-preview-box" style={{backgroundColor:colorChoice}}>
                <h3>color preview box</h3>
            </div>
            <div>
            <label>select color</label>
                <input type="color" onChange={ e=> setColorChoice(e.target.value)}/>
            </div>
        </div>
    )
}
export default ColorPicker;