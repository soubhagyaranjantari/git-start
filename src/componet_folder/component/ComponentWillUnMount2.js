import React from 'react'

export default class ComponentWillUnMount2 extends React.Component {

    componentWillUnmount(){
        alert('ComponentwillUnmount')
    }

    render(){
        return(
            <div>
              <h1 className="text-center">
                    Component will unMount@@@@:2
                </h1>
            </div>
        )
    }
}