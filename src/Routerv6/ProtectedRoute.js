import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {Component}=props
    // console.log(Component);
    const navigate=useNavigate()
    React.useEffect(()=>{
        let logIn=localStorage.getItem('login')
        if (!logIn) {
            navigate('login')
        }
    })
    // localStorage.clear()
  return (
    <Component/>
  )
}

export default ProtectedRoute;