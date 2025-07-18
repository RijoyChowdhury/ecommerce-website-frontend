import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, deleteData } from "../../api/dataService";

const initialState = {
    loadingWishlist: true,
    wishlist: null,
    wishlistMetadata: null,
    error: false,
    isWishlistDirty: false,
};

const getWishlist = createAsyncThunk('wishlist/getWishlist', async () => {
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

const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (productId) => {
    try {
        console.log(`/api/wishlist/addToWishlist`);
        const response = await postData(`/api/wishlist/addToWishlist`, {productId});
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

const checkInWishlist = createAsyncThunk('wishlist/checkWishlist', async (productId) => {
    try {
        console.log(`/api/wishlist/checkWatchlist/${productId}`);
        const response = await getData(`/api/wishlist/checkWatchlist/${productId}`);
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

const deleteItemFromWishlist = createAsyncThunk('wishlist/deleteWishlistItem', async (id) => {
    try {
        console.log(`/api/wishlist/checkWatchlist/${id}`);
        const response = await deleteData(`/api/wishlist/${id}`);
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
        removeItemFromWishlist: (state, action) => {
            const wishlist = state.wishlist.filter(item => item._id !== action.payload);
            state.wishlist = wishlist;
        },
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
            state.wishlistMetadata = action.payload.result_metadata;
            state.isWishlistDirty = false;
            state.error = false;
        }).addCase(getWishlist.rejected, (state, action) => {
            state.loadingWishlist = false;
            state.wishlist = null;
            state.error = true;
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isWishlistDirty = true;
        }).addCase(deleteItemFromWishlist.pending, (state, action) => {
            state.loadingWishlist = true;
            state.wishlist = null;
        }).addCase(deleteItemFromWishlist.fulfilled, (state, action) => {
            state.loadingWishlist = false;
            state.isWishlistDirty = true;
        })
    }
});

export default wishlistSlice;

export const actions = {
    ...wishlistSlice.actions,
    getWishlist,
    addToWishlist,
    checkInWishlist,
    deleteItemFromWishlist,
};