import axios from 'axios';

export const baseURL = "https://api.github.com";

const config = {
    baseURL
};

const api = axios.create(config);

export default api;
