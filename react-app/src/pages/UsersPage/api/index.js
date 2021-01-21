import api from '../../../config/apiConfig';

export const getAllUsers = () => api.get('/users');

export const searchUsersByName = (searchValue) => api.get(`/search/users?q=${searchValue}`);
