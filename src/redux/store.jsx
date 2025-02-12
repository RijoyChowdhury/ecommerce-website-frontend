import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice.jsx';

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
    },
});

export default store;