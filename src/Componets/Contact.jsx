import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
const ContactForm = ({mod}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!formData.name.trim()) {
      
      Swal.fire('Please enter your name','pls fill','warning');
      return;
    }
  
    if (!formData.email.trim()) {
      Swal.fire('Please enter your email','pls fill','warning');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire('Please enter a valid email address','pls fill','warning');
      return;
    }
  
    if (!formData.message.trim()) {
      Swal.fire('Please enter your message','pls fill','warning');
      return;
    }
  
    
        Swal.fire('Email sent successfully!', '', 'success');
        // You can show a success message or redirect the user to a thank you page
      
    
  
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  

  return (
    <Container className="mt-5"  {...(mod ? {style:{backgroundColor:'black',color:'white'}} : {style:{backgroundColor:'white',color:'black'}})}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
