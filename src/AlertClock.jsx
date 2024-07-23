export function AlertClock() {
    function handleButtonClick() {
        const dateNow = new Date()
        alert(`The current time is: ${dateNow.toLocaleString()}`)
    }

    return (
        <div>
            <p>Click the button to show the current time!</p>
            <button onClick={handleButtonClick}>Click Me!</button>
        </div>
    )
}