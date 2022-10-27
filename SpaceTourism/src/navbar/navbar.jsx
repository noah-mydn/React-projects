import React from 'react'
import './navbar.css';
import {useMediaQuery} from  'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';

export default function NavigationBar() {

    const isTablet = useMediaQuery({ query: '((min-width: 569px) and (max-width:768px))' });

  return (
            <Navbar expand='sm' className="navigation">
                <Link to='/'>
                    <img src='./assets/shared/logo.svg' alt='page logo' id='logo' loading='lazy'/>
                </Link>
                    <hr className='horizontal-line'/>
    
                <Navbar.Toggle aria-controls='offCanvasNavigation'>
                    <MenuIcon fontSize="large" sx={{color:"white"}}/>
                </Navbar.Toggle> 
                    
                <Navbar.Offcanvas
                id='offCanvasNavigation'
                aria-labelledby='offCanvasNavigationLabel'
                placement='end' 
                className='canvas-style'
                >
                <Offcanvas.Header closeButton closeVariant='white' closeLabel='close'>
                    <Offcanvas.Title id='offCanvasNavigation'>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav id="hamburgerMenu" className='nav-container' responsive='sm'>                          
                            <Nav.Item>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link text-light' : 'nav-link')} 
                                to='/' end>
                                    {!isTablet && <b>00</b>}&nbsp;&nbsp;HOME</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link text-light' : 'nav-link')} 
                                to='/destination'>
                                    {!isTablet && <b>01</b> }&nbsp;&nbsp;DESTINATION</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link text-light' : 'nav-link')} 
                                to='/crew'>
                                    {!isTablet && <b>02</b> }&nbsp;&nbsp;CREW</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link text-light' : 'nav-link')} 
                                to='/technology'>
                                    {!isTablet && <b>03</b> }&nbsp;&nbsp;TECHNOLOGY</NavLink>
                            </Nav.Item> 
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
  )
}
