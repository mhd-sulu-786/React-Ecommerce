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
import AboutPage from './Componets/About';
import ContactForm from './Componets/Contact';

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
  // const [funny,setfunny]=useState(false);
  // const Funs=(value)=>{
  //   setfunny(value);
  //   console.log(funny);
  // }

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
    <div className='App' style={{ backgroundColor: mod ? 'black' : 'white'/*,...(funny ? funnyStyle : {})*/  }}>
      <Navbar cartlength={cart.length} background={backgroundColor} /*Fun={Funs}*/ />
      <Routes >
        <Route path="/" element={<ProductList handleAdd={handleAddToCart} mod={mod} />} />
        <Route path="/products" element={<ProductList handleAdd={handleAddToCart} mod={mod} />} />
        <Route path="/products/:id" element={<Product mod={mod} />} />
        <Route path="/cart" element={<Cart cart={cart} update={updater} mod={mod} />} />
        <Route path="/register" element={<Register mod={mod} />} />
        <Route path="/login" element={<Login mod={mod} />} />
        <Route path="/about" element={<AboutPage mod={mod} />} />
        <Route path="/contact" element={<ContactForm mod={mod} />} />


      </Routes>
    </div>
  );
}
// const funnyStyle = {
//   cursor: 'grab',
//   border: '2px solid rgb(109, 244, 158)',
//   color: 'rgb(25, 25, 25)',
//   backgroundColor: 'white',
//   boxShadow: '0 0 5px rgb(109, 244, 158)',
//   borderRadius: '20%',
//   transition: '0.5s',
//   transform: 'scale(0.5.1)'
// };
export default App;
