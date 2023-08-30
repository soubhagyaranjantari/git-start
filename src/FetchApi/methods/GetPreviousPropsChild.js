import React, { useEffect, useRef } from 'react'

const GetPreviousPropsChild = (props) => {
    const previousProps = useRef();
    useEffect(() => {
        previousProps.current = props.count
    })
    const previousValue = previousProps.current
    useEffect(() => {
        document.title=previousValue
     
    })
    
    return (
        <div>
            <h3>GetPreviousPropsChild</h3>
            <h1>current Value {props.count}</h1>
            <h2>Previous Value {previousValue}</h2>
        </div>
    )
}

export default GetPreviousPropsChild