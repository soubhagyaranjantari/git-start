import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  // bellow code for use of useNavigate
  const navToPage=(url)=>{
    // navigate('/about')
    // let s=false
    // s?navigate('/about'):navigate('/member')
    navigate(url)
  }
  // _______________________________________________
  // const location=useLocation();
  // console.log(location);
  return (
    <div>
        <h1>Home page</h1>
        <p>This home page</p>
        <p>In this page we'r going to react router</p>
        <p><Link to='/about'>Go to About page</Link></p>
        <button className="btn btn-primary btn-sm" onClick={()=>navToPage('/about')}>About</button>
        <button className="btn btn-success btn-lg" onClick={()=>navToPage('/member')}>User</button>
        {/* <button className="btn btn-primary" onClick={()=>navigate('/about')}>About</button>
        <button className="btn btn-success" onClick={()=>navigate('/member')}>User</button> */}
    </div>
  )
}

export default Home