import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sample from './components/Sample';
import LoginSignup from './components/LoginSignup';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './frontend/Home';
import About from './frontend/About';
import OurTeam from './frontend/OurTeam';
import OurImpact from './frontend/OurImpact';
import WhereWeWork from './frontend/WhereWeWork';
import FAQs from './frontend/FAQs';
import LensConcept from './frontend/LensConcept';
import Contact from './frontend/Contact';
import ProductList from './frontend/ProductList';
import CartContainer from './frontend/CartContainer'; 


function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/our-team"
          element={
            <ProtectedRoute>
              <OurTeam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/our-impact"
          element={
            <ProtectedRoute>
              <OurImpact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wherewework"
          element={
            <ProtectedRoute>
              <WhereWeWork />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faqs"
          element={
            <ProtectedRoute>
              <FAQs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lens-concept"
          element={
            <ProtectedRoute>
              <LensConcept />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductList addToCart={handleAddToCart} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
            path="/cart"
            element={
            <ProtectedRoute>
                <CartContainer cartItems={cartItems} setCartItems={setCartItems} />
            </ProtectedRoute>
             }
        />


      </Routes>
    </Router>
  );
}

export default App;
