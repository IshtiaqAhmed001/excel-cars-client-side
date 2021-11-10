import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink className="navLink" to="/home">Excel Cars</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="navLink" to="/home">Home</NavLink>
                        <NavLink className="navLink" to="/cars">Cars</NavLink>
                        <NavLink className="navLink" to="/login">Login</NavLink>
                        {
                            user.displayName && <Nav>
                                <NavLink className="navLink" to="/addnewcar">Add a New Car</NavLink>
                                <NavLink className="navLink" to="/myorders">My Orders</NavLink>
                                <NavLink className="navLink" to="/manageallbookings">Manage All Orders</NavLink>
                                <button className="user-name text-danger fw-bold" >{user.displayName}</button>
                            </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;