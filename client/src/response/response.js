import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 3000
});


http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})
