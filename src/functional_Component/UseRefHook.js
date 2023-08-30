import React from 'react'
import { useEffect } from 'react'

export const UseRefHook = () => {
    let inputRef=React.useRef(null)
    function handleInput(){
        // console.warn('Function Work');
        inputRef.current.value=1000
        inputRef.current.style.color='red'
        inputRef.current.style.backgroundColor='blueviolet'
    }
    // useEffect(() => {        
    //     inputRef.current.focus()
    // }, [])
    
    return (
        <div>
            <h1 className="text-right">
                UseRefHook In Function Component
            </h1>

            <input type="text" ref={inputRef}/>
            <button className="btn btn-warning" onClick={()=>handleInput()}>Handle Input</button>
        </div>
    )
}
