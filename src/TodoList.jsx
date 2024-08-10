import { useState } from "react"

export function TodoList() {
    
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

    function handleAdd() {
        setTodo([...todo, input]);
        setInput('');
    }

    function handleReset() {
        setTodo([]);
    }

    function handleRemoveTask(indexRemove) {
        setTodo(todo.filter((_, index) => index !== indexRemove));
    }

    return(
        <div>
            <input type="text" value={input} onChange={(eve) => setInput(eve.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
            <button onClick={handleReset}>Reset Tasks</button>
            <ul>
                {todo.map((todos, index) => (
                    <li key={index}>
                        {todos}
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}