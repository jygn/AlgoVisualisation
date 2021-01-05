import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function AppNav() {  
    return ( 
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">AV</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/"> Home </Nav.Link>
                    {/* <Nav.Link href="/algos-info"> Algorithms </Nav.Link> */}
                </Nav>
            </Navbar>
        </>
    );
};

 
export default AppNav;