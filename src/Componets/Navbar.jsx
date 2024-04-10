import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({ cartlength, background }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mod, setMod] = useState(true);
    const login = false;

    const handleMenuToggle = (val) => {
        setIsMenuOpen(val);
    };

    const toggleColorMode = () => {
        setMod(!mod);
        background(!mod); 
        handleMenuToggle(false); // Call the background function to update the background color mode
    };

    return (
        <div className='position-fixed fixed-top container-fluid mx-0 px-2' style={{ backgroundColor: mod ? 'black' : 'white' }}>
            <BootstrapNavbar expand="lg" className="py-3 shadow-sm" style={{ backgroundColor: mod ? 'black' : 'white', color: mod ? 'white' : 'black' }}>
                <Container fluid>
                    <BootstrapNavbar.Brand className='fw-bold fs-3' style={{ color: mod ? 'white' : 'black' }} href="#">
                        <ShoppingBagIcon className='pb-2' />Shanu's
                    </BootstrapNavbar.Brand>

                    <BootstrapNavbar.Toggle style={{ backgroundColor: 'white' }} onClick={()=>handleMenuToggle(!isMenuOpen)} aria-controls="navbarScroll" />
                    <BootstrapNavbar.Collapse id="navbarScroll" className={isMenuOpen ? 'show' : ''} >
                        <Nav className="mx-auto my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink style={{ textDecoration: 'none' }} to={'/'} >
                                <Nav.Link style={{ color: mod ? 'white' : 'black' }} className='nav-link active fw-bold' href="#action1">Home</Nav.Link>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to={'/products'} >
                                <Nav.Link style={{ color: mod ? 'white' : 'black' }} className='nav-link fw-bold' href="#action2">Products</Nav.Link>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to={'/about'} >
                                <Nav.Link style={{ color: mod ? 'white' : 'black' }} className='nav-link fw-bold' href="#action3">About</Nav.Link>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to={'/contact'} >
                                <Nav.Link style={{ color: mod ? 'white' : 'black' }} className='nav-link fw-bold' href="#action4">Contact</Nav.Link>
                            </NavLink>
                        </Nav>
                        {!login ? (
                            <div className='buttons d-flex gap-2'>
                                <NavLink to={'/login'} >
                                    <Button variant={!mod ? "outline-dark" : "outline-light"}>
                                        <LoginIcon /> Login
                                    </Button>
                                </NavLink>
                                <NavLink to={'/register'} >
                                    <Button variant="outline-success">
                                        <AppRegistrationIcon /> Register
                                    </Button>
                                </NavLink>
                                <NavLink to={'/cart'} >
                                    <Button variant="outline-info">
                                        <ShoppingCartIcon /> Cart ({cartlength})
                                    </Button>
                                </NavLink>
                                <Button onClick={toggleColorMode} variant={!mod ? "dark" : "light"}>
                                    {mod ? <LightModeIcon /> : <DarkModeIcon />}
                                </Button>
                            </div>
                        ) : (
                            <Form className="d-flex" >
                                <Form.Control type="search" placeholder="Search" className="" aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        )}
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </div>
    );
};

export default Navbar;
