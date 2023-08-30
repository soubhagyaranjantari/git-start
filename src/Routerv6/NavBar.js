import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import { BackGround } from '../context/Context'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
const NavBar = () => {
    const { setBackground, theme } = React.useContext(BackGround)
    return (
        <div >
            <ul className='navBar'>
                <li ><NavLink
                    // style={(isActive => { return { color: isActive ? 'red' : '' } })}
                    className={theme === "dark" ? 'nav-link' : "nav-link1"} to='/'>Home</NavLink></li>
                <li><NavLink
                    // style={(isActive => { return { color: isActive ? 'red' : '' } })}
                    className='nav-link' to='/about'>About</NavLink></li>
                <li><NavLink
                    // style={(isActive => { return { color: isActive ? 'red' : '' } })}
                    className='nav-link' to='/contact'>Contact</NavLink></li>
                <li><NavLink
                    // style={(isActive => { return { color: isActive ? 'red' : '' } })}
                    className='nav-link ' to='/member' state={{ name: 'kanhu', age: 25 }}>User</NavLink></li>
                <li><NavLink className='nav-link' to='useparams'>Filter</NavLink></li>
                <li><NavLink className='nav-link' to='login'>LogIn</NavLink></li>
                <li>
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked">{theme === 'dark' ? "lightMode" : "darkMode"}</label>
                        <input class="form-check-input" type="checkbox" role="switch" onClick={() => setBackground()} id="flexSwitchCheckChecked" />
                    </div>
                </li>

            </ul>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavLink
                    // style={(isActive => { return { color: isActive ? 'red' : '' } })}
                    className='nav-link' to='/about'>About</NavLink>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar