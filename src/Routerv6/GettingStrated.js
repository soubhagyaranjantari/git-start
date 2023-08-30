import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Page404 from './Page404'
import User from './User'
import UserDetails from './UserDetails'
import FilteerSearchPramHook from './FilteerSearchPramHook'
import Contact from './Contact'
import Company from './Nested_Router/Company'
import Channel from './Nested_Router/Channel'
import Other from './Nested_Router/Other'
import NextedPage from './Nested_Router/NextedPage'
import LogIn from './LogIn'
import ProtectedRoute from './ProtectedRoute'
// import UserOne from './Nested_Router/UserOne'

const GettingStrated = () => {
    return (
        <div className='container text-center  '>
            <NavBar />
            <Routes>
                <Route path='/' element={<ProtectedRoute Component={Home} />} />
                <Route path='login' element={<LogIn />} />
                <Route path='/about' element={<ProtectedRoute Component={About} />} />
                <Route path='/member' element={<UserDetails />} />
                <Route path='/user/:name' element={<User />} />
                <Route path="/*" elememt={<Page404 />} />
                <Route path='/contact/' element={<Contact />}>
                    <Route path='company' element={<Company />} />
                    <Route path='channel' element={<Channel />} />
                    <Route path='other/' element={<Other />} >
                        <Route path='NextedPage' element={<NextedPage />} />
                    </Route>
                </Route>
                <Route path='useparams' element={<FilteerSearchPramHook />} />
                {/* <Route path="/*" elememt={<Navigate to='/'/>}/> */}
                {/* <Route path='dynamic/:id/:name' element={<UserOne/>}/>  */}
            </Routes>
        </div>
    )
}

export default GettingStrated;