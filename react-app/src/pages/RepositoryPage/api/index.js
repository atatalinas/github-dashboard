import api from '../../../config/apiConfig';

export const getRepositoryById = (repositoryId) => api.get(`/repositories/${repositoryId}`);