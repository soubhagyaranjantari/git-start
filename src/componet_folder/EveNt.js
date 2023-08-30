import React, { useState } from 'react'

export const EveNt = (props) => {
    // function fun(){
    //     // document.getElementById('any').innerHTML=data

    // }
    const [showData, setshowData] = useState(false)
    const [data, setData] = useState("kanhu")
    return (
        <div>
            <button onClick={() => setshowData(!showData)} className='btn btn-success'>Click Me</button>
            <h1 id="any">{showData ? data : null}</h1>
        </div>
    )
}
        