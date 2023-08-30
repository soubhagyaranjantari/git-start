import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const UserDetails = () => {
  const location=useLocation();
  console.log(location);
  return (
    <div>
        <h1>This is User Details</h1>
         <br />
        <Link to='/user/Anil'>Anil</Link>
        <br />
        <Link to='/user/Peter'>Peter</Link>
    </div>
  )
}

export default UserDetails