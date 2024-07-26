import { Hello } from "./Components";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { Conditional} from "./Conditional";
import { AlertClock } from "./AlertClock";
import { Counter } from "./StateCounter";

export function App() {
    return (
        <div>
            <h2>ESERCIZIO - Components</h2>
            <Hello/>
            <Hello />
            <Message/>
            <hr />
            <h2>ESERCIZIO - Props</h2>
            <Welcome name="Francesco" age={34} />
            <hr />
            <h2>ESERCIZIO - Conditional Rendering</h2>
            <Conditional age={19} name='John'/>
            <hr />
            <h2>ESERCIZIO - Event</h2>
            <AlertClock/>
            <hr />
            <h2>ESERCIZIO - State</h2>
            <Counter/>
            <hr />
        </div>
    );
}