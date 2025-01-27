import Home from './views/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './views/ProductsList';
import ProductDetails from './views/ProductDetails';
import Navbar from './components/Navbar';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
