function CounterApp() {
    const [count, setCounter] = useState(0);
    return(
        <div>
        <h3>Counter App</h3>
        <h3>Current count is : {count}</h3>
        <div><button onClick={ ()=>setCounter(count+1)}>Increase</button>
        <button onClick={()=>setCounter(count-1)}>Decrease</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
        <div> <button onClick={()=>setCounter(count+1)}>+</button>
        <button onClick={()=>setCounter(count - 1)}>-</button></div>
        </div>
    )
}
export default CounterApp;