import { Age } from "./Age";

export function Message2( {age}) {
    return (
        <div>
            {age > 18 ? <Age age={age}/> : 'You are very young'}
        </div>
    )
}