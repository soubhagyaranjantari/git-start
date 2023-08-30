import React from 'react'
 export default class SendPropsToPureComponent extends React.PureComponent{
    render()
    {
        return(
            <h1>Count Value is {this.props.count}</h1>
        )
    }
 }