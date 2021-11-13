import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <NavLink className="navLink" to="/home">Excel Cars</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="navLink" to="/home">Home</NavLink>
                        <NavLink className="navLink" to="/cars">Cars</NavLink>
                        {
                            user.displayName && <Nav>
                                <NavLink className="navLink" to="/dashboard">Dashboard</NavLink>
                                <button className="user-name text-dark fw-bold" >{user.displayName}</button>
                            </Nav>
                        }
                        {
                            user.email ? <button className="nav-button" onClick={logOut}>Log Out</button>
                                :
                                <NavLink className="navLink" to="/login">Login</NavLink>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;