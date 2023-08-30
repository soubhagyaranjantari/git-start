import React from 'react'
import { useState } from 'react'
export const Increase1 = () => {
    const [first, setfirst] = useState(0)

    const increase = () => {
        setfirst(first + 1)
    }

    const decrease = () => {
        setfirst(first - 1)
    }
    return (
        <div>
            <h1>
                {first}
            </h1>
            <button onClick={increase} className='btn btn-primary btn-sm'>+</button>
            <button onClick={decrease} className='btn btn-primary btn-sm'>-</button>
            <button onClick={()=>{setfirst(0)}}className='btn btn-warning btn-sm'>Reset</button>
        </div>
    )
}
