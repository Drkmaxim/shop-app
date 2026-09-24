import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Help from "./Pages/Help/Help";
import Register from "./Pages/Register/Register";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view/products" element={<Products />} />
          <Route path="/view/products/:categoryId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </Provider>
  );
}

export default App;
