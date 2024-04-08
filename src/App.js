// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import ProductList from './Componets/Products';
import Cart from './Componets/Cart';
import Product from './Componets/Product';

function App() {
  const [cart, setCart] = useState([]); 


  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
        alert('Product already in cart');
        return;
    }
    setCart([...cart, product]);

    alert('Successfully added to cart');
}


  useEffect(() => {
    console.log("Updated Cart:", cart);
    
  }, [cart]); 
  function updater(products) {
    setCart(products)
  }

  return (
    <div>
      <Navbar cartlength={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/products" element={<ProductList handleAdd={handleAddToCart} />} />
<Route path="/products/:id" element={<Product/>} />

        <Route path="/cart" element={<Cart cart={cart} update={updater} />} />
        <Route path="/register" element={<Cart />} />
        <Route path="/login" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
