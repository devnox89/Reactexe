import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initialV = 0, valueIncrement = 1}) {
    const [ counter, setCounter] = useState(initialV)
    
    function handleCounterIncrement(){
        setCounter((c)=> c + valueIncrement)
    }
    function handleCounterDecrement(){
        setCounter((c)=> c - valueIncrement)
    }
    function handleCounterReset() {
        setCounter(initialV)
    }
    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}