import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About page</h1>
        <p>This about page</p>
        <p>In this page we'r going to react router</p>
        <p><Link to='/'>Go to Home page</Link></p>
    </div>
  )
}

export default About