import Home from './views/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './views/ProductsList';
import ProductDetails from './views/ProductDetails';
import Navbar from './components/Navbar';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import Register from './views/Register';
import CartPage from './views/Cart';
import CheckoutPage from './views/Checkout';
import VerifyAccount from './views/VerifyAccount';
import AuthChecker from './components/AuthChecker';
import UserPage from './views/UserPage';
import CustomModal from './components/CustomModal';

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route element={<AuthChecker />}>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Route>
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verifyaccount" element={<VerifyAccount />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
            <Footer />
            <Toaster />
            <CustomModal />
        </>
    )
}

export default App;
