export function MouseClicker() {
    function handlerButtonClick(event) {
        if (event.target.tagName === 'IMG') {
            console.log(event.target.src);
        } else {
            console.log(event.target.name);
        }
    }

    return(
        <div>
            <button name="one" onClick={handlerButtonClick}>Click me!</button>
            <button name="two" onClick={handlerButtonClick}>
                <img src="https://placehold.co/40x40" alt="" width={40} height={40} />
                Click me!
            </button>
        </div>
    )
}