import { Hello } from "./Components";

export function App() {
    return (
        <div>
            <h2>ESERCIZIO - Components</h2>
            <Hello />
            {/* SPIEGAZIONE
            possiamo utilizzare più volte il componente, questo verrà visualizzato a blocco subito dopo il primo component. */}
            <Hello />
            <p>What a beautiful day!</p>
            <hr />
        </div>
    );
}

