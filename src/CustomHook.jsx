import { useState } from "react"
import { useCounter } from "./CustomCounter"
import { useCustomFetch } from "./CustomFetch"
import { useForm} from "./CustomUseForm"
import { useCurrenLocation } from "./CustomUseLocation"

export function CustomHook({initialValue = 0, username = 'devnox89', formValue}) {
    
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    const {data, loading, error, onFetchUser} = useCustomFetch(username)
    const {onSubmit, onResetForm, onChange, formData} = useForm(formValue)
    const {currentPosition, errorPosition, loadPosition, onLocation} = useCurrenLocation()


    function handleGetUserData() {
        onFetchUser(username)
    }

    return(
        <div>
            <div className="custom-counter">
                <h3>Custom Counter</h3>
                <h4>Counter: {counter}</h4>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </div>
            <div className="custom-form">
                <form onSubmit={onSubmit}>
                    <input name="username" value={formData.username} onChange={onChange} placeholder="Username..."/>
                    <input name="password" type="password"  value={formData.password} onChange={onChange} placeholder="Password..."/>
                    <button type="submit" disabled={!formData.username || !formData.password}>Login</button>
                    <button type="button" onClick={onResetForm}>Reset</button>
                </form>
            </div>
            <div className="custom-fetch">
                <h3>Custom Fetch</h3>
                <button onClick={handleGetUserData}>Load User Data</button>
                {loading && <h1>Loading...</h1>}
                {error && <h1>There's an Error</h1>}
                {data && <h1>{data.name}</h1>}
            </div>
            <div className="custom-location">
                <button onClick={onLocation}>Show my position</button>
                {loadPosition && <h2>Loading...</h2>}
                {!errorPosition && (
                    <div>
                    <p>Latitude: {currentPosition.latitude}</p>
                    <p>Longtude: {currentPosition.longitude}</p>
                    </div>
                )}
            </div>
        </div>
    )

}