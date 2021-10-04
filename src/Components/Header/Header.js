import React from 'react';
import './Header.css'
import logo from '../../images/jayeens-garage-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header-section">
            <Navbar className="jg-nav">
                <Container>
                    <Navbar.Brand href="/home">
                        {/* nav bar brand */}
                        <img
                            src={logo}
                            width="100"
                            height="80"
                            className="img-fluid"
                            alt="Jayeens garage logo"
                        />
                        <span className="jg-bname">
                            <span style={{ color: '#FDBD4E' }}>Jayeen<span style={{ color: '#FFFFFF' }}>'</span>s</span> <span style={{ color: '#FFFFFF' }}>Garage</span>
                        </span>
                    </Navbar.Brand>
                    {/*navbar links*/}
                    <Nav className="jg-nav-links">
                        <NavLink className="jg-nav-link" to="/home">Home</NavLink>
                        <NavLink className="jg-nav-link" to="/services">Services</NavLink>
                        <NavLink className="jg-nav-link" to="/about">About us</NavLink>
                        <NavLink className="jg-nav-link" to="/contact">Contact us</NavLink>
                        <Button className="jg-login-btn"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;