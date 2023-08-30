import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1 className="text-danger">404 <span className="text-warning">Page not Found</span></h1>
        <Link to='/'>Go TO Home page</Link>
    </div>
  )
}

export default Page404