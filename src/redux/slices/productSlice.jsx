import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";

const initialState = {
    productDetails: null,
};

const getProductDetails = createAsyncThunk('product/getDetails', async (productId) => {
    try {
        const response = await getData(`/api/product/${productId}`);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const submitProductReview = createAsyncThunk('product/postProductReview', async (formFields) => {
    try {
        const {productId} = formFields;
        const response = await postData(`/api/review/${productId}`, formFields);
        console.log('response');
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

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: builder => {},
});

export default productSlice;

export const actions = {
    ...productSlice.actions, 
    getProductDetails,
    submitProductReview,
};