import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";

const initialState = {
    loadingWishlist: true,
    wishlist: null,
    error: false,
};

const getWishlist = createAsyncThunk('wishlist/getProducts', async () => {
    try {
        console.log(`/api/wishlist/`);
        const response = await getData(`/api/wishlist/`);
        console.log(response);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
        .addCase(getWishlist.pending, (state, action) => {
            state.loadingWishlist = true;
            state.wishlist = null;
            state.error = false;
        }).addCase(getWishlist.fulfilled, (state, action) => {
            state.loadingWishlist = false;
            state.wishlist = action.payload.data;
            state.error = false;
        }).addCase(getWishlist.rejected, (state, action) => {
            state.loadingWishlist = false;
            state.wishlist = null;
            state.error = true;
        })
    }
});

export default wishlistSlice;

export const actions = {
    ...wishlistSlice.actions,
    getWishlist,
};