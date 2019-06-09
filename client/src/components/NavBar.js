import React from 'react'
import {Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap'

const NavBar = () => { 

    return ( 
        <div>
    <Navbar className ='.navbar' expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Events</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default NavBar;