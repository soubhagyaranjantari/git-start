import React, { useState } from 'react'

const BasicFormvalidation = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    function reload(e) {
        if (user.length >= 5 && password.length >= 5) {
            alert('Welcome', user)
        } else {
            alert('Enter Correct Values')
        }
        e.preventDefault();
    }
    function userHandler(e) {
        let item = e.target.value
        if (item.length < 5) {
            setUserError(true)
        } else {
            setUserError(false)
        }
        setUser(item)
        // console.log(item);
    }
    function passwordHandler(e) {
        let item = e.target.value
        if (item.length < 5) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(item)
        // console.log(item);
    }

    return (
        <div>
            <div className="container" >
                <h2>Basic Form Validation</h2>
                <form className="form-control text-center" action="" onSubmit={reload}>
                    <span className='text-success'>Enter Your User Id:</span><input type="text" onChange={userHandler} />{userError ? <span className='text-danger'>Enter Valid UserId</span> : null} <br /><br />

                    <span className='text-success'>Enter Your Passwords:</span><input type="password" onChange={passwordHandler} />{passwordError ? <span className='text-danger'>Enter Valid Password</span> : null} <br /><br />

                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BasicFormvalidation;