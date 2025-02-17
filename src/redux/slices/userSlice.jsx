import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";

const delay = ms => new Promise(res => setTimeout(res, ms));

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    // isLoggingOut: false,
    // isUserLoggedIn: false,
    // avatar: null,
    // name: '',
    // wishlist: [],
    // order_history: [],
};

const loginUser = createAsyncThunk('user/loginUser', async (formFields) => {
    try {
        const response = await postData('/api/user/login', formFields);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const refreshUser = createAsyncThunk('user/refreshUser', async () => {
    try {
        const response = await getData('/api/user/re-login');
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    try {
        const response = await getData('/api/user/logout');
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    } finally {
        localStorage.setItem('isAccessTokenPresent', false);
    }
});

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        const response = await getData('/api/user/details');
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const uploadAvatar = createAsyncThunk('user/uploadAvatar', async (formFields) => {
    try {
        const response = await postFile('/api/image/upload-avatar', formFields);
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
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
        updateUserAddress: (state, action) => {
            console.log('state');
            console.log(state.user);
            console.log('action');
            console.log(action.payload);
        },
    },
    extraReducers: builder => {
        builder
        .addCase(loginUser.pending, (state, action) => {
            localStorage.setItem('isAccessTokenPresent', false);
            state.error = null;
            state.user = null;
        }).addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem('isAccessTokenPresent', true);
            state.error = null;
            state.user = null;
        }).addCase(loginUser.rejected, (state, action) => {
            localStorage.setItem('isAccessTokenPresent', false);
            state.error = action.payload;
            state.user = null;
        }).addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.user = null;
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.data;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.user = null;
        }).addCase(logoutUser.pending, (state, action) => {
            state.error = null;
            state.user = null;
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.error = null;
            state.user = null;
        }).addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload;
            state.user = null;
        })
        // .addCase(refreshUser.pending, (state, action) => {
        //     state.isLoading = true;
        //     // state.isUserLoggedIn = false;
        //     // localStorage.setItem('isAccessTokenPresent', false);
        //     state.error = null;
        // }).addCase(refreshUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isUserLoggedIn = true;
        //     // localStorage.setItem('isAccessTokenPresent', true);
        //     state.error = null;
        // }).addCase(refreshUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isUserLoggedIn = false;
        //     localStorage.setItem('isAccessTokenPresent', false);
        //     state.error = action.payload;
        // })
        // .addCase(uploadAvatar.fulfilled, (state, action) => {
        //     state.avatar = action.payload[0];
        //     state.user.avatar = action.payload[0];
        // });
    }
});

export default userSlice;

export const actions = {...userSlice.actions, fetchUser, logoutUser, loginUser, refreshUser, uploadAvatar};