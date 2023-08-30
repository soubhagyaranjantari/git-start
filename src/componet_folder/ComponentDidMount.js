import React from "react";

export default class ComponentDidMount extends React.Component{
    constructor()
    {
        super()
        this.state={
            name:"ANIL",
        }
        // console.log("constructor Called");
    }
    componentDidMount()
    {
        // console.log('componentDidMount Called');
    }
    
    render()
    {
        // this.setState({
        //     name:"ANILKumar"
        // })
        // console.log('render called');
        return(
            <div className="text-center">
                <h1>{this.state.name}</h1>
                <button className="btn btn-primary" onClick={()=>this.setState({name:'AnilKumar Swain'})}>Upadate Name</button>
            </div>
            )
    }
}   