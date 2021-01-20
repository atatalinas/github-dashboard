import { combineReducers } from 'redux';

import usersPage from '../pages/UsersPage/reducers';
import userPage from '../pages/UserPage/reducers';


const rootReducer = combineReducers({ usersPage, userPage });

export default rootReducer;