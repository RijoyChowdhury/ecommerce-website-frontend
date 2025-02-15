import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/postData";
// import axios from "axios";

const delay = ms => new Promise(res => setTimeout(res, ms));

const initialState = {
    isLoading: false,
    isUserLoggedIn: false,
    user: null,
    error: null,
    avatar: null,
    name: '',
    wishlist: [],
    order_history: [],
};

const uploadAvatar = createAsyncThunk('user/uploadAvatar', async (formFields) => {
    try {
        // await delay(5000);
        const response = await postFile('/api/image/upload-avatar', formFields);
        return response.data;
    } catch (err) {
        return err.message;
    }
});

const loginUser = createAsyncThunk('user/loginUser', async (formFields) => {
    try {
        // await delay(5000);
        const response = await postData('/api/user/login', formFields);
        return response.data;
    } catch (err) {
        return err.message;
    }
});

const refreshUser = createAsyncThunk('user/refreshUser', async () => {
    try {
        // await delay(5000);
        const response = await getData('/api/user/re-login');
        return response.message;
    } catch (err) {
        return err.message;
    }
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    try {
        // await delay(5000);
        const response = await getData('/api/user/logout');
        return response.message;
    } catch (err) {
        return err.message;
    }
});

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        // await delay(5000);
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
        updateUserDetails: (state, action) => {
            console.log('state');
            console.log(state.user);
            console.log('action');
            console.log(action.payload);
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
            state.avatar = action.payload.avatar;
            state.name = action.payload.name;
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
            state.name = action.payload;
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
        }).addCase(uploadAvatar.fulfilled, (state, action) => {
            state.avatar = action.payload[0];
            state.user.avatar = action.payload[0];
        });
    }
});

export default userSlice;

export const actions = {...userSlice.actions, fetchUser, logoutUser, loginUser, refreshUser, uploadAvatar, uploadPhoto};