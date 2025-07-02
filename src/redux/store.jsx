import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice.jsx';
import productSlice from './slices/productSlice.jsx';
import cartSlice from './slices/cartSlice.jsx';

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        productSlice: productSlice.reducer,
        cartSlice: cartSlice.reducer,
    },
});

export default store;