import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Register = ({mod}) => {
  return (
    <Row className="justify-content-center">
      <Col md={6} style={{ padding: '90px' ,backgroundColor:mod?'black':'white',color:mod?'white':'black'}}>
        <Form>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group className="mb-3 form-check">
            <Form.Check type="checkbox" label="Subscribe to our newsletter" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
