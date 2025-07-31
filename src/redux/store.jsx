import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice.jsx';
import productSlice from './slices/productSlice.jsx';
import cartSlice from './slices/cartSlice.jsx';
import wishlistSlice from './slices/wishlistSlice.jsx';

const appReducer = combineReducers({
    userSlice: userSlice.reducer,
    productSlice: productSlice.reducer,
    cartSlice: cartSlice.reducer,
    wishlistSlice: wishlistSlice.reducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        // Return the initial state for all reducers
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;