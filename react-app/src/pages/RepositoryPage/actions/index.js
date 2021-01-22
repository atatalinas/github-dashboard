import { createAction } from 'redux-actions';

export const GET_REPOSITORY_INFO_REQUEST = createAction('GET_REPOSITORY_INFO_REQUEST');
export const GET_REPOSITORY_INFO_SUCCESS = createAction('GET_REPOSITORY_INFO_SUCCESS');
export const GET_REPOSITORY_INFO_FAIL = createAction('GET_REPOSITORY_INFO_FAIL');


export const GET_REPOSITORY_ADDITIONAL_INFO_REQUEST = createAction('GET_REPOSITORY_ADDITIONAL_INFO_REQUEST');
export const GET_REPOSITORY_ADDITIONAL_INFO_SUCCESS = createAction('GET_REPOSITORY_ADDITIONAL_INFO_SUCCESS');
export const GET_REPOSITORY_ADDITIONAL_INFO_FAIL = createAction('GET_REPOSITORY_ADDITIONAL_INFO_FAIL');


export const GET_REPOSITORY_LANGUAGES_INFO_REQUEST = createAction('GET_REPOSITORY_LANGUAGES_INFO_REQUEST');
export const GET_REPOSITORY_LANGUAGES_INFO_SUCCESS = createAction('GET_REPOSITORY_LANGUAGES_INFO_SUCCESS');
export const GET_REPOSITORY_LANGUAGES_INFO_FAIL = createAction('GET_REPOSITORY_LANGUAGES_INFO_FAIL');