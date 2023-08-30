import React, { createRef } from "react";

export default class RefInReact_ClassComponent extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef()
    }
    componentDidMount() {
        // console.log(this.inputRef.current.value='1000');
    }
    getVal() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color='red'
        this.inputRef.current.style.backgroundColor='black'
    }
    render() {
        return (
            <div className="text-center">
                <h1 className="text-success">Ref In React Calss COMPONENT</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getVal()}>Check Ref</button>
            </div>
        )
    }
}