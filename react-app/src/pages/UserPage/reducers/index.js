import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    avatar: '',
    userName: '',
    linkToRepo: '',
    isLoading: false,
    errors: ''
}

const userPage = handleActions({
    [actions.GET_USER_INFO_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_USER_INFO_SUCCESS]: (state, { payload }) => {
        const { login, avatar_url, repos_url } = payload.response;

        return {
            ...state,
            isLoading: false,
            avatar: avatar_url,
            linkToRepo: repos_url,
            userName: login
        }
    },
    [actions.GET_USER_INFO_FAIL]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errors: payload.response
        }
    },
}, defaultState);

export default userPage;