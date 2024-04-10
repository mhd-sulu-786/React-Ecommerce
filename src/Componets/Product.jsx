import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { Card, Button, Col, Container, Row, Image } from 'react-bootstrap';
import checkmark from './checkmark.png'
import PaidIcon from '@mui/icons-material/Paid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Product = ({mod}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await resp.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );



  const ordered = (title) => {
    alert(`${title} has been ordered`);
    setProduct(null);
  };

  const ShowProduct = () => (
    <>
      {product ? (
        <Col md={4} className="my-3">
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className='d-flex flex-column'>


                <th><PaidIcon />Payment Method:</th><td>Cash on Delivery</td>

                <th><LocationOnIcon />Loction:</th><td>kongad po plakkad kerala 678631</td>

              </div>
              <Link >
                <Button variant="success" className="w-100" onClick={() => ordered(product.title)}>
                  Place Order
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Container>
          <center className=" d-flex flex-column align-items-center justify-content-center">
            <center lg={6}>
              <Image src={checkmark} alt="checkmark" />
            </center>
            <Col xs={9}>
              <h2 style={{color:mod?'white':'black'}}
            >Your order is placed</h2>
              <p style={{color:mod?'white':'black'}} >We will contact you as soon as possible</p>
              <NavLink to="/products">
                <Button variant="primary">Continue Shopping</Button>
              </NavLink>
            </Col>
          </center>
        </Container>
      )}
    </>
  );

  return (
    <div style={{
      backgroundColor: mod ? 'black' : 'white', Color: mod ? 'white' : 'black',paddingTop:'100px'}}>
      <Container className="my-1 py-5">
        <Row className="justify-content-center">{loading ? <Loading /> : <ShowProduct />}</Row>
      </Container>
    </div>
  );
};

export default Product;
