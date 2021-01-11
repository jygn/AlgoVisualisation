import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './AppNav.css';

function AppNav() {  
    return ( 
        <>
            <Navbar>
                <Navbar.Brand><Link to={'/api/algos-info/'}> <VisibilityIcon/> AV </Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to={'/api/algos-info/'}> Home </Link>
                </Nav>
            </Navbar>
        </>
    );
};

 
export default AppNav;