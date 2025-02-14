import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
const delay = ms => new Promise(res => setTimeout(res, ms));

const getData = async (url) => {
    try {
        await delay(5000);
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
        await delay(5000);
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
        console.log(err);
    }
}

export { getData, postData };