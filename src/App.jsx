import { Hello } from "./Components";
import { Welcome } from "./Welcome";
import { Message } from "./Conditional";
import { AlertClock } from "./AlertClock";

export function App() {
    return (
        <div>
            <h2>ESERCIZIO - Components</h2>
            <Hello />
            {/* SPIEGAZIONE
            si può inserire più  di un richiamo dello stesso component, questo verrà visualizzato in blocco dopo il precedente */}
            <Hello />
            <p>What a beautiful day!</p>
            <hr />
            <h2>ESERCIZIO - Props</h2>
            <Welcome name="Francesco" age={34} />
            <hr />
            <h2>ESERCIZIO - Conditional Rendering</h2>
            <Message age={19} name='John'/>
            <hr />
            <h2>ESERCIZIO - Events</h2>
            <AlertClock/>
        </div>
    );
}

