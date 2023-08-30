import React from "react";

export default class ShouldComponentUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // console.log('constructor');
    }

    componentDidMount(){
        // console.log('componentDidMount');
    }

    componentDidUpdate(){
        // console.log('componentDidUpdate');
    }

    shouldComponentUpdate() {
        // console.log('shouldComponentUpdate',this.state.count);
        if (this.state.count >=5 && this.state.count <=10) {
            return true
        }
        return false
    }

    render()
    {
        return(
            <div className="text-success">
                <h1 className="text-warning">{this.state.count}</h1>
                <p className="text-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias, magnam distinctio sit minima voluptatibus, fugiat maiores quae culpa provident omnis laboriosam quia, beatae aspernatur eius corporis sint? Minima molestiae, totam ex eos, inventore modi quos, ipsa quia quod doloribus vel recusandae et labore repudiandae iusto illo maxime voluptate asperiores.
                </p>
                <button className="btn btn-warning" onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>shouldComponentUpdarte()</button>
            </div>
        )
    }

}