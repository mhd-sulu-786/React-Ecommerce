// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componets/Navbar';
import ProductList from './Componets/Products';
import Cart from './Componets/Cart';
import Product from './Componets/Product';
import Register from './Componets/Register';
import Login from './Componets/Login';
import Swal from 'sweetalert2';

function App() {
  const [cart, setCart] = useState([]);
  const [mod, setMod] = useState(true);

  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      Swal.fire('Product already in cart','','warning');
      return;
    }

    setCart([...cart, product]);

    Swal.fire('Successfully ','added to cart','success');
  };

  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  const updater = (products) => {
    setCart(products);
  };

  const backgroundColor = (value) => {
    setMod(value);
  };

  return (
    <div className='App' style={{ backgroundColor: mod ? 'black' : 'white' }}>
      <Navbar cartlength={cart.length} background={backgroundColor} />
      <Routes >
        <Route path="/" element={<ProductList handleAdd={handleAddToCart} mod={mod} />} />
        <Route path="/products" element={<ProductList handleAdd={handleAddToCart} mod={mod} />} />
        <Route path="/products/:id" element={<Product mod={mod} />} />
        <Route path="/cart" element={<Cart cart={cart} update={updater} mod={mod} />} />
        <Route path="/register" element={<Register mod={mod} />} />
        <Route path="/login" element={<Login mod={mod} />} />
      </Routes>
    </div>
  );
}

export default App;
