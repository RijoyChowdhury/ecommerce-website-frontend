import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice.jsx';
import productSlice from './slices/productSlice.jsx';

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        productSlice: productSlice.reducer,
    },
});

export default store;