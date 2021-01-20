import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UsersOverview from '../components/UsersOverview/UsersOverview';
import { GET_GITHUB_USERS_REQUEST } from '../actions';
import { ROUTES } from '../../../routes/routeNames';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { users, isLoading, errors } = useSelector(state => state.usersPage);

    const handleGoToUser = useCallback((name) => {
        history.push(`${ROUTES.USERS}/${name}`);
    }, [history]);

    useEffect(() => {
        dispatch(GET_GITHUB_USERS_REQUEST())
    }, [dispatch]);

    return (
        <UsersOverview handleGoToUser={handleGoToUser} users={users} isLoading={isLoading} />
    );
};

export default UsersContainer;