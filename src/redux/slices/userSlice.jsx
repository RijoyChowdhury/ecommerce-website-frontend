import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from "../../api/postData";

const delay = ms => new Promise(res => setTimeout(res, ms));

const initialState = {
    isLoading: false,
    isUserLoggedIn: false,
    user: null,
    error: null,
};

const loginUser = createAsyncThunk('user/loginUser', async (formFields) => {
    try {
        await delay(5000);
        const response = await postData('/api/user/login', formFields);
        return response.message;
    } catch (err) {
        return err.message;
    }
});

const refreshUser = createAsyncThunk('user/refreshUser', async () => {
    try {
        await delay(5000);
        const response = await getData('/api/user/re-login');
        return response.message;
    } catch (err) {
        return err.message;
    }
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    try {
        await delay(5000);
        const response = await getData('/api/user/logout');
        return response.message;
    } catch (err) {
        return err.message;
    }
});

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        await delay(5000);
        const response = await getData('/api/user/details');
        return response.data;
    } catch (err) {
        return err.message;
    }
});

// experimental
const uploadPhoto = createAsyncThunk('user/uploadAvatar', async (img) => {
    try {
        const response = await getData('/api/user/details');
        return response.data;
    } catch (err) {
        return err.message;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserDetails: (state, action) => {
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
            state.isUserLoggedIn = false;
            localStorage.setItem('isAccessTokenPresent', false);
            state.error = null;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUserLoggedIn = true;
            localStorage.setItem('isAccessTokenPresent', true);
            state.error = null;
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isUserLoggedIn = false;
            localStorage.setItem('isAccessTokenPresent', false);
            state.error = action.payload;
        }).addCase(logoutUser.pending, (state, action) => {
            // state.isLoading = true;
            state.error = null;
        }).addCase(logoutUser.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.isUserLoggedIn = false;
            state.user = null;
            localStorage.setItem('isAccessTokenPresent', false);
        }).addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(refreshUser.pending, (state, action) => {
            state.isLoading = true;
            // state.isUserLoggedIn = false;
            // localStorage.setItem('isAccessTokenPresent', false);
            state.error = null;
        }).addCase(refreshUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUserLoggedIn = true;
            // localStorage.setItem('isAccessTokenPresent', true);
            state.error = null;
        }).addCase(refreshUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isUserLoggedIn = false;
            localStorage.setItem('isAccessTokenPresent', false);
            state.error = action.payload;
        });
    }
});

export default userSlice;

export const actions = {...userSlice.actions, fetchUser, logoutUser, loginUser, refreshUser, uploadPhoto};