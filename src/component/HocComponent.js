import React, { useState } from 'react'

const HocComponent = () => {
    return (
        <div>
            <h1>Hight Order Component</h1>
            <div className="d-flex flex-row-reverse justify-content-around">
            <HocRed com={Counter} />
            <HocGreen com={Counter} />
            <HocBlue com={Counter} />
            </div>
        </div>
    )
}

export default HocComponent;

function HocRed(props) {
    return (
        <h2 style={{ backgroundColor: "red", width: '200px' }}><props.com /></h2>
    )
}

const HocGreen = (props) => {
    return (
        <h2 style={{ backgroundColor: "green", width: '200px' }}><props.com /></h2>
    )
}
const HocBlue = (props) => {
    return (
        <h2 style={{ backgroundColor: "blue", width: '200px' }}><props.com /></h2>
    )
}

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="text-center">
            <h3 >{count}</h3>
            <button className="btn btn-info" onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}