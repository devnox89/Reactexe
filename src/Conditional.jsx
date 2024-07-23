import { Age } from "./Age"
import { Welcome } from "./Welcome"
export function Message({age, name}) {
    return(
        <div>
            {age >= 18 ? <Welcome name={name} age={age}/>: ""}
            <p>-Condizione 1</p>
            {age > 18 ? <Age age={age} /> : 'You are Young!'}
            <p>-Condizione 2</p>
            {Boolean(age) ? <Age age={age}/> : ''  }
            <p>-Condizione 3</p>
            {age >18 && age <65 ? <Age age={age}/> : 'Your Age is not valid!'}
            <p>-Condizione 4</p>
            {age >18 && name === 'John' ? <Age age={age}/> : ''}
        </div>
    )
}