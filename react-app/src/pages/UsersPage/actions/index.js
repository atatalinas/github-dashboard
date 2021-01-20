import { createAction } from 'redux-actions';

export const GET_GITHUB_USERS_REQUEST = createAction('GET_GITHUB_USERS_REQUEST');
export const GET_GITHUB_USERS_SUCCESS = createAction('GET_GITHUB_USERS_SUCCESS');
export const GET_GITHUB_USERS_FAIL = createAction('GET_GITHUB_USERS_FAIL');