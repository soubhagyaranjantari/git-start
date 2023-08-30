import React from 'react'
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
    var a=""
    const name='Soubhagya'
    function parentReciveChildData(params) {
        alert('Hello'+ ' '+ params)
        console.log(params);
        a=params
       

    }
  return (
    <div>
        <h1>ParentComponent </h1>
        <h1>: {a}</h1>
        <ChildComponent name={name} fun={parentReciveChildData}/>
    </div>
  )
}
