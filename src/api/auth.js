import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const loging = (email, password)=> 
    API.post('/auth/login', {email, password});