import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { debounce } from 'lodash';

import UsersOverview from '../components/UsersOverview/UsersOverview';
import { GET_GITHUB_USERS_REQUEST, GET_SEARCHED_USERS_REQUEST, UPDATE_CURRENT_PAGE_ID, UPDATE_INPUT_VALUE } from '../actions';
import { ROUTES } from '../../../routes/routeNames';
import { useForm } from '../../../helpers/hooks';
import { PAGE } from '../../../constants/pageConstants';

const { ITEMS_PER_PAGE, DEFAULT_PAGE_ID, DEBOUNCE_DELAY } = PAGE;

const UsersContainer = () => {
    const [searchInput, setSearchInput] = useForm({ searchValue: '' });

    const dispatch = useDispatch();

    const history = useHistory();

    const { users, isLoading, searchInputValue, currentPageId } = useSelector(state => state.usersPage);

    const handleGoToUser = useCallback((name) => {
        history.push(`${ROUTES.USERS}/${name}`);
    }, [history]);


    useEffect(() => {
        const isEmptyInput = searchInputValue.trim() === '';

        const params = {
            searchInputValue,
            currentPageId
        };

        isEmptyInput ? dispatch(GET_GITHUB_USERS_REQUEST()) : dispatch(GET_SEARCHED_USERS_REQUEST(params));
    }, []);


    const delayedQuery = useCallback(debounce((params, isEmptyInput) => isEmptyInput ? dispatch(GET_GITHUB_USERS_REQUEST()) :
        dispatch(GET_SEARCHED_USERS_REQUEST(params)), DEBOUNCE_DELAY), [dispatch]);


    const handleSearchInputChange = useCallback((event) => {
        setSearchInput(event);

        dispatch(UPDATE_INPUT_VALUE(event.target.value));

        if (currentPageId !== DEFAULT_PAGE_ID) dispatch(UPDATE_CURRENT_PAGE_ID(DEFAULT_PAGE_ID));

        const params = {
            searchInputValue: event.target.value,
            currentPageId
        };

        const isEmptyInput = event.target.value.trim() === '';

        delayedQuery(params, isEmptyInput);
    }, [dispatch, setSearchInput, currentPageId, delayedQuery]);


    const getUserSubarray = useMemo(() => {
        const firstItemIndex = (currentPageId - 1) * ITEMS_PER_PAGE;

        return users.slice(firstItemIndex, firstItemIndex + ITEMS_PER_PAGE);
    }, [currentPageId, users]);


    const handlePageChange = useCallback((event, pageId) => {
        dispatch(UPDATE_CURRENT_PAGE_ID(pageId));

        const params = {
            searchInputValue,
            currentPageId: pageId
        };

        const isEmptyInput = searchInputValue.trim() === '';

        if (!isEmptyInput) dispatch(GET_SEARCHED_USERS_REQUEST(params));
    }, [dispatch, searchInputValue]);


    return (
        <UsersOverview
            handleSearchInputChange={handleSearchInputChange}
            handleGoToUser={handleGoToUser}
            users={users}
            isLoading={isLoading}
            handlePageChange={handlePageChange}
            currentPageId={currentPageId}
            searchInputValue={searchInputValue}
            getUserSubarray={getUserSubarray}
        />
    );
};

export default UsersContainer;