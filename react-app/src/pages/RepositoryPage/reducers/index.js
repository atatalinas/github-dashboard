import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
    repositoryName: '',
    starsUrl: '',
    commitsUrl: '',
    avatar: '',
    userLogin: '',
    linkToGithub: '',
    languagesUrl: '',
    decription: '',
    isLoading: false,
    errors: ''
}

const repositoryPage = handleActions({
    [actions.GET_REPOSITORY_INFO_REQUEST]: (state) => ({
        ...state,
        isLoading: true
    }),
    [actions.GET_REPOSITORY_INFO_SUCCESS]: (state, { payload }) => {
        const { name, stargazers_url, commits_url, owner, languages_url, description } = payload.response;

        return {
            ...state,
            isLoading: false,
            repositoryName: name,
            starsUrl: stargazers_url,
            commitsUrl: commits_url,
            avatar: owner.avatar_url,
            userLogin: owner.login,
            linkToGithub: owner.url,
            languagesUrl: languages_url,
            decription: description
        }
    },
    [actions.GET_REPOSITORY_INFO_FAIL]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errors: payload.response
        }
    },
}, defaultState);

export default repositoryPage;