// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componets/Navbar';
import ProductList from './Componets/Products';
import Cart from './Componets/Cart';
import Product from './Componets/Product';

function App() {
  const [cart, setCart] = useState([]); 
 const [mod,setmod]=useState(true);

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
  const backgroundcolor = (value)=>{
    setmod(value);

  }

  return (
    <div style={{backgroundColor:mod?'black':'white'}}>
      <Navbar cartlength={cart.length} background={backgroundcolor} />
      <Routes>
        <Route path="/" element={<ProductList handleAdd={handleAddToCart} mod={mod} />} />
<Route path="/products" element={<ProductList handleAdd={handleAddToCart} mod={mod}  />} />
<Route path="/products/:id" element={<Product mod={mod}  />} />

        <Route path="/cart" element={<Cart cart={cart} update={updater} mod={mod}  />} />
        <Route path="/register" element={<Cart mod={mod}  />} />
        <Route path="/login" element={<Cart mod={mod}  />} />
      </Routes>
    </div>
  );
}

export default App;
