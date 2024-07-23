import { Hello } from "./1-components/Hello";
import { Welcome } from "./2-props/Welcome";

export function App() {
    return (
        <div>
            <h2>ESERCIZIO - Components</h2>
            <Hello />
            <Hello />
            <p>What a beautiful day!</p>
            <hr />
            <h2>ESERCIZIO - Props</h2>
            <Welcome name="Francesco" age={34} />
            <hr />
            <h2>ESERCIZIO - Conditional Rendering</h2>
        </div>
    );
}

