// import React from 'react'
import React, { useState } from 'react'

const Increase = () => {
    const [inc, setinc] = useState(0)
    function incrsed() {
        setinc(inc + 1)
    }
    function decrsed() {
        setinc(inc - 1)
    }
    const reset = () => {
        setinc(0)
    }
    // console.warn('______________________');
    return (
        <div>
            <h1>{inc}</h1>
            <button onClick={() => decrsed()}className='btn btn-secondary btn-sm'>-</button>
            <button onClick={reset} className='btn btn-dark btn-sm'>0</button>
            <button onClick={incrsed}className='btn btn-link btn-sm'>+</button>
        </div>
    )
}

export default Increase;
// revserse a string in their place?