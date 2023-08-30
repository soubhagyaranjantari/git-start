import React from "react";
import ComponentWillUnMount2 from "./ComponentWillUnMount2";

export default class ComponentWillUnMount1 extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
        // console.log('constructor');
    }

    render() {
        return (
            <div>
                {this.state.show ?
                <ComponentWillUnMount2/>
                : <h1 className="text-center">Component will removed</h1>}
                <button className="btn btn-primary" onClick={()=>{
                    this.setState({
                        show:false
                    })
                }}>Toogle Component</button>
            </div>
        )
    }
}