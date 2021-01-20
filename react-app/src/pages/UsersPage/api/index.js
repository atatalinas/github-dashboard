import api from '../../../config/apiConfig';

export const getAllUsers = () => api.get('/users');
