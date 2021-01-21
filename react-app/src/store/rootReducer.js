import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersPage from '../pages/UsersPage/reducers';
import userPage from '../pages/UserPage/reducers';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['usersPage, userPage'],
    transforms: []
};

const rootReducer = combineReducers({ usersPage, userPage });

export default persistReducer(persistConfig, rootReducer);