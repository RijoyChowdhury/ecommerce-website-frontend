import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";

const initialState = {
    productDetails: null,
    categoriesList: null,
    allCategories: null,
    loadingCategories: false,
    loadingCategoriesError: false,
};

const getAllCategories = createAsyncThunk('product/getCategories', async () => {
    try {
        const response = await getData(`/api/category/`);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

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
    extraReducers: builder => {
        builder
        .addCase(getAllCategories.pending, (state, action) => {
            state.loadingCategories = true;
            state.categoriesList = null;
            state.allCategories = null;
            state.loadingCategoriesError = false;
        }).addCase(getAllCategories.fulfilled, (state, action) => {
            state.loadingCategories = false;
            state.categoriesList = action.payload.data.filter(category => category.isTopLevel === true);
            state.allCategories = action.payload.data;
            state.loadingCategoriesError = false;
        }).addCase(getAllCategories.rejected, (state, action) => {
            state.loadingCategories = false;
            state.categoriesList = null;
            state.allCategories = null;
            state.loadingCategoriesError = true;
        })
    },
});

export default productSlice;

export const actions = {
    ...productSlice.actions, 
    getProductDetails,
    submitProductReview,
    getAllCategories,
};