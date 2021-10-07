import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
    return (
        <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Container>
                <ReactBootStrap.Navbar.Brand href="#home">Commerce Bank</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="me-auto">
                        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#link">Transaction Summary</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="Notifications" id="basic-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Notification Rules</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Add/Edit/Delete Rules</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">About</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    );
}

export default NavBar;