import api from '../../../config/apiConfig';

export const getUserByName = (userName) => api.get(`/users/${userName}`);