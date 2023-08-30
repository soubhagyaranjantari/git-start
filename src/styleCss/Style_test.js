import React from 'react'
import './style.css'
import style from "./costum.module.css";
const Style1_test = () => {
  return (
    <div>
        <h1 className="text-primary bg-dark text-center">Using Style In React</h1>
        <h1 className="text ">Using Style1 In React</h1>
        <h1 style={{backgroundColor:'black',color:'red'}} >Using Style2 In React</h1>
        <h1 className={style.one}>Using Style3 In React</h1>
    </div>
  )
}

export default Style1_test;