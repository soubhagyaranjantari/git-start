import React from 'react'
import { GlobalInfo } from './Parent'
import { Button } from 'react-bootstrap'

const SuperChild = () => {
    const {appColor,getName}=React.useContext(GlobalInfo)
    let myName='SoubhagyaRanjanTarai'
  return (
    <div>
        Hello I am a child of Parent and My name is {myName}.
        <h2 style={{color:appColor}}>SuperChild</h2>
        <Button variant='warning' size='sm' onClick={()=>getName(myName)}>Click To send Data To Parent </Button>
    </div>
  )
}

export default SuperChild