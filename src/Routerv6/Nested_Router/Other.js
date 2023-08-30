import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Other = () => {
  return (
    <div>
      <h1>Other</h1>
      <Link to='NextedPage'>Next</Link>
      <Outlet/>
    </div>
  )
}

export default Other