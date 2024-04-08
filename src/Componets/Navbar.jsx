import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import reactlogo from './react-logo.png';

const Navbar = ({ cartlength}) => {
    const login = false; // Placeholder for login status

    return (
        <div className='sticky-top'>
            <BootstrapNavbar expand="lg" className="bg-body-tertiary big-white py-3 shadow-sm ">
                <Container>
                    <BootstrapNavbar.Brand className='fw-bold fs-3' href="#">
                        <img src={reactlogo} className='px-2 react-logo' width={'60px'} alt='react-logo' />Shanu's Collections
                    </BootstrapNavbar.Brand>

                    <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
                    <BootstrapNavbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto  my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >   <NavLink style={{ textDecoration: 'none' }} to={'/'}>
                            <Nav.Link className='nav-link active fw-bold' href="#action1">
                                Home
                            </Nav.Link>
                        </NavLink>
                            
                            <NavLink style={{ textDecoration: 'none' }} to={'/products'}>
                            <Nav.Link className='nav-link  fw-bold' href="#action2">
                                Products
                            </Nav.Link>
                            </NavLink>
                           
                            <Nav.Link className='nav-link  fw-bold' href="#action3">
                                About
                            </Nav.Link>
                            <Nav.Link className='nav-link  fw-bold' href="#action4">
                                Contact
                            </Nav.Link>
                        </Nav>
                        {login ? (
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        ) : (
                            <div className='buttons d-flex gap-2 '>
                                <NavLink to={'/login'}>
                                    <Button variant="outline-dark">
                                        <i className="fa fa-sign-in me-1 mx-1 "></i> Login
                                    </Button>
                                </NavLink>
                                <NavLink to={'/register'}>
                                    <Button variant="outline-success">
                                        <i className="fa fa-user-plus ms-2 mx-1 "></i> Register
                                    </Button>
                                </NavLink>
                                <NavLink to={'/cart'} >
                                    <Button variant="outline-info">
                                        <i className="fa fa-shopping-cart ms-2 mx-1 "></i>Cart ({cartlength})
                                    </Button>
                                </NavLink>
                            </div>
                        )}
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </div>
    );
};

export default Navbar;
