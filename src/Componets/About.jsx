import React from 'react';
import Container from 'react-bootstrap/Container';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const AboutPage = ({mod}) => {
  return (
    <Container {...(mod ? {style:{backgroundColor:'black',color:'white'}} : {style:{backgroundColor:'white',color:'black'}})}>
      <div>
        <h1>About Us</h1>
        <p>Welcome to our website! We are dedicated to providing high-quality products and excellent customer service.</p>
       
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or inquiries, please feel free to reach out to us:</p>
        <ul>
          <li>Email: muhammadsulaimant162@gmail.com</li>
          <li>Phone: +91 9037435846</li>
          <li>Address:  kongad Palakkad, kerala, India</li>
        </ul>
        
        <h2>Connect With Us</h2>
        <p>Stay updated with our latest news and promotions by following us on social media:</p>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/muhammadsulaimant.kongad/"><Facebook /></a></li>
          <li>Twitter: <a href="https://twitter.com/Mhd_sulu_786"><Twitter /></a></li>
          <li>Instagram: <a href="https://www.instagram.com/mhd_sulu_786/"><Instagram /></a></li>
          <a href="https://www.instagram.com/mhd_sulu_786/" > Created by @mhd_sulu_786</a>
        </ul>
      </div>
    </Container>
  );
};

export default AboutPage;
