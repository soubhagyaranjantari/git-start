import React from 'react'
import { Button } from 'react-bootstrap'

const GetPreviousValue = () => {
    const [count, setCount] = React.useState(1)
    const [preValue, setPreValue] = React.useState(count)
    const counter = () => {
        // setCount(count+1)
        // let rand = Math.floor(Math.random() * 10)
        // setCount((previousValue) => {
        //     console.log("previous Value", previousValue);
        //     setPreValue(previousValue)
        //     return rand
        // })
        for (let i = 0; i < 5; i++) {
            setCount((previousValue)=>previousValue+1)
            setPreValue(count)
        }
    }
    return (
        <div className='container'>
            <h1>GetPreviousStateValue</h1>
            <h3>Current value {count}</h3>
            <h1>Previous Value {preValue}</h1>
            <Button onClick={counter}>Update</Button>
        </div>
    )
}

export default GetPreviousValue