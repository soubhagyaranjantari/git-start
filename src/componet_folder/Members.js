import React from 'react'
import { Toggle } from './Toggle'
const Members = (props) => {
  function any() {
    alert('this is a chind component to pass a other component')
  }
  const data = ""
  return (
    <div><h1 className="text-danger">SendFunctionAsAProps in other components  ANIL</h1>
      <button className="btn btn-success" onClick={props.fun}>call function111111</button>
      <Toggle data={any} data1={data} data2={props.fun}/>
    </div>
  )
}

export default Members;