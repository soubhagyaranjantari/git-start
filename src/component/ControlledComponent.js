import React from 'react'

const ControlledComponent = () => {
    const[value,setValue]=React.useState(0)
  return (
    <div className="text-center">
        <h1 >ControlledComponent</h1>
        <input type="text" onChange={(e)=>{
            setValue(e.target.value)
        }}/>
        <h3>{'value is :'+ value}</h3>
    </div>
  )
}

export default ControlledComponent;