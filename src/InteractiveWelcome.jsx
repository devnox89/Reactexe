import { useState } from "react";

function Welcome({ name }) {
    return (
        <p>Welcome, {name}!</p>
    );
}

export function InteractiveWelcome() {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <Welcome name={name} />
        </div>
    );
}