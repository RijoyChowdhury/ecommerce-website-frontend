import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice.jsx';
import productSlice from './slices/productSlice.jsx';
import cartSlice from './slices/cartSlice.jsx';
import wishlistSlice from './slices/wishlistSlice.jsx';

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        productSlice: productSlice.reducer,
        cartSlice: cartSlice.reducer,
        wishlistSlice: wishlistSlice.reducer,
    },
});

export default store;