import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { debounce } from 'lodash';

import UsersOverview from '../components/UsersOverview/UsersOverview';
import { GET_GITHUB_USERS_REQUEST, GET_SEARCHED_USERS_REQUEST } from '../actions';
import { ROUTES } from '../../../routes/routeNames';
import { useForm } from '../../../helpers/hooks';


const UsersContainer = () => {
    const [searchInput, setSearchInput] = useForm({ searchValue: '' });

    const dispatch = useDispatch();
    const history = useHistory();

    const { users, isLoading, errors, searchInputValue } = useSelector(state => state.usersPage);

    const handleGoToUser = useCallback((name) => {
        history.push(`${ROUTES.USERS}/${name}`);
    }, [history]);

    useEffect(() => {
        dispatch(GET_GITHUB_USERS_REQUEST())
    }, [dispatch]);


    const delayedQuery = useCallback(debounce((q) => dispatch(GET_SEARCHED_USERS_REQUEST(q)), 500), [dispatch]);

    const handleSearchInputChange = useCallback((event) => {
        setSearchInput(event);

        delayedQuery(event.target.value);
    }, [delayedQuery, setSearchInput]);

    return (
        <UsersOverview handleSearchInputChange={handleSearchInputChange} handleGoToUser={handleGoToUser} users={users} isLoading={isLoading} />
    );
};

export default UsersContainer;