import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    users: [],
    isLoading: false,
    errors: ''
};

const usersPage = handleActions({
    [actions.GET_GITHUB_USERS_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_GITHUB_USERS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        users: payload.response
    }),
    [actions.GET_GITHUB_USERS_FAIL]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        errors: payload.response
    }),
}, defaultState);

export default usersPage;