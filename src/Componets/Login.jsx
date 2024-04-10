import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'
const Login = ({mod}) => {
  return (
    <Row className="justify-content-center">
      <Col md={6} style={{ padding: '90px' ,backgroundColor:mod?'black':'white',color:mod?'white':'black'}}>
        <Form>
          <h2 className="text-center mb-4">Login</h2>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={() =>  Swal.fire(' it\'s not Currently working','Sorry','warning')} variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
