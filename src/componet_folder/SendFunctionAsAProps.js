import React from 'react'

export const SendFunctionAsAProps = (props) => {
    return (
        <div><h1 className="text-danger">SendFunctionAsAProps</h1>
            <button className="btn btn-success" onClick={() => props.data()}>call function</button>
        </div>
    )
}
