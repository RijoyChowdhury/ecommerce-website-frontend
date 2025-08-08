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
import { actions as userActions } from './redux/slices/userSlice';
import { actions as cartActions } from './redux/slices/cartSlice';
import { actions as productActions } from './redux/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import PageNotFound from './views/PageNotFound';
import PaymentSuccess from './views/PaymentSuccess';

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isMounted = useRef(false)
    const { user } = useSelector(state => state.userSlice);
    const { fetchUser } = userActions;
    const { getAllCategories, getFeaturedProducts } = productActions;
    const { getCartDetails, updateCartState } = cartActions;
    const isAccessTokenPresent = () => localStorage.getItem('isAccessTokenPresent') === 'true';

    const list = ['/login', '/register', '/verifyaccount', '/forgotpassword'];

    const checkUserPresent = async () => {
        if (list.includes(location.pathname)) return;
        if (!user && isAccessTokenPresent()) {
            const response = await dispatch(fetchUser()).unwrap();
            if (response.success) {
                dispatch(getCartDetails());
            }
        }
    };

    const handleBeforeUnload = (event) => {
        // Perform actions here before the tab/browser closes
        // updateUserDetails(true);

        // To prompt a confirmation dialog (modern browsers may restrict this):
        // event.preventDefault();
        event.returnValue = ''; // Required for some browsers to show the dialog
    };

    if (!isMounted.current) {
        checkUserPresent();
    }

    useEffect(() => {
        isMounted.current = true;
        dispatch(getAllCategories());
        dispatch(getFeaturedProducts())
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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
                    <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
                </Route>
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verifyaccount" element={<VerifyAccount />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            <Toaster />
            <CustomModal />
            <BackToTop />
        </>
    )
}

export default App;
