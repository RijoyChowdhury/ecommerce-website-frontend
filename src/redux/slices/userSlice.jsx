import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, postFile } from "../../api/dataService";
import countriesJson from '../../assets/countries.json';

const blankUserAddress = {
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: countriesJson[0].states[0].code,
    country: countriesJson[0].code3,
    pincode: '',
    mobile: '',
    location_type: '',
    status: '',
};

const blankUserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    userPrefix: '',
};

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    active_address: null,
    addressList: null,
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

const fetchUserAddresses = createAsyncThunk('user/fetchAddress',  async () => {
    try {
        const response = await getData('/api/address/');
        console.log('response')
        console.log(response)
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const updateUserAddresses = createAsyncThunk('user/updateAddress',  async (formFields) => {
    try {
        const id = formFields._id;
        console.log('id', id);
        const response = await postData(`/api/address/update/${id}`, formFields);
        console.log('response')
        console.log(response)
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const updateUserDetails = createAsyncThunk('user/updateUser',  async (formFields) => {
    try {
        console.log('formFields');
        console.log(formFields);
        const response = await postData('/api/user/update', formFields);
        console.log('response')
        console.log(response)
        return response;
    } catch (err) {
        return {
            success: false,
            error: true,
            message: err.message,
        };
    }
});

const createUserAddresses = createAsyncThunk('user/updateAddress',  async (formFields) => {
    try {
        const response = await postData('/api/address/add/', formFields);
        console.log('response')
        console.log(response)
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
        updateUserState: (state, action) => {
            console.log('state');
            console.log(state.user);
            console.log('action');
            console.log(action.payload);
            state.user = action.payload;
        },
        updateUserAddress: (state, action) => {
            console.log('state');
            console.log(state.user);
            console.log('action');
            console.log(action.payload);
            state.active_address = action.payload;
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
            state.addressList = null;
            state.active_address = null;
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.error = null;
            state.user = null;
            state.addressList = null;
            state.active_address = null;
        }).addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload;
            state.user = null;
            state.addressList = null;
            state.active_address = null;
        }).addCase(fetchUserAddresses.fulfilled, (state, action) => {
            state.addressList = action.payload.data.length ? action.payload.data : [{...blankUserAddress}];
            state.active_address = state.addressList[0];
        })
        // .addCase(uploadAvatar.fulfilled, (state, action) => {
        //     state.avatar = action.payload[0];
        //     state.user.avatar = action.payload[0];
        // });
    }
});

export default userSlice;

export const blankStates = {
    blankUserAddress,
    blankUserInfo,
};

export const actions = {
    ...userSlice.actions, 
    fetchUser, 
    logoutUser, 
    loginUser, 
    updateUserDetails,
    fetchUserAddresses,
    updateUserAddresses,
    createUserAddresses,
    uploadAvatar,
};