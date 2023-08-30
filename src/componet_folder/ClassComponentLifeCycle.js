import React from "react";
class ClassComponentLifeCycle extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 'Kanhu',
            email: 'kanhu@test.com'
        }
    }

    render() {
        // console.log(this.props,this.state.email);
        return (<div>
            <h1>class component {this.props.name}</h1>
            <h1>class component given NAme\:{this.state.email}</h1>
            <button className="btn btn-primary" onClick={this.props.fun}>Update Name</button>
            <button className="btn btn-success" onClick={() => this.setState({ email: 'Soubhagyaranjan@gmailcpm' })}>Update Email</button>
        </div>
        )
    }

}
export default ClassComponentLifeCycle;