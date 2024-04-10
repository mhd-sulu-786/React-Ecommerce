import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Products = ({ handleAdd,mod}) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let componentMounted = true;
      
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (componentMounted) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    setFilter(jsonData);
                    setLoading(false); // Set loading to false after data is fetched
                }
            } catch (error) {
                console.error("Error fetching products: ", error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []); 
    const Loading = () => {
        return (
            <Row className='col d-flex container-fluid justify-content-center mx-3 my-3'>
                <div className="col-md-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={300} />
                </div>
            </Row>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }


    const ShowProducts = () => (
        <>
                   <div className='d-flex flex-wrap justify-content-center my-5 pb-5' id='action2'>
            <Button variant={!mod ? "outline-dark me-2 mb-2 mb-sm-0" : "outline-light me-2 mb-2 mb-sm-0"} onClick={() => setFilter(data)}>All</Button>
            <Button variant={!mod ? "outline-dark me-2 mb-2 mb-sm-0" : "outline-light me-2 mb-2 mb-sm-0"} onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
            <Button variant={!mod ? "outline-dark me-2 mb-2 mb-sm-0" : "outline-light me-2 mb-2 mb-sm-0"} onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
            <Button variant={!mod ? "outline-dark me-2 mb-2 mb-sm-0" : "outline-light me-2 mb-2 mb-sm-0"} onClick={() => filterProduct("jewelry")}>Jewelry</Button>
            <Button variant={!mod ? "outline-dark me-2 mb-2 mb-sm-0" : "outline-light me-2 mb-2 mb-sm-0"} onClick={() => filterProduct("electronics")}>Electronics</Button>
        </div>
            <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center my-3'>
                {filter.map((product) => (
                    <Card key={product.id} className='col-sm-6 col-md-4 my-3 col-lg-3 text-center p-3 me-2  ' style={{
                        backgroundColor:!mod?'black':'white',
                    }}>
                        <CardMedia sx={{ height: 200 }} image={product.image} title="" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <p  style={{ opacity: '0.3',color:!mod?'white':'black' }} className='fs-6 d-flex align-items-left mb-0'>{product.category}</p>
                                <h3  style={{color:!mod?'white':'black'}}>{product.title.length > 11 ? product.title.slice(0, 11) + '...' : product.title}</h3>
                            </Typography>
                            <Typography variant="body2"  style={{color:!mod?'white':'black'}} >
                                Rs: {product.price}/-<br />
                                <Rating name="read-only" value={product.rating.rate} readOnly />
                            </Typography>
                        </CardContent>
                        <CardActions className='d-flex justify-content-center'>
                            <NavLink to={`/products/${product.id}`}><Button size="small" variant="outline-primary" >Buy Now</Button></NavLink>
                            <Button size="small" variant="outline-warning" onClick={() => handleAdd(product)} ><AddShoppingCartIcon/>Add to Cart</Button>

                        </CardActions>
                    </Card>
                ))}
            </Row>
        </>
    );

    return (
        <div className='container-fluid' >
            <Home/>
            <Container className='my-5 py-5'>
                <Row>
                    <Col col-12>
                        <h1 className='display-6 fw-bolder text-center'  style={{color:mod?'white':'black'}} >Latest Products</h1>
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