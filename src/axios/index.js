// Set config defaults when creating the instance
import axios from "axios";
import {clearStore, store} from "../store/index.js";

// const baseUrl = "http://176.100.124.36:8000"
const baseUrl = "http://127.0.0.1:8000"

export const http = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Accept": "application/json"
    }
});

export const upload = (file, onUploadProgress, keyFile, url, callbackAppendFormData) => {
    let formData = new FormData();

    formData.append(keyFile, file);
    callbackAppendFormData(formData)

    return http.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
}

export const multipart = ( onUploadProgress, url, callbackAppendFormData) => {
    let formData = new FormData();

    callbackAppendFormData(formData)

    return http.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
}

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

http.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        clearStore()
        window.location.href = "/login";
        return Promise.reject(error);
    } else if (error.response.status === 403) {
        //place your reentry code
        return Promise.reject(error);
    }
    return Promise.reject(error);
});