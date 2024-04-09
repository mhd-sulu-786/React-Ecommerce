import React, { useEffect, useState } from 'react';
import { Button, Row, Container, Col, Image } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import checkmark from './checkmark.png';

const Cart = ({ cart, update }) => {
    const [carts, setCarts] = useState({ });
    const [orders, setOrders] = useState(false);
    const [ordersuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        setCarts(cart);
    }, [cart]); 

    const addExtra = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        update(updatedCart);
    }

    const resultHtml = (count, names, prices) => {
        let total = 0;
        return (
            <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Items</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, index) => {
                        total += parseFloat(prices[index]);
                        return (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{name}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{prices[index]}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Total</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>{total}</td>
                    </tr>
                </tbody>
            </table>
        );
    };
    

    const checkout = () => {
        resultHtml(carts.length, carts.map(product => product.title), carts.map(product => product.price));
        setOrders(true);
    };

    const placeOrder = () => {
           setOrderSuccess(true);
    };
    const clear = () => {
        const updatedCart = cart.filter(product => product !== product);
        update(updatedCart)
       
    }
    
    const Ordered = () => {
        return (
            <Container>
                <center className="d-flex flex-column align-items-center justify-content-center">
                    <center lg={6}>
                        <Image src={checkmark} alt="checkmark" />
                    </center>
                    <Col xs={9}>
                        <h2>Your order is placed</h2>
                        <p>We will contact you as soon as possible</p>
                        <NavLink to="/products">
                            <Button variant="primary" onClick={()=>clear()}>Continue Shopping</Button>
                        </NavLink>
                    </Col>
                </center>
            </Container>
        )
    }

    return (
        <div id='carts'>
            {ordersuccess ? <Ordered /> : !orders && carts ? (
                <Row className='col d-flex container-fluid justify-content-center mx-3 my-3'>
                    {carts.length > 0 ? (
                        carts.map((product) => (
                            <Card key={product.id} className='col-sm-6 col-md-4 my-3 col-lg-3 text-center p-3'>
                                <CardMedia sx={{ height: 200 }} image={product.image} title="" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product && product.title && (
                                            <p color='grey' style={{ opacity: '0.3' }} className='fs-6 d-flex align-items-left mb-0'>{product.category}</p>
                                        )}
                                        {product && product.title && (
                                            <h3>{product.title.length > 11 ? product.title.slice(0, 11) + '...' : product.title}</h3>
                                        )}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ({product.count || 1}) Rs: {product.count || 1 * parseFloat(product.price)}/-<br />
                                        {product.rating && (
                                            <Rating name="read-only" value={product.rating.rate || 0} readOnly />
                                        )}
                                    </Typography>
                                </CardContent>
                                <CardActions className='d-flex justify-content-center'>
                                    <Button size="small" variant="outline-primary" onClick={() => addExtra(product.id)}>Remove</Button>
                                </CardActions>
                            </Card>
                        ))
                    ) : (
                        <h1 className='text-center text-danger'>Cart is empty <br />
                            <NavLink to="/products">
                                <Button variant="primary">Start Shopping</Button>
                            </NavLink>
                        </h1>
                    )}
                </Row>
            ) : orders && (
                <Col  className='mt-3'>
                <Container  className='d-flex flex-column align-items-center justfy-content-center' >
                    {resultHtml(carts.length, carts.map(product => product.title), carts.map(product => product.price))}
                    
                     <th>kongad po plakkad kerala 678631</th>
                     <th>Cash on Delivery</th>
                     
                    
                    <NavLink  className={'w-100'} >
                        <Button className=' w-100 btn-success text-white' onClick={() => placeOrder()} variant="outline-dark">Place Order's</Button>
                    </NavLink>
                </Container>
               </Col>
            )}
            <Container className='container-fluid sticky-bottom'>
                {carts.length > 0 && !orders && (
                    <NavLink className={'w-100'}>
                        <Button className='w-100 btn-success text-white' onClick={() => checkout()} variant="outline-dark">Checkout Now</Button>
                    </NavLink>
                )}
            </Container>
        </div>
    );
}

export default Cart;
