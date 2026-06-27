import { useState } from "react";

function ArithmeticOperations(){
    const[firstNo, setFirstNo] = useState('');
    const[secondNo, setSecondNo] = useState('');
    const[Result, setResult] = useState('');

    // const add = ()=> setResult(-(-firstNo + -secondNo))
    const add = ()=> setResult(Number.parseInt(firstNo) + Number.parseInt(secondNo));
    const sub = ()=> setResult(firstNo - secondNo)
    const mul = ()=> setResult(firstNo * secondNo)
    const div = ()=> setResult(firstNo / secondNo)
    return(
        <div>
            <h3>Arithmetic Operations App</h3>
            <div className="col-4 mx-auto">
                <div className="text-start">
                    <div>
                        <label htmlFor="">First No:</label>
                        <input type="number" className="form-control" 
                        value={firstNo} onChange={e=>setFirstNo(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Second No:</label>
                        <input type="number" className="form-control" 
                        value={secondNo} onChange={e=>setSecondNo(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Result:</label>
                        <input type="text" className="form-control " disabled value={Result}
                        onChange={e=>setResult(e.target.value)}/>
                    </div>
                    <div className="my-3 text-center">
                        <button className="btn btn-primary"
                        onClick={add}>Add</button>
                        <button className="btn btn-primary"
                        onClick={sub}>Sub</button>
                        <button className="btn btn-primary"
                        onClick={mul}>Mul</button>
                        <button className="btn btn-primary"
                        onClick={div}>Div</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ArithmeticOperations;