import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";

const initialState = {
    cart: null,
    isLoading: false,
    error: false,
};

const getCartDetails = createAsyncThunk('cart/getDetails', async () => {
    try {
        const response = await getData(`/api/cart/`);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const updateCartDetails = createAsyncThunk('cart/updateDetails', async (formFields) => {
    try {
        const response = await postData(`/api/cart/`, formFields);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCartState: (state, action) => {
            state.cart = action.payload;
        },
        addItemToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeCartItem: (state, action) => {
            const cart = state.cart.filter(item => item._id !== action.payload);
            state.cart = cart;
        },
        updateProductQuantity: (state, action) => {
            const {productId, quantity} = action.payload;
            const itemIndex = state.cart.findIndex(item => item._id === productId);
            state.cart[itemIndex].quantity = quantity;
            state.cart = [...state.cart];
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getCartDetails.pending, (state, action) => {
            state.error = null;
            state.cart = null;
            state.isLoading = true;
        }).addCase(getCartDetails.fulfilled, (state, action) => {
            state.error = false;
            state.cart = action.payload.data;
            state.isLoading = false;
        }).addCase(getCartDetails.rejected, (state, action) => {
            state.error = true;
            state.cart = null;
            state.isLoading = false;
        })
    },
});

export default cartSlice;

export const actions = {
    ...cartSlice.actions, 
    getCartDetails,
    updateCartDetails,
};