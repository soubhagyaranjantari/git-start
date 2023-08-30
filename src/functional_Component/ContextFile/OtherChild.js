import React, { useContext } from 'react'
import { GlobalInfo } from './Parent'

const OtherChild = () => {
    const {appColor} = useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appColor}}>OtherChild</h1>
    </div>
  )
}

export default OtherChild