import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/postData";

const delay = ms => new Promise(res => setTimeout(res, ms));

const initialState = {
    isLoading: false,
    user: {},
    error: null,
};

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
        }).addCase(uploadPhoto.fulfilled, (state, action) => {

        });
    }
});

export default userSlice;

export const actions = {...userSlice.actions, fetchUser, uploadPhoto};