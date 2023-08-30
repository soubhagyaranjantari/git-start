import React from 'react'
import SendPropsToPureComponent from './SendPropsToPureComponent';

export default class Purecomponent extends React.Component{
    constructor()
    {
        super();
        this.state = {
            count:1
        }
    }
    render()
    {
        // console.log('reRendering');
        return(
            <div>
            <SendPropsToPureComponent count={this.state.count}/>
            <button className="btn btn-success" onClick={()=>this.setState({count:1})}>{this.state.count}+1</button>
            </div>
        )

    }
}