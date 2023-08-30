import React from 'react'
import './BackGround.css'
const BackGround = (props) => {
    
  return (
    <div >
        <button className="bgcolor" onClick={()=>props.data()}>dark white</button>
    </div>
  )
}

export default BackGround