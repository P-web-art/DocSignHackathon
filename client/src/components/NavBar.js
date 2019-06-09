import React from 'react'
import {Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap'
import logo from '../imgs/treeLogo.png'

const NavBar = () => { 

    return ( 
        <div>
    <Navbar className ='.navbar' expand="lg">
    <Navbar.Brand href="#home">Placeholding Inc. </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/thread-lists">Home</Nav.Link>
        <Nav.Link href="#link">Events</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    <Form inline>
    <img src = {logo} alt = 'tree logo' className = 'navTreeLogo'/>
    </Form>
    </Navbar>
    </div>
    )
}

export default NavBar;