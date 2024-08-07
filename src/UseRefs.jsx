import { useEffect, useRef } from "react"

export function FocusableInput() {

    const mountedRef = useRef(false)
    const inputRef = useRef(null)

    useEffect(()=>{
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log('mounting for the first time');    
        } else {
            console.log('Mounting again for debug purposes');
            
        }
        inputRef.current?.focus(null)
    }, [])

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Username"/>
            <input type="password" placeholder="Password" />
        </div>
    )
}