import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


const Products = () => {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;
    const getProducts = async () => {
        setloading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted) {
            setdata(await response.clone().json());
            setfilter(await response.json());
            setloading(false);
            // console.log(filter);

        }
        return () => {
            componentMounted = false;
            componentMounted = false;

        }
    }
    useEffect(() => {
        getProducts();
    });
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    };
    const ShowProducts = () => {
        return (
            <>
                <div className='d-flex  justify-content-center my-5 pb-5'>
                    <Button variant="outline-dark me-2">
                        All
                    </Button>
                    <Button variant="outline-dark me-2">
                        Men's Clothing
                    </Button>
                    <Button variant="outline-dark me-2">
                        Women's Clothing
                    </Button>
                    <Button variant="outline-dark me-2">
                        Jewelery's
                    </Button>
                    <Button variant="outline-dark me-2">
                        Electronic's
                    </Button>
                </div>
                < Row className='col d-flex container-fluid justify-content-center  mx-3 my-3'>{
                    filter.map((product) => {
                        return (




                            <Card className='  col-sm-6 col-md-4 my-3  col-lg-3 text-center' id={product.id}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.image}
                                    title=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    <p color='grey' className='fs-6 text-left mb-0 '>{product.category}</p>
                                        <h3>{product.title}</h3>
                                        
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Rs: {product.price}/-<br/>
                                       <Rating name="read-only" value={product.rate} readOnly />

                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>




                        )
                    })}   </Row>
            </>
        )
    }


    return (
        <div>
            <Container className='my-5 py-5 '>
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
    )
}

export default Products