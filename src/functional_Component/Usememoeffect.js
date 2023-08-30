import React, { useState } from 'react'

export const Usememoeffect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)
    const memoEffect=React.useMemo(function  multiCount(){
        // console.log('memoeffect');
        return data * 10
    },[data])
    return (
        <div>
            <h1>Usememoeffect</h1>
            <h1>Count Value is {count}</h1>
            <h1>Data Value is {data}</h1>
            <h2>{memoEffect}</h2>
            <button className="btn btn-success" onClick={() => { setCount(count + 1) }}>Increase Count</button>
            <button className="btn btn-danger" onClick={() => { setData(data * 10) }}>Increased Data</button>
        </div>
    )
}
