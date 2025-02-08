import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

const getData = async (url) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            return await response.json();
        }
    } catch (err) {
        console.error(err);
    }
}

const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return await response.json();
        } else {
            return await response.json();
        }
    } catch (err) {
        console.log(err);
    }
}

const verifyOTP = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return await response.json();
        } else {
            return await response.json();
        }
    } catch (err) {
        console.error(err);
    }
}

const login = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return await response.json();
        } else {
            return await response.json();
        }
    } catch (err) {
        console.error(err);
    }
}

const logout = async (url) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            return await response.json();
        }
    } catch (err) {
        console.error(err);
    }
}

const deleteData = async (url) => {
    const {res} = await axios.delete(`${apiUrl}${url}`, params);
    return res;
}

const uploadImage = async (url, formData) => {
    const {res} = await axios.post(apiUrl + url, formData);
    return res;
}

const deleteImage = async (url, image) => {
    const {res} = await axios.delete(apiUrl + url, params);
    return res;
}

export {getData, postData, verifyOTP, login, logout};