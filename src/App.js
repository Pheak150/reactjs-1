import React from "react";
import Home from "./Pages/Home";
import ShopGride from "./Pages/ShopGride";
import Blog from "./Pages/Blog";
import ShopDetail from "./Pages/ShopDetail";
import Shoppingcart from "./Pages/Shoppingcart";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contacts";
import Checkout from "./Pages/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* English */}
          <Route path="/home" element={<Home />} />
          <Route path="/shopgrid" element={<ShopGride />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shopdetail" element={<ShopDetail />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
