import React from 'react'

export const ContitionalRendering = () => {
    const[loggedIn,setLoggedIn]=React.useState(1)
  return (
    <div>
      <h1 className="text-success">Conditional rendering</h1>
        {
           loggedIn?<h1 className='text-danger'>User not LoggedIn</h1>
           :loggedIn===1?<h1 className='text-danger'>User1 LoggedIn</h1>
            :<h1 className='text-danger'>User LoggedIn</h1>
        }
    </div>
  )
}
