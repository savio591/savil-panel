import axios from 'axios';

// Serviço do rest api do backend
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api

