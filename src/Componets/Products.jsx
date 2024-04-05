import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Products = () => {
    // const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let componentMounted = true;

        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (componentMounted) {
                    const jsonData = await response.json();
                    // setData(jsonData);
                    setFilter(jsonData);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []); // Empty dependency array to run only once after initial render

    const Loading = () => <div>Loading...</div>;

    const ShowProducts = () => (
        <>
            <div className='d-flex justify-content-center my-5 pb-5'>
                <Button variant="outline-dark me-2">All</Button>
                <Button variant="outline-dark me-2">Men's Clothing</Button>
                <Button variant="outline-dark me-2">Women's Clothing</Button>
                <Button variant="outline-dark me-2">Jewelry</Button>
                <Button variant="outline-dark me-2">Electronics</Button>
            </div>
            <Row className='col d-flex container-fluid justify-content-center mx-3 my-3'>
                {filter.map((product) => (
                    <Card key={product.id} className='col-sm-6 col-md-4 my-3 col-lg-3 text-center'>
                        <CardMedia sx={{ height: 140 }} image={product.image} title="" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <p color='grey' style={{ opacity: '0.3' }} className='fs-6 text-left mb-0'>{product.category}</p>
                                <h3>{product.title}</h3>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rs: {product.price}/-<br />
                                <Rating name="read-only" value={product.rate} readOnly />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </Row>
        </>
    );

    return (
        <div>
            <Container className='my-5 py-5'>
                <Row>
                    <Col col-12>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </Col>
                </Row>
                <Row className='justfy-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
