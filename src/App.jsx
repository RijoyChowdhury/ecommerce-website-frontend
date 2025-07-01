import Home from './views/Home';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import BackToTop from './components/BackToTop';
import { actions } from './redux/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isMounted = useRef(false)
    const { user } = useSelector(state => state.userSlice);
    const { fetchUser } = actions;
    const isAccessTokenPresent = () => localStorage.getItem('isAccessTokenPresent') === 'true';

    const list = ['/login', '/register', '/verifyaccount', '/forgotpassword'];

    const checkUserPresent = async () => {
        if (list.includes(location.pathname)) return;
        if (!user && isAccessTokenPresent()) {
            const response = await dispatch(fetchUser()).unwrap();
            if (response.success) {
                // notifySuccess('Login successful');
            }
        }
    };

    if (!isMounted.current) {
        checkUserPresent();
    }

    useEffect(() => {
        isMounted.current = true
    }, [])

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
            <BackToTop />
        </>
    )
}

export default App;
