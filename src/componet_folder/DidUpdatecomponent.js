import React from "react";

export default class DidUpdate extends React.Component{
    constructor()
    {
        super();
        this.state={
            count:0
        }
        // console.log('constuctor');
    }
    componentDidUpdate(prevProps, prevState,snapShot)
    {
        // console.log('componentDidUpdate',prevState.count,snapShot);
        if (this.state.count <10) {
            // this.setState({count:this.state.count+1})
            
        }
    }
    render()
    {
        // console.log('render');
        return(
            <div className="text-center">
                <h1 className="font-weight-bold">
                componentDidUpdate{this.state.count}
                </h1>
                <button className="btn btn-primary" onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>componentDidUpdate({this.state.count})</button>
            </div>
            )
    }
}