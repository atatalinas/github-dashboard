import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    users: [],
    isLoading: false,
    errors: '',
    searchInputValue: ''
};

const usersPage = handleActions({
    [actions.GET_GITHUB_USERS_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_GITHUB_USERS_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            users: payload.response
        }
    },
    [actions.GET_GITHUB_USERS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response
    }),
    [actions.GET_SEARCHED_USERS_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_SEARCHED_USERS_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            users: payload.response.items
        }
    },
    [actions.GET_SEARCHED_USERS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response
    }),
    [actions.UPDATE_INPUT_VALUE]: (state, { payload }) => {
        return {
            ...state,
            searchInputValue: payload
        }
    }
}, defaultState);

export default usersPage;