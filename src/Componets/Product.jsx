import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { Card, Button, Col, Container, Row, Image } from 'react-bootstrap';
import checkmark from './checkmark.png'

const Product = () => {
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

  const location = 'Current location';
  const paymentMethod = 'Cash on Delivery only';

  const ordered = (title) => {
    alert(`${title} has been ordered`);
    setProduct(null);
  };

  const ShowProduct = () => (
    <>
      {product? (
        <Col md={4} className="my-3">
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div>
                <strong>Payment Method:</strong> {paymentMethod}
              </div>
              <div>
                <strong>Location:</strong> {location}
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
              <h2>Your order is placed</h2>
              <p>We will contact you as soon as possible</p>
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
    <div>
      <Container className="my-5 py-5">
        <Row className="justify-content-center">{loading ? <Loading /> : <ShowProduct />}</Row>
      </Container>
    </div>
  );
};

export default Product;
