import React from 'react'

export const ChildComponent = (props) => {
    const name='Anil'
    return (
        <div>
            <h1>Child Component : {props.name}</h1>
            <button className="btn btn-primary" onClick={()=>props.fun(name)}>Ckick</button>
        </div>
    )
}
