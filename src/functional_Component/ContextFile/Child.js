import React from 'react'
import { GlobalInfo } from './Parent'
import SuperChild from './SuperChild'

const Child = () => {
    const {appColor}=React.useContext(GlobalInfo)
  return (
    <div>
        <h1 style={{color:appColor}}>Child</h1>
        <h3 className='d-flex '>SuperChild : </h3><SuperChild/>
    </div>
  )
}

export default Child