import { useState } from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";

function createData() {
    return {
        username: '',
        password: '',
        session: false
    };
}

function Login({ onLogin }) {
    const [data, setData] = useState(createData());

    function handleInputChange(event) {
        const { name, value, checked, type } = event.target;
        setData(d => ({
            ...d,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    function handleResetForm() {
        setData(createData());
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            <input name="session"type="checkbox"checked={data.session} onChange={handleInputChange}/>
            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={handleResetForm}>Reset</button>
        </form>
    );
}

export function ControlledForm() {
    function handleLogin(data) {
        console.log(data);
    }

    return (
        <div>
            <InteractiveWelcome />
            <Login onLogin={handleLogin} />
        </div>
    );
}