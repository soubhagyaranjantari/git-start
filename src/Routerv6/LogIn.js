import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    function handleForm(e) {
        e.preventDefault()
        // alert('welcome'+name)
    }
    function getInput(e) {
        setName(e.target.value)
    }
    function getpass(e) {
        setPassword(e.target.value)
    }
    console.log(name);
    console.log(password);
    function login() {
        localStorage.setItem("login",true)
        navigate('/')
    }
    const navigate=useNavigate()
    React.useEffect(()=>{
        let logIn=localStorage.getItem('login')
        if (logIn) {
            navigate('/')
        }
    })
  return (
    <div>
        <h1>Log In Form</h1><br />
        <form onSubmit={handleForm}>
            <input type="text" onChange={getInput}/><br /><br />
            <input type="password" onChange={getpass} /><br /><br />
            <button className="btn btn-primary" onClick={login} type="submit">Log In</button>
        </form>
    </div>
  )
}

export default LogIn;