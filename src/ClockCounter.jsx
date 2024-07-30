import { useEffect, useState } from "react";

export function ClockCounter({ initialV = 0, valueIncrement = 1 }) {
    const [counter, setCounter] = useState(initialV);

    useEffect(() => {
        console.log(`The value of counter is ${counter}`);
    }, [counter]);

    function handleCounterIncrement() {
        setCounter((c) => c + valueIncrement);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    );
}
