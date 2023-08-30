import React from 'react'
import Members from './Members'

export const Toggle = (props) => {
    const [status, setStatus] = React.useState(true)
    return (
        <div className="text-center">
            {
                status ?
                    <h1 className="text-primary" id='hide'>
                        This data is showing
                    </h1> : null
            }
            {/* <button className="btn btn-success" onClick={()=>setStatus(true)}>Show Data</button>
        <button className="btn btn-danger" onClick={()=>setStatus(false)}>Hide Data</button> */}
            <button className="btn btn-danger" onClick={() => setStatus(!status)}>{props.data1?props.data1:"Toggle"}</button>
            <button className="btn btn-danger" onClick={props.data}>call a super child fun</button>
            <button className="btn btn-danger" onClick={props.data2}>call a super child funnnnnnnnnn</button>
            {/* <Members /> */}
        </div>

    )
}
