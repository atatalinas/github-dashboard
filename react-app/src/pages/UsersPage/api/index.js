import api from '../../../config/apiConfig';

import { PAGE } from '../../../constants/pageConstants';


const { ITEMS_PER_PAGE } = PAGE;

export const getAllUsers = () => api.get('/users');

export const searchUsersByName = ({ searchInputValue, currentPageId }) =>
    api.get(`/search/users?q=${searchInputValue}&page=${currentPageId}&per_page=${ITEMS_PER_PAGE}`);
