import * as usersPageActions from '../pages/UsersPage/actions';
import * as usersPageApi from '../pages/UsersPage/api';

import * as userPageActions from '../pages/UserPage/actions';
import * as userPageApi from '../pages/UserPage/api';


const apiCallsMapping = (action) => {
    const mapping = {
        [usersPageActions.GET_GITHUB_USERS_REQUEST]: usersPageApi.getAllUsers,

        [userPageActions.GET_USER_INFO_REQUEST]: userPageApi.getUserByName
    };

    if (!mapping.hasOwnProperty(action.type)) {
        throw 'Not mapped action';
    }

    return mapping[action.type];
}

export default apiCallsMapping;