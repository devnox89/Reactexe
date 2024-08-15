export function CounterDisplay( {counter}) {

    const myCounterStyle = {
        fontSize: '20px',
        color: 'green'
    }

    return(
        <div style={myCounterStyle}>
            <h2>The counter is {counter}</h2>
        </div>
    )
}