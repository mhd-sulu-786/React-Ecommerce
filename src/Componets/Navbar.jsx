import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed import to avoid conflict
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
    const login = false
    return (
        <div>
            <BootstrapNavbar expand="lg" className="bg-body-tertiary big-white py-3 shadow-sm ">
                <Container >
                    <BootstrapNavbar.Brand className='fw-bold fs-3' href="#">
                        Shanu's Collection's
                    </BootstrapNavbar.Brand>

                    <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
                    <BootstrapNavbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto  my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='nav-link active fw-bold' href="#action1 ">
                                Home
                            </Nav.Link>
                            <Nav.Link className='nav-link  fw-bold' href="#action2 ">
                                Products
                            </Nav.Link>
                            <Nav.Link className='nav-link  fw-bold' href="#action3 ">
                                About
                            </Nav.Link>
                            <Nav.Link className='nav-link  fw-bold' href="#action4 ">
                                Contact
                            </Nav.Link>

                        </Nav>
                        {login ?
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> :
                            <div className='buttons d-flex gap-2 '>
                                <Button variant="outline-dark">
                                    <i className="fa fa-sign-in me-1 mx-1 "></i> Login</Button>
                                <Button variant="outline-success">
                                    <i className="fa fa-user-plus ms-2 mx-1 "></i> Register</Button>
                                <Button variant="outline-info">
                                    <i className="fa fa-shopping-cart ms-2 mx-1 "></i>Cart (0)</Button>
                            </div>
                        }
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </div>
    );
};

export default Navbar;
