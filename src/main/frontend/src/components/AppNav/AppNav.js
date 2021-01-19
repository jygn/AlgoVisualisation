import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './AppNav.css';

function AppNav() {  
    return ( 
        <>
            <Navbar>
                <Navbar.Brand><Link to={'/api/home/'}> <VisibilityIcon/> AV </Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to={'/api/home/'}> Home </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/api/algos-info/'}> Algos_description </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

 
export default AppNav;